export function cn(...inputs: (string | undefined | null | boolean)[]): string {
  return inputs.filter(Boolean).join(' ');
}

/**
 * Format a number as currency
 */
export function formatCurrency(
  value: number,
  options?: {
    currency?: string;
    symbol?: string;
    locale?: string;
    minimumFractionDigits?: number;
    maximumFractionDigits?: number;
  }
): string {
  const {
    currency = 'USD',
    symbol,
    locale = 'en-US',
    minimumFractionDigits = 2,
    maximumFractionDigits = 2,
  } = options ?? {};

  // If a custom symbol is provided, use simple formatting
  if (symbol) {
    const formatted = value.toLocaleString(locale, {
      minimumFractionDigits,
      maximumFractionDigits,
    });
    return `${symbol}${formatted}`;
  }

  // Use Intl.NumberFormat for proper currency formatting
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits,
    maximumFractionDigits,
  }).format(value);
}

/**
 * Format a number as compact currency (e.g., $1.2K, $3.5M)
 */
export function formatCompactCurrency(
  value: number,
  currency = 'USD',
  locale = 'en-US'
): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    notation: 'compact',
    maximumFractionDigits: 1,
  }).format(value);
}

/**
 * Format a percentage value
 */
export function formatPercent(
  value: number,
  options?: {
    showSign?: boolean;
    decimals?: number;
  }
): string {
  const { showSign = true, decimals = 1 } = options ?? {};
  const sign = showSign && value > 0 ? '+' : '';
  return `${sign}${value.toFixed(decimals)}%`;
}
