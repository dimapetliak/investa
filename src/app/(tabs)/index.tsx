import { PortfolioScreen } from '@/screens/portfolio';
import { usePortfolioStore, useTradesStore } from '@/store';
import { router } from 'expo-router';
import React, { useMemo } from 'react';

export default function HomeScreen() {
  const positions = usePortfolioStore((state) => state.positions);
  const summary = usePortfolioStore((state) => state.summary);
  const allTrades = useTradesStore((state) => state.trades);

  // Format portfolio summary for screen
  const portfolioSummary = useMemo(() => ({
    totalValue: `$${summary.totalValue.toFixed(2)}`,
    totalPnL: summary.totalPnL,
    totalPnLPercent: summary.totalPnLPercent,
    totalCost: summary.totalCost,
  }), [summary]);

  // Map positions to screen format (top 3)
  const recentPositions = useMemo(() => {
    return positions
      .slice(0, 3)
      .map((position) => ({
        ticker: position.asset.ticker,
        assetType: position.asset.type,
        quantity: position.quantity,
        avgPrice: position.avgBuyPrice,
        currentPrice: position.avgBuyPrice, // TODO: Replace with real price
        currentValue: `$${position.currentValue.toFixed(2)}`,
        pnl: position.pnl,
        pnlPercent: position.pnlPercent,
      }));
  }, [positions]);

  // Get recent trades (last 5, sorted by date)
  const recentTrades = useMemo(() => {
    return [...allTrades]
      .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
      .slice(0, 5)
      .map((trade) => {
        const position = positions.find((p) => p.asset.id === trade.assetId);
        return {
          id: trade.id,
          type: trade.type,
          assetType: position?.asset.type || 'stock',
          ticker: position?.asset.ticker || '',
          price: trade.price,
          quantity: trade.quantity,
          date: new Date(trade.timestamp).toISOString().split('T')[0],
          notes: trade.comment,
        };
      });
  }, [allTrades, positions]);

  const handleAddAsset = () => {
    router.push('/add-asset');
  };

  const handleAddTrade = () => {
    // If there are no assets, prompt to add asset first
    if (positions.length === 0) {
      router.push('/add-asset');
    } else {
      // Navigate to first asset's add trade
      router.push(`/add-trade?assetId=${positions[0].asset.id}`);
    }
  };

  const handleViewAsset = (ticker: string) => {
    const position = positions.find((p) => p.asset.ticker === ticker);
    if (position) {
      router.push(`/asset-details?id=${position.asset.id}`);
    }
  };

  const handleViewTrade = (tradeId: string) => {
    router.push(`/edit-trade?id=${tradeId}`);
  };

  const handleViewAllAssets = () => {
    router.push('/assets');
  };

  return (
    <PortfolioScreen
      portfolioSummary={portfolioSummary}
      recentPositions={recentPositions}
      recentTrades={recentTrades}
      onAddAsset={handleAddAsset}
      onAddTrade={handleAddTrade}
      onViewAsset={handleViewAsset}
      onViewTrade={handleViewTrade}
      onViewAllAssets={handleViewAllAssets}
    />
  );
}
