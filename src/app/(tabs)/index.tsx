import { PortfolioScreen } from '@/screens/portfolio';
import { usePortfolioStore, useTradesStore, useUserName } from '@/store';
import { router } from 'expo-router';
import React, { useMemo } from 'react';
import { Alert } from 'react-native';

// Dummy savings value for now (will be replaced with real data later)
const DUMMY_SAVINGS_VALUE = 21500;

export default function HomeScreen() {
  const positions = usePortfolioStore((state) => state.positions);
  const summary = usePortfolioStore((state) => state.summary);
  const allTrades = useTradesStore((state) => state.trades);
  const userName = useUserName();

  // Format net worth summary
  const netWorthSummary = useMemo(() => ({
    totalNetWorth: summary.totalValue + DUMMY_SAVINGS_VALUE,
    investmentsValue: summary.totalValue,
    savingsValue: DUMMY_SAVINGS_VALUE,
    investmentsPnL: summary.totalPnL,
    investmentsPnLPercent: summary.totalPnLPercent,
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
        currentValue: position.currentValue,
        pnl: position.pnl,
        pnlPercent: position.pnlPercent,
      }));
  }, [positions]);

  // Get recent trades (last 5, sorted by date)
  // Note: Using a separate memo for position lookup to avoid recalc when positions change
  const positionMap = useMemo(() => {
    return new Map(positions.map((p) => [p.asset.id, p]));
  }, [positions]);

  const recentTrades = useMemo(() => {
    return [...allTrades]
      .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
      .slice(0, 5)
      .map((trade) => {
        const position = positionMap.get(trade.assetId);
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
  }, [allTrades, positionMap]);

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

  const handleNotificationPress = () => {
    Alert.alert('Notifications', 'Notifications feature coming soon!');
  };

  return (
    <PortfolioScreen
      userName={userName}
      notificationCount={0}
      onNotificationPress={handleNotificationPress}
      netWorthSummary={netWorthSummary}
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
