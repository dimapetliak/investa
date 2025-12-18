import { useEffect } from 'react';
import { usePortfolioStore, useAssetsStore, useTradesStore } from '@/store';

/**
 * Hook to initialize and sync portfolio computations.
 *
 * This hook:
 * 1. Computes portfolio on mount (after hydration from MMKV)
 * 2. Subscribes to assets and trades changes
 * 3. Recomputes portfolio whenever data changes
 */
export const usePortfolioInit = () => {
  const computePortfolio = usePortfolioStore((state) => state.computePortfolio);

  useEffect(() => {
    // Initial computation after hydration
    computePortfolio();

    // Subscribe to assets store changes
    const unsubscribeAssets = useAssetsStore.subscribe(() => {
      computePortfolio();
    });

    // Subscribe to trades store changes
    const unsubscribeTrades = useTradesStore.subscribe(() => {
      computePortfolio();
    });

    // Cleanup subscriptions
    return () => {
      unsubscribeAssets();
      unsubscribeTrades();
    };
  }, [computePortfolio]);
};
