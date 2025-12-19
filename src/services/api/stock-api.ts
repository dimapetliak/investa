/**
 * Stock Price API Service
 * 
 * Uses Yahoo Finance API via a public proxy for free stock quotes.
 * Note: For production, consider using a paid API or your own proxy.
 */

import type { StockQuote } from './types';

// Yahoo Finance Query API (works without API key)
const YAHOO_FINANCE_BASE = 'https://query1.finance.yahoo.com/v8/finance/chart';

interface YahooChartResponse {
  chart: {
    result?: Array<{
      meta: {
        symbol: string;
        regularMarketPrice: number;
        previousClose: number;
        currency: string;
        shortName?: string;
        longName?: string;
        regularMarketVolume?: number;
        regularMarketDayHigh?: number;
        regularMarketDayLow?: number;
        regularMarketOpen?: number;
        marketCap?: number;
      };
    }>;
    error?: {
      code: string;
      description: string;
    };
  };
}

/**
 * Fetches stock quote from Yahoo Finance
 */
export async function fetchStockQuote(symbol: string): Promise<StockQuote> {
  const url = `${YAHOO_FINANCE_BASE}/${encodeURIComponent(symbol)}?interval=1d&range=1d`;

  const response = await fetch(url, {
    headers: {
      'Accept': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch stock quote for ${symbol}: ${response.status}`);
  }

  const data: YahooChartResponse = await response.json();

  if (data.chart.error) {
    throw new Error(`Yahoo Finance error: ${data.chart.error.description}`);
  }

  const result = data.chart.result?.[0];
  if (!result) {
    throw new Error(`No data found for symbol: ${symbol}`);
  }

  const { meta } = result;
  const price = meta.regularMarketPrice;
  const previousClose = meta.previousClose || price;
  const change = price - previousClose;
  const changePercent = previousClose > 0 ? (change / previousClose) * 100 : 0;

  return {
    symbol: meta.symbol,
    name: meta.shortName || meta.longName || meta.symbol,
    price,
    change,
    changePercent,
    currency: meta.currency || 'USD',
    lastUpdated: new Date().toISOString(),
    marketCap: meta.marketCap,
    volume: meta.regularMarketVolume,
    high: meta.regularMarketDayHigh,
    low: meta.regularMarketDayLow,
    open: meta.regularMarketOpen,
    previousClose: meta.previousClose,
  };
}

/**
 * Fetches multiple stock quotes
 */
export async function fetchStockQuotes(symbols: string[]): Promise<Map<string, StockQuote>> {
  const results = new Map<string, StockQuote>();

  // Fetch in parallel with concurrency limit
  const batchSize = 5;
  for (let i = 0; i < symbols.length; i += batchSize) {
    const batch = symbols.slice(i, i + batchSize);
    const promises = batch.map(async (symbol) => {
      try {
        const quote = await fetchStockQuote(symbol);
        return { symbol, quote, error: null };
      } catch (error) {
        console.warn(`Failed to fetch ${symbol}:`, error);
        return { symbol, quote: null, error };
      }
    });

    const batchResults = await Promise.all(promises);
    for (const result of batchResults) {
      if (result.quote) {
        results.set(result.symbol.toUpperCase(), result.quote);
      }
    }
  }

  return results;
}

