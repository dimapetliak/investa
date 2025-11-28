import {
  Button,
  Card,
  EmptyState,
  FloatingActionButton,
  PortfolioSummaryCard,
  PositionCard,
  ScreenLayout,
  SearchFilterWidget,
  SectionHeader,
  TradeRow,
} from '@/components/_shared';
import { Spacing } from '@/theme/spacing';
import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { PortfolioScreenProps } from './portfolio.types';

export const PortfolioScreen = ({
  portfolioSummary,
  recentPositions,
  recentTrades,
  onAddAsset,
  onAddTrade,
  onViewAsset,
  onViewTrade,
  onViewAllAssets,
  onSearch,
  onFilterToggle,
}: PortfolioScreenProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState<(string | number)[]>(['all']);

  const filterOptions = [
    { label: 'All', value: 'all' },
    { label: 'Stocks', value: 'stock' },
    { label: 'Crypto', value: 'crypto' },
  ];

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    onSearch?.(value);
  };

  const handleSearchClear = () => {
    setSearchQuery('');
    onSearch?.('');
  };

  const handleFilterToggle = (value: string | number) => {
    setSelectedFilters((prev) => {
      if (value === 'all') {
        const newFilters = prev.includes('all') ? [] : ['all'];
        onFilterToggle?.(value);
        return newFilters;
      }
      const newFilters = prev.includes(value)
        ? prev.filter((f) => f !== value && f !== 'all')
        : [...prev.filter((f) => f !== 'all'), value];
      onFilterToggle?.(value);
      return newFilters;
    });
  };

  // Filter positions and trades based on selected filters and search
  const filteredPositions = recentPositions?.filter((position) => {
    // Filter by selected filters
    if (selectedFilters.includes('all') || selectedFilters.length === 0) {
      // If "All" is selected or no filters, show all
    } else {
      if (!selectedFilters.includes(position.assetType)) {
        return false;
      }
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      return position.ticker.toLowerCase().includes(query);
    }

    return true;
  });

  const filteredTrades = recentTrades?.filter((trade) => {
    // Filter by selected filters
    if (selectedFilters.includes('all') || selectedFilters.length === 0) {
      // If "All" is selected or no filters, show all
    } else {
      if (!selectedFilters.includes(trade.assetType)) {
        return false;
      }
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      return trade.ticker.toLowerCase().includes(query);
    }

    return true;
  });

  return (
    <ScreenLayout containerProps={{ noPadding: true }}>
      <View style={{ padding: Spacing.md, paddingBottom: 0 }}>
        <SearchFilterWidget
          searchValue={searchQuery}
          onSearchChange={handleSearchChange}
          onSearchClear={handleSearchClear}
          filters={filterOptions}
          selectedFilters={selectedFilters}
          onFilterToggle={handleFilterToggle}
          placeholder="Search positions and trades..."
        />
      </View>

      <ScrollView
        contentContainerStyle={{ padding: Spacing.md, paddingTop: Spacing.sm }}
        showsVerticalScrollIndicator={false}
      >
        {portfolioSummary && (
          <PortfolioSummaryCard
            totalValue={portfolioSummary.totalValue}
            totalPnL={portfolioSummary.totalPnL}
            totalPnLPercent={portfolioSummary.totalPnLPercent}
            totalCost={portfolioSummary.totalCost}
            onPress={onViewAllAssets}
          />
        )}

        <SectionHeader
          title="Recent Positions"
          rightAction={
            <Button variant="outline" size="sm" onPress={onViewAllAssets}>
              View All
            </Button>
          }
        />
        {filteredPositions && filteredPositions.length > 0 ? (
          <View style={{ gap: Spacing.md, marginBottom: Spacing.lg }}>
            {filteredPositions.map((position, index) => (
              <PositionCard
                key={index}
                ticker={position.ticker}
                assetType={position.assetType}
                quantity={position.quantity}
                avgPrice={position.avgPrice}
                currentPrice={position.currentPrice}
                currentValue={position.currentValue}
                pnl={position.pnl}
                pnlPercent={position.pnlPercent}
                onPress={() => onViewAsset(position.ticker)}
              />
            ))}
          </View>
        ) : (
          <Card style={{ marginBottom: Spacing.lg }}>
            <EmptyState
              icon="wallet-outline"
              title="No positions yet"
              message="Add your first asset to start tracking"
              actionLabel="Add Asset"
              onAction={onAddAsset}
            />
          </Card>
        )}

        <SectionHeader
          title="Recent Trades"
          rightAction={
            <Button variant="outline" size="sm" onPress={onAddTrade}>
              Add Trade
            </Button>
          }
        />
        {filteredTrades && filteredTrades.length > 0 ? (
          <Card>
            {filteredTrades.map((trade) => (
              <TradeRow
                key={trade.id}
                ticker={trade.ticker}
                assetType={trade.assetType}
                type={trade.type}
                price={trade.price}
                quantity={trade.quantity}
                date={trade.date}
                onPress={() => onViewTrade(trade.id)}
              />
            ))}
          </Card>
        ) : (
          <Card>
            <EmptyState
              icon="swap-horizontal-outline"
              title="No trades yet"
              message="Record your buy and sell transactions"
              actionLabel="Add Trade"
              onAction={onAddTrade}
            />
          </Card>
        )}
      </ScrollView>

      <FloatingActionButton onPress={onAddAsset} icon="add" />
    </ScreenLayout>
  );
};

