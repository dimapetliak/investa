/**
 * Hook to sync prices from React Query to the price store
 * 
 * This ensures prices are cached for offline access and
 * automatically updates the portfolio when prices change.
 */

import { useAssetsStore, usePortfolioStore, usePricesStore } from '@/store';
import type { CachedPrice } from '@/store/prices.store';
import { useEffect } from 'react';
import { useAssetPrices } from './use-prices';

/**
 * Syncs fetched prices to the store and recomputes portfolio
 */
export function usePriceSync() {
  const { prices, lastUpdated, isLoading, isFetching, refetch } = useAssetPrices();
  const setPrices = usePricesStore((state) => state.setPrices);
  const computePortfolio = usePortfolioStore((state) => state.computePortfolio);
  const assets = useAssetsStore((state) => state.assets);

  // Sync prices to store when they change
  useEffect(() => {
    if (Object.keys(prices).length === 0) {
      return;
    }

    // Convert to CachedPrice format
    const cachedPrices: CachedPrice[] = Object.entries(prices).map(([symbol, data]) => {
      const asset = assets.find(a => a.ticker.toUpperCase() === symbol);
      return {
        symbol,
        price: data.price,
        change: data.change,
        changePercent: data.changePercent,
        lastUpdated: data.lastUpdated,
        type: asset?.type || 'stock',
      };
    });

    // Update price store
    setPrices(cachedPrices);

    // Recompute portfolio with new prices
    computePortfolio();
  }, [prices, assets, setPrices, computePortfolio]);

  return {
    isLoading,
    isFetching,
    lastUpdated,
    refetch,
  };
}

