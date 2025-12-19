import { usePriceSync } from '@/hooks';
import { AssetsScreen } from '@/screens/assets';
import { usePortfolioStore } from '@/store';
import { router } from 'expo-router';
import React, { useMemo } from 'react';

export default function AssetsRoute() {
  const positions = usePortfolioStore((state) => state.positions);
  const summary = usePortfolioStore((state) => state.summary);
  const { isFetching, refetch } = usePriceSync();

  // Map Position to screen Position type
  const screenPositions = useMemo(() => {
    return positions.map((position) => ({
      ticker: position.asset.ticker,
      assetType: position.asset.type,
      quantity: position.quantity,
      avgPrice: position.avgBuyPrice,
      currentPrice: position.currentPrice,
      currentValue: position.currentValue,
      pnl: position.pnl,
      pnlPercent: position.pnlPercent,
    }));
  }, [positions]);

  // Map to screen summary type
  const screenSummary = useMemo(() => ({
    totalValue: summary.totalValue,
    totalCost: summary.totalCost,
    totalPnL: summary.totalPnL,
    totalPnLPercent: summary.totalPnLPercent,
    positionsCount: summary.positionsCount,
  }), [summary]);

  const handleAddAsset = () => {
    router.push('/add-asset');
  };

  const handleViewAsset = (ticker: string) => {
    // Find asset by ticker
    const position = positions.find((p) => p.asset.ticker === ticker);
    if (position) {
      router.push(`/asset-details?id=${position.asset.id}`);
    }
  };

  const handleRefresh = () => {
    refetch();
  };

  return (
    <AssetsScreen
      positions={screenPositions}
      summary={screenSummary}
      onAddAsset={handleAddAsset}
      onViewAsset={handleViewAsset}
      onRefresh={handleRefresh}
      isRefreshing={isFetching}
    />
  );
}
