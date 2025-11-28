import { Button, SearchFilterWidgetProps, SearchInput } from '@/components/_shared';
import React from 'react';
import { View } from 'react-native';
import { styles } from './search-filter-widget.styles';


export const SearchFilterWidget = ({
  searchValue,
  onSearchChange,
  onSearchClear,
  filters,
  selectedFilters = [],
  onFilterToggle,
  placeholder = 'Search...',
  style,
}: SearchFilterWidgetProps) => {
  return (
    <View style={[styles.container, style]}>
      <SearchInput
        value={searchValue}
        onChangeText={onSearchChange}
        onClear={onSearchClear}
        placeholder={placeholder}
      />
      
      {filters && filters.length > 0 && (
        <View style={styles.filtersContainer}>
          {filters.map((filter) => {
            const isSelected = selectedFilters.includes(filter.value);
            return (
              <Button
                key={filter.value}
                variant={isSelected ? 'primary' : 'outline'}
                size="sm"
                onPress={() => onFilterToggle?.(filter.value)}
                style={styles.filterButton}
              >
                {filter.label}
              </Button>
            );
          })}
        </View>
      )}
    </View>
  );
};

