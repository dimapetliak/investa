/**
 * Crypto Price API Service
 * 
 * Uses CoinGecko API (free tier, no API key required).
 * Rate limit: 10-30 calls/minute for free tier.
 */

import type { CryptoQuote } from './types';

const COINGECKO_BASE = 'https://api.coingecko.com/api/v3';

// Common crypto symbol to CoinGecko ID mapping
const SYMBOL_TO_ID: Record<string, string> = {
  'BTC': 'bitcoin',
  'ETH': 'ethereum',
  'USDT': 'tether',
  'BNB': 'binancecoin',
  'XRP': 'ripple',
  'USDC': 'usd-coin',
  'SOL': 'solana',
  'ADA': 'cardano',
  'DOGE': 'dogecoin',
  'TRX': 'tron',
  'TON': 'the-open-network',
  'DOT': 'polkadot',
  'MATIC': 'matic-network',
  'LTC': 'litecoin',
  'SHIB': 'shiba-inu',
  'AVAX': 'avalanche-2',
  'LINK': 'chainlink',
  'XLM': 'stellar',
  'ATOM': 'cosmos',
  'UNI': 'uniswap',
  'XMR': 'monero',
  'ETC': 'ethereum-classic',
  'BCH': 'bitcoin-cash',
  'APT': 'aptos',
  'FIL': 'filecoin',
  'NEAR': 'near',
  'ARB': 'arbitrum',
  'OP': 'optimism',
  'PEPE': 'pepe',
};

interface CoinGeckoSimplePrice {
  [coinId: string]: {
    usd: number;
    usd_24h_change?: number;
    usd_24h_vol?: number;
    usd_market_cap?: number;
  };
}

interface CoinGeckoMarketData {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  circulating_supply: number;
  last_updated: string;
}

/**
 * Converts symbol to CoinGecko ID
 */
function symbolToCoinGeckoId(symbol: string): string {
  const upperSymbol = symbol.toUpperCase();
  return SYMBOL_TO_ID[upperSymbol] || symbol.toLowerCase();
}

/**
 * Fetches crypto quote from CoinGecko
 */
export async function fetchCryptoQuote(symbol: string, currency = 'usd'): Promise<CryptoQuote> {
  const coinId = symbolToCoinGeckoId(symbol);
  const url = `${COINGECKO_BASE}/coins/markets?vs_currency=${currency}&ids=${coinId}&order=market_cap_desc&per_page=1&page=1&sparkline=false&price_change_percentage=24h`;

  const response = await fetch(url, {
    headers: {
      'Accept': 'application/json',
    },
  });

  if (!response.ok) {
    if (response.status === 429) {
      throw new Error('Rate limit exceeded. Please try again later.');
    }
    throw new Error(`Failed to fetch crypto quote for ${symbol}: ${response.status}`);
  }

  const data: CoinGeckoMarketData[] = await response.json();

  if (!data || data.length === 0) {
    throw new Error(`No data found for symbol: ${symbol}`);
  }

  const coin = data[0];

  return {
    symbol: coin.symbol.toUpperCase(),
    name: coin.name,
    price: coin.current_price,
    change: coin.price_change_24h,
    changePercent: coin.price_change_percentage_24h,
    currency: currency.toUpperCase(),
    lastUpdated: coin.last_updated,
    marketCap: coin.market_cap,
    volume24h: coin.total_volume,
    high24h: coin.high_24h,
    low24h: coin.low_24h,
    circulatingSupply: coin.circulating_supply,
    image: coin.image,
  };
}

/**
 * Fetches multiple crypto quotes (more efficient batch call)
 */
export async function fetchCryptoQuotes(
  symbols: string[],
  currency = 'usd'
): Promise<Map<string, CryptoQuote>> {
  const results = new Map<string, CryptoQuote>();
  
  if (symbols.length === 0) {
    return results;
  }

  // Convert symbols to CoinGecko IDs
  const coinIds = symbols.map(symbolToCoinGeckoId).join(',');
  const url = `${COINGECKO_BASE}/coins/markets?vs_currency=${currency}&ids=${coinIds}&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h`;

  try {
    const response = await fetch(url, {
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      if (response.status === 429) {
        console.warn('CoinGecko rate limit exceeded');
        return results;
      }
      throw new Error(`Failed to fetch crypto quotes: ${response.status}`);
    }

    const data: CoinGeckoMarketData[] = await response.json();

    for (const coin of data) {
      const quote: CryptoQuote = {
        symbol: coin.symbol.toUpperCase(),
        name: coin.name,
        price: coin.current_price,
        change: coin.price_change_24h || 0,
        changePercent: coin.price_change_percentage_24h || 0,
        currency: currency.toUpperCase(),
        lastUpdated: coin.last_updated,
        marketCap: coin.market_cap,
        volume24h: coin.total_volume,
        high24h: coin.high_24h,
        low24h: coin.low_24h,
        circulatingSupply: coin.circulating_supply,
        image: coin.image,
      };
      results.set(coin.symbol.toUpperCase(), quote);
    }
  } catch (error) {
    console.error('Error fetching crypto quotes:', error);
  }

  return results;
}

/**
 * Simple price check (faster, less data)
 */
export async function fetchCryptoPrices(
  symbols: string[],
  currency = 'usd'
): Promise<Map<string, number>> {
  const results = new Map<string, number>();

  if (symbols.length === 0) {
    return results;
  }

  const coinIds = symbols.map(symbolToCoinGeckoId).join(',');
  const url = `${COINGECKO_BASE}/simple/price?ids=${coinIds}&vs_currencies=${currency}`;

  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      return results;
    }

    const data: CoinGeckoSimplePrice = await response.json();

    // Map back to original symbols
    for (const symbol of symbols) {
      const coinId = symbolToCoinGeckoId(symbol);
      const priceData = data[coinId];
      if (priceData) {
        results.set(symbol.toUpperCase(), priceData.usd);
      }
    }
  } catch (error) {
    console.error('Error fetching crypto prices:', error);
  }

  return results;
}

