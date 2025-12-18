import { FloatingActionButton, ScreenLayout } from '@/components/_shared';
import { Spacing } from '@/theme/spacing';
import React from 'react';
import { ScrollView } from 'react-native';
import {
  PortfolioSearchFilter,
  PortfolioSummarySection
} from './components';
import { TradesSection } from './components/trades-section';
import { usePortfolioFilters } from './hooks/use-portfolio-filters';
import { PortfolioScreenProps } from './portfolio.types';

export const PortfolioScreen = ({
  portfolioSummary,
  recentTrades,
  onAddTrade,
  onViewTrade,
  onViewAllAssets,
  onSearch,
  onFilterToggle,
}: PortfolioScreenProps) => {
  const {
    searchQuery,
    selectedFilters,
    filteredTrades,
    handleSearchChange,
    handleSearchClear,
    handleFilterToggle,
  } = usePortfolioFilters(recentTrades, onSearch, onFilterToggle);

  return (
    <ScreenLayout containerProps={{ paddingTop: Spacing.xxl }}>
      <PortfolioSummarySection
        portfolioSummary={portfolioSummary}
        onViewAllAssets={onViewAllAssets}
      />
      <ScrollView
        contentContainerStyle={{ padding: Spacing.md, paddingTop: Spacing.sm }}
        showsVerticalScrollIndicator={false}
      >
        <PortfolioSearchFilter
          searchValue={searchQuery}
          onSearchChange={handleSearchChange}
          onSearchClear={handleSearchClear}
          selectedFilters={selectedFilters}
          onFilterToggle={handleFilterToggle}
        />

        <TradesSection
          trades={filteredTrades}
          onViewTrade={onViewTrade}
        />
      </ScrollView>

      <FloatingActionButton
        position={{ bottom: 0, right: 30 }}
        onPress={onAddTrade}
        icon="add"
      />
    </ScreenLayout>
  );
};

