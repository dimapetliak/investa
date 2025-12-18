import { SearchFilterWidget } from '@/components/_shared';
import React from 'react';
import { View } from 'react-native';
import { PortfolioSearchFilterProps } from './portfolio-search-filter.types';

export const PortfolioSearchFilter = ({
  searchValue,
  onSearchChange,
  onSearchClear,
  selectedFilters,
  onFilterToggle,
}: PortfolioSearchFilterProps) => {
  const filterOptions = [
    { label: 'All', value: 'all' },
    { label: 'Stocks', value: 'stock' },
    { label: 'Crypto', value: 'crypto' },
  ];

  return (
    <View style={{ paddingBottom: 0 }}>
      <SearchFilterWidget
        searchValue={searchValue}
        onSearchChange={onSearchChange}
        onSearchClear={onSearchClear}
        filters={filterOptions}
        selectedFilters={selectedFilters}
        onFilterToggle={onFilterToggle}
        placeholder="Search positions and trades..."
      />
    </View>
  );
};

