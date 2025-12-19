import { useTheme } from '@/contexts/theme-context';
import { Radius, Spacing } from '@/theme';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { Input, Text } from '../atoms';


export interface FilterOption {
  label: string;
  value: string | number;
}

export interface SearchFilterWidgetProps {
  searchValue: string;
  onSearchChange: (value: string) => void;
  onSearchClear: () => void;
  filters?: FilterOption[];
  selectedFilters?: (string | number)[];
  onFilterToggle?: (value: string | number) => void;
  placeholder?: string;
}

export const SearchFilterWidget: React.FC<SearchFilterWidgetProps> = ({
  searchValue,
  onSearchChange,
  onSearchClear,
  filters = [],
  selectedFilters = [],
  onFilterToggle,
  placeholder = 'Search...',
}) => {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <Input
        value={searchValue}
        onChangeText={onSearchChange}
        placeholder={placeholder}
        leftElement={
          <Ionicons name="search" size={20} color={colors.foregroundMuted} />
        }
        rightElement={
          searchValue ? (
            <Pressable onPress={onSearchClear}>
              <Ionicons name="close-circle" size={20} color={colors.foregroundMuted} />
            </Pressable>
          ) : undefined
        }
      />

      {filters.length > 0 && (
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filtersContainer}
        >
          {filters.map((filter) => {
            const isSelected = selectedFilters.includes(filter.value);
            return (
              <Pressable
                key={filter.value}
                onPress={() => onFilterToggle?.(filter.value)}
                style={({ pressed }) => [
                  styles.filterChip,
                  {
                    backgroundColor: isSelected
                      ? colors.primary
                      : colors.backgroundMuted,
                    borderColor: isSelected ? colors.primary : colors.border,
                    opacity: pressed ? 0.7 : 1,
                  },
                ]}
              >
                <Text
                  variant="caption"
                  weight="medium"
                  style={{
                    color: isSelected ? '#FFFFFF' : colors.foreground,
                  }}
                >
                  {filter.label}
                </Text>
              </Pressable>
            );
          })}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: Spacing.md,
  },
  filtersContainer: {
    gap: Spacing.sm,
    paddingTop: Spacing.sm,
  },
  filterChip: {
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    borderRadius: Radius.full,
    borderWidth: 1,
  },
});
