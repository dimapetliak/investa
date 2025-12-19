import type { AssetType, CreateAssetInput, CreateTradeInput, CurrencyCode } from '@/types';

// IBKR CSV position row structure
interface IBKRPositionRow {
  ClientAccountID: string;
  CurrencyPrimary: string;
  AssetClass: string;
  SubCategory: string;
  Symbol: string;
  Description: string;
  Quantity: string;
  MarkPrice: string;
  PositionValue: string;
  CostBasisPrice: string;
  CostBasisMoney: string;
  FifoPnlUnrealized: string;
  ReportDate: string;
  ISIN: string;
  ListingExchange: string;
  Side: string;
  LevelOfDetail: string;
}

export interface ParsedPosition {
  asset: CreateAssetInput;
  trade: Omit<CreateTradeInput, 'assetId'>;
}

export interface CSVParseResult {
  positions: ParsedPosition[];
  errors: string[];
  skipped: string[];
}

/**
 * Parse a CSV string into rows
 */
function parseCSVLine(line: string): string[] {
  const result: string[] = [];
  let current = '';
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];

    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      result.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }

  result.push(current.trim());
  return result;
}

/**
 * Parse CSV content into rows with headers
 */
function parseCSVWithHeaders(content: string): Record<string, string>[] {
  const lines = content.split('\n').filter((line) => line.trim());
  const results: Record<string, string>[] = [];

  // Find the position data section header (starts with ClientAccountID and has FXRateToBase)
  let headerIndex = -1;
  let headers: string[] = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.includes('ClientAccountID') && line.includes('FXRateToBase') && line.includes('Quantity')) {
      headerIndex = i;
      headers = parseCSVLine(line);
      break;
    }
  }

  if (headerIndex === -1) {
    return results;
  }

  // Parse data rows after the header
  for (let i = headerIndex + 1; i < lines.length; i++) {
    const line = lines[i];

    // Stop if we hit a new section (different header structure)
    if (line.startsWith('"ClientAccountID"') && !line.includes('FXRateToBase')) {
      break;
    }

    // Skip empty lines
    if (!line.trim()) continue;

    const values = parseCSVLine(line);

    // Skip if this doesn't look like a data row
    if (values.length < headers.length / 2) continue;

    const row: Record<string, string> = {};
    for (let j = 0; j < headers.length; j++) {
      row[headers[j]] = values[j] || '';
    }

    results.push(row);
  }

  return results;
}

/**
 * Map IBKR SubCategory to our AssetType
 */
function mapAssetType(subCategory: string, assetClass: string): AssetType {
  // For now, treat everything as stock (including ETFs)
  // Could extend this to support 'etf' type in the future
  if (assetClass === 'STK') {
    return 'stock';
  }
  return 'stock';
}

/**
 * Map currency string to our CurrencyCode
 */
function mapCurrency(currency: string): CurrencyCode {
  const upperCurrency = currency.toUpperCase();
  if (upperCurrency === 'EUR') return 'EUR';
  return 'USD'; // Default to USD
}

/**
 * Parse IBKR report date (YYYYMMDD) to ISO string
 */
function parseReportDate(reportDate: string): string {
  if (!reportDate || reportDate.length !== 8) {
    return new Date().toISOString();
  }

  const year = reportDate.substring(0, 4);
  const month = reportDate.substring(4, 6);
  const day = reportDate.substring(6, 8);

  return new Date(`${year}-${month}-${day}T12:00:00Z`).toISOString();
}

/**
 * Parse IBKR CSV export and extract positions
 */
export function parseIBKRCSV(content: string): CSVParseResult {
  const result: CSVParseResult = {
    positions: [],
    errors: [],
    skipped: [],
  };

  try {
    const rows = parseCSVWithHeaders(content);

    for (const row of rows) {
      // Skip summary/total rows
      if (!row.Symbol || row.Symbol === '' || row.LevelOfDetail !== 'SUMMARY') {
        if (row.Symbol && row.LevelOfDetail !== 'SUMMARY') {
          result.skipped.push(`Skipped non-summary row for ${row.Symbol}`);
        }
        continue;
      }

      // Skip if no quantity
      const quantity = parseFloat(row.Quantity);
      if (isNaN(quantity) || quantity <= 0) {
        result.skipped.push(`Skipped ${row.Symbol}: invalid quantity`);
        continue;
      }

      // Skip non-stock assets for now
      if (row.AssetClass !== 'STK') {
        result.skipped.push(`Skipped ${row.Symbol}: asset class ${row.AssetClass} not supported`);
        continue;
      }

      try {
        const costBasisPrice = parseFloat(row.CostBasisPrice) || 0;

        const position: ParsedPosition = {
          asset: {
            type: mapAssetType(row.SubCategory, row.AssetClass),
            ticker: row.Symbol,
            name: row.Description || row.Symbol,
            currency: mapCurrency(row.CurrencyPrimary),
          },
          trade: {
            type: 'buy',
            quantity: quantity,
            price: costBasisPrice,
            timestamp: parseReportDate(row.ReportDate),
            comment: `Imported from IBKR on ${new Date().toLocaleDateString()}`,
          },
        };

        result.positions.push(position);
      } catch (parseError) {
        result.errors.push(`Error parsing ${row.Symbol}: ${parseError}`);
      }
    }
  } catch (error) {
    result.errors.push(`CSV parsing error: ${error}`);
  }

  return result;
}

/**
 * Validate that the content looks like an IBKR CSV export
 */
export function isValidIBKRCSV(content: string): boolean {
  return (
    content.includes('ClientAccountID') &&
    content.includes('Symbol') &&
    content.includes('Quantity') &&
    content.includes('CostBasisPrice')
  );
}

