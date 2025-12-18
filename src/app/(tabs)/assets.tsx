import { AssetsScreen } from '@/screens/assets';
import { usePortfolioStore } from '@/store';
import { router } from 'expo-router';
import React, { useMemo } from 'react';

export default function AssetsRoute() {
  const positions = usePortfolioStore((state) => state.positions);

  // Map Position to screen Position type
  const screenPositions = useMemo(() => {
    return positions.map((position) => ({
      ticker: position.asset.ticker,
      assetType: position.asset.type,
      quantity: position.quantity,
      avgPrice: position.avgBuyPrice,
      currentPrice: position.avgBuyPrice, // TODO: Replace with real price when available
      currentValue: position.currentValue,
      pnl: position.pnl,
      pnlPercent: position.pnlPercent,
    }));
  }, [positions]);

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

  return (
    <AssetsScreen
      positions={screenPositions}
      onAddAsset={handleAddAsset}
      onViewAsset={handleViewAsset}
    />
  );
}