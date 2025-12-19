import type {
  CryptoPriceSource,
  PriceRefreshInterval,
  StockPriceSource,
} from '@/store';

export const THEME_OPTIONS = [
  { label: 'Light', value: 'light' },
  { label: 'Dark', value: 'dark' },
  { label: 'System', value: 'system' },
] as const;

export const CURRENCY_OPTIONS = [
  { label: 'USD - US Dollar', value: 'USD' },
  { label: 'EUR - Euro', value: 'EUR' },
  { label: 'GBP - British Pound', value: 'GBP' },
  { label: 'JPY - Japanese Yen', value: 'JPY' },
  { label: 'CAD - Canadian Dollar', value: 'CAD' },
  { label: 'AUD - Australian Dollar', value: 'AUD' },
  { label: 'CHF - Swiss Franc', value: 'CHF' },
] as const;

export const PRICE_REFRESH_OPTIONS: { label: string; value: PriceRefreshInterval }[] = [
  { label: 'Manual only', value: 'manual' },
  { label: 'Every 1 minute', value: '1min' },
  { label: 'Every 5 minutes', value: '5min' },
  { label: 'Every 15 minutes', value: '15min' },
  { label: 'Every hour', value: '1hour' },
];

export const STOCK_PRICE_SOURCE_OPTIONS: { label: string; value: StockPriceSource }[] = [
  { label: 'Yahoo Finance', value: 'yahoo' },
  { label: 'Alpha Vantage', value: 'alphavantage' },
];

export const CRYPTO_PRICE_SOURCE_OPTIONS: { label: string; value: CryptoPriceSource }[] = [
  { label: 'CoinGecko', value: 'coingecko' },
  { label: 'Binance', value: 'binance' },
];

