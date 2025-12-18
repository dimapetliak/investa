import { useState } from 'react';
import { Trade } from '../portfolio.types';

export const usePortfolioFilters = (
  trades?: Trade[],
  onSearch?: (query: string) => void,
  onFilterToggle?: (filter: string | number) => void
) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState<(string | number)[]>(['all']);

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

  // Filter trades based on selected filters and search
  const filteredTrades = trades?.filter((trade) => {
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

  return {
    searchQuery,
    selectedFilters,
    filteredTrades,
    handleSearchChange,
    handleSearchClear,
    handleFilterToggle,
  };
};

