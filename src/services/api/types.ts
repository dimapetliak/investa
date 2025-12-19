/**
 * Price API Types
 */

export interface PriceData {
  symbol: string;
  price: number;
  change: number;
  changePercent: number;
  currency: string;
  lastUpdated: string;
}

export interface StockQuote extends PriceData {
  name: string;
  marketCap?: number;
  volume?: number;
  high?: number;
  low?: number;
  open?: number;
  previousClose?: number;
}

export interface CryptoQuote extends PriceData {
  name: string;
  marketCap?: number;
  volume24h?: number;
  high24h?: number;
  low24h?: number;
  circulatingSupply?: number;
  image?: string;
}

export interface PriceApiError {
  code: string;
  message: string;
  symbol?: string;
}

export type PriceSource = 'yahoo' | 'alphavantage' | 'coingecko' | 'binance';

