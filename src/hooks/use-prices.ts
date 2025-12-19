/**
 * React Query hooks for fetching asset prices
 */

import {
  fetchCryptoQuotes,
  fetchStockQuotes,
  type CryptoQuote,
  type StockQuote,
} from '@/services/api';
import { useAssetsStore } from '@/store';
import { useSettingsStore } from '@/store/settings.store';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useCallback, useMemo } from 'react';

// Query keys
export const priceKeys = {
  all: ['prices'] as const,
  stocks: (symbols: string[]) => [...priceKeys.all, 'stocks', symbols] as const,
  crypto: (symbols: string[]) => [...priceKeys.all, 'crypto', symbols] as const,
  stock: (symbol: string) => [...priceKeys.all, 'stock', symbol] as const,
  cryptoSingle: (symbol: string) => [...priceKeys.all, 'crypto', symbol] as const,
};

// Refresh interval mapping (in milliseconds)
const REFRESH_INTERVALS: Record<string, number | false> = {
  'manual': false,
  '1min': 60 * 1000,
  '5min': 5 * 60 * 1000,
  '15min': 15 * 60 * 1000,
  '1hour': 60 * 60 * 1000,
};

interface PriceMap {
  [symbol: string]: {
    price: number;
    change: number;
    changePercent: number;
    lastUpdated: string;
  };
}

/**
 * Hook to fetch all asset prices based on current portfolio
 */
export function useAssetPrices() {
  const assets = useAssetsStore((state) => state.assets);
  const refreshInterval = useSettingsStore((state) => state.priceRefreshInterval);

  // Separate stocks and crypto
  const { stockSymbols, cryptoSymbols } = useMemo(() => {
    const stocks: string[] = [];
    const crypto: string[] = [];

    for (const asset of assets) {
      if (asset.type === 'stock') {
        stocks.push(asset.ticker);
      } else if (asset.type === 'crypto') {
        crypto.push(asset.ticker);
      }
    }

    return { stockSymbols: stocks, cryptoSymbols: crypto };
  }, [assets]);

  const refetchInterval = REFRESH_INTERVALS[refreshInterval];

  // Fetch stock prices
  const stocksQuery = useQuery({
    queryKey: priceKeys.stocks(stockSymbols),
    queryFn: () => fetchStockQuotes(stockSymbols),
    enabled: stockSymbols.length > 0,
    staleTime: 30 * 1000, // Consider data stale after 30 seconds
    gcTime: 5 * 60 * 1000, // Keep in cache for 5 minutes
    refetchInterval: refetchInterval || undefined,
    refetchOnWindowFocus: true,
  });

  // Fetch crypto prices
  const cryptoQuery = useQuery({
    queryKey: priceKeys.crypto(cryptoSymbols),
    queryFn: () => fetchCryptoQuotes(cryptoSymbols),
    enabled: cryptoSymbols.length > 0,
    staleTime: 30 * 1000,
    gcTime: 5 * 60 * 1000,
    refetchInterval: refetchInterval || undefined,
    refetchOnWindowFocus: true,
  });

  // Combine prices into a single map
  const prices = useMemo<PriceMap>(() => {
    const result: PriceMap = {};

    // Add stock prices
    if (stocksQuery.data) {
      stocksQuery.data.forEach((quote, symbol) => {
        result[symbol] = {
          price: quote.price,
          change: quote.change,
          changePercent: quote.changePercent,
          lastUpdated: quote.lastUpdated,
        };
      });
    }

    // Add crypto prices
    if (cryptoQuery.data) {
      cryptoQuery.data.forEach((quote, symbol) => {
        result[symbol] = {
          price: quote.price,
          change: quote.change,
          changePercent: quote.changePercent,
          lastUpdated: quote.lastUpdated,
        };
      });
    }

    return result;
  }, [stocksQuery.data, cryptoQuery.data]);

  // Get last update time
  const lastUpdated = useMemo(() => {
    const times: string[] = [];
    
    if (stocksQuery.dataUpdatedAt) {
      times.push(new Date(stocksQuery.dataUpdatedAt).toISOString());
    }
    if (cryptoQuery.dataUpdatedAt) {
      times.push(new Date(cryptoQuery.dataUpdatedAt).toISOString());
    }

    if (times.length === 0) return null;
    return times.sort().pop() || null;
  }, [stocksQuery.dataUpdatedAt, cryptoQuery.dataUpdatedAt]);

  return {
    prices,
    lastUpdated,
    isLoading: stocksQuery.isLoading || cryptoQuery.isLoading,
    isFetching: stocksQuery.isFetching || cryptoQuery.isFetching,
    isError: stocksQuery.isError || cryptoQuery.isError,
    error: stocksQuery.error || cryptoQuery.error,
    refetch: useCallback(() => {
      stocksQuery.refetch();
      cryptoQuery.refetch();
    }, [stocksQuery, cryptoQuery]),
  };
}

/**
 * Hook to get price for a single asset
 */
export function useAssetPrice(symbol: string, type: 'stock' | 'crypto') {
  const { prices, isLoading, isFetching, error, refetch } = useAssetPrices();

  const priceData = prices[symbol.toUpperCase()];

  return {
    price: priceData?.price ?? null,
    change: priceData?.change ?? 0,
    changePercent: priceData?.changePercent ?? 0,
    lastUpdated: priceData?.lastUpdated ?? null,
    isLoading,
    isFetching,
    error,
    refetch,
  };
}

/**
 * Hook to manually refresh all prices
 */
export function useRefreshPrices() {
  const queryClient = useQueryClient();

  return useCallback(() => {
    queryClient.invalidateQueries({ queryKey: priceKeys.all });
  }, [queryClient]);
}

/**
 * Hook to get formatted price display
 */
export function usePriceDisplay(symbol: string, type: 'stock' | 'crypto') {
  const { price, change, changePercent, isLoading } = useAssetPrice(symbol, type);

  return {
    price,
    priceFormatted: price !== null ? `$${price.toFixed(2)}` : '--',
    change,
    changeFormatted: change !== 0 ? `${change >= 0 ? '+' : ''}${change.toFixed(2)}` : '--',
    changePercent,
    changePercentFormatted: changePercent !== 0 ? `${changePercent >= 0 ? '+' : ''}${changePercent.toFixed(2)}%` : '--',
    isPositive: change >= 0,
    isLoading,
  };
}

