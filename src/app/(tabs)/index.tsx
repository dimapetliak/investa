import { PortfolioScreen } from '@/screens/portfolio';
import { router } from 'expo-router';
import React from 'react';

export default function HomeScreen() {
  // Placeholder data - replace with actual data from your state management
  const portfolioSummary = {
    totalValue: '$10,500.00',
    totalPnL: 500.00,
    totalPnLPercent: 5.0,
    totalCost: 10000.00,
  };

  const recentPositions = [
    {
      ticker: 'AAPL',
      assetType: 'stock' as const,
      quantity: 10,
      avgPrice: 150.00,
      currentPrice: 155.50,
      currentValue: '$1,555.00',
      pnl: 55.00,
      pnlPercent: 3.67,
    },
    {
      ticker: 'BTC',
      assetType: 'crypto' as const,
      quantity: 0.5,
      avgPrice: 45000.00,
      currentPrice: 46000.00,
      currentValue: '$23,000.00',
      pnl: 500.00,
      pnlPercent: 2.22,
    },
  ];

  const recentTrades = [
    {
      id: '1',
      type: 'buy' as const,
      assetType: 'stock' as const,
      ticker: 'AAPL',
      price: 150.00,
      quantity: 10,
      date: '2024-01-15',
      notes: 'Initial purchase',
    },
    {
      id: '2',
      type: 'buy' as const,
      assetType: 'crypto' as const,
      ticker: 'BTC',
      price: 45000.00,
      quantity: 0.5,
      date: '2024-01-20',
    },
    {
      id: '3',
      type: 'sell' as const,
      assetType: 'stock' as const,
      ticker: 'TSLA',
      price: 250.00,
      quantity: 5,
      date: '2024-01-25',
      notes: 'Profit taking',
    },
    {
      id: '4',
      type: 'buy' as const,
      assetType: 'stock' as const,
      ticker: 'MSFT',
      price: 380.00,
      quantity: 3,
      date: '2024-02-01',
    },
  ];

  const handleAddAsset = () => {
    router.push('/add-asset');
  };

  const handleAddTrade = () => {
    router.push('/add-trade');
  };

  const handleViewAsset = (ticker: string) => {
    // Navigate to asset detail or edit screen
    router.push(`/edit-asset?ticker=${ticker}`);
  };

  const handleViewTrade = (tradeId: string) => {
    // Navigate to trade edit screen
    router.push(`/edit-trade?id=${tradeId}`);
  };

  const handleViewAllAssets = () => {
    router.push('/assets');
  };

  const handleSearch = (query: string) => {
    // TODO: Implement search logic
    console.log('Search:', query);
  };

  const handleFilterToggle = (filter: string | number) => {
    // TODO: Implement filter logic
    console.log('Filter:', filter);
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
      onSearch={handleSearch}
      onFilterToggle={handleFilterToggle}
    />
  );
}

