import {
  EmptyState,
  FloatingActionButton,
  PositionCard,
  ScreenLayout,
  SearchFilterWidget,
} from '@/components/_shared';
import { Spacing } from '@/theme/spacing';
import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { AssetsScreenProps, Position } from './index';

export const AssetsScreen = ({
  positions,
  onAddAsset,
  onViewAsset,
  onSearch,
  onFilterToggle,
}: AssetsScreenProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState<(string | number)[]>(['all']);

  const filterOptions = [
    { label: 'All', value: 'all' },
    { label: 'Stocks', value: 'stock' },
    { label: 'Crypto', value: 'crypto' },
  ];

  const filteredPositions = positions?.filter((position: Position) => {
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
      return (
        position.ticker.toLowerCase().includes(query) ||
        position.assetType.toLowerCase().includes(query)
      );
    }

    return true;
  });

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
          placeholder="Search assets..."
        />
      </View>

      <ScrollView
        contentContainerStyle={{ padding: Spacing.md, paddingTop: Spacing.sm }}
        showsVerticalScrollIndicator={false}
      >
        {filteredPositions && filteredPositions.length > 0 ? (
          filteredPositions.map((position: Position, index: number) => (
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
          ))
        ) : (
          <EmptyState
            icon="wallet-outline"
            title="No assets found"
            message="Start tracking your investments by adding your first asset"
            actionLabel="Add Asset"
            onAction={onAddAsset}
          />
        )}
      </ScrollView>

      <FloatingActionButton onPress={onAddAsset} icon="add" />
    </ScreenLayout>
  );
};

