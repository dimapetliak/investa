import {
  EmptyState,
  GradientCard,
  PositionCard,
  ScreenLayout,
  SearchFilterWidget,
  Text,
} from '@/components';
import { useTheme } from '@/contexts/theme-context';
import { formatCurrency, formatPercent } from '@/lib/utils';
import { Spacing } from '@/theme/spacing';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { ActivityIndicator, Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { AssetsScreenProps, Position } from './index';

export const AssetsScreen = ({
  positions,
  summary,
  onAddAsset,
  onViewAsset,
  onSearch,
  onFilterToggle,
  onRefresh,
  isRefreshing = false,
}: AssetsScreenProps) => {
  const { colors, gradients } = useTheme();
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

  const isPositivePnL = (summary?.totalPnL ?? 0) >= 0;
  const hasPositions = positions && positions.length > 0;

  return (
    <ScreenLayout containerProps={{ noPadding: true }}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text variant="caption" color="muted">
            Your Portfolio
          </Text>
          <Text variant="h2" weight="bold">
            Investments
          </Text>
        </View>

        <Pressable
          onPress={onRefresh}
          disabled={isRefreshing}
          accessibilityLabel="Refresh prices"
          accessibilityHint="Syncs latest market prices for your assets"
          style={({ pressed }) => [
            styles.actionButton,
            { backgroundColor: colors.backgroundSecondary },
            pressed && styles.pressed,
          ]}
        >
          {isRefreshing ? (
            <ActivityIndicator size="small" color={colors.primary} />
          ) : (
            <Ionicons
              name="refresh-outline"
              size={24}
              color={colors.foreground}
            />
          )}
        </Pressable>
      </View>

      {/* Investment Summary Card */}
      {hasPositions && summary && (
        <View style={styles.summaryContainer}>
          <GradientCard
            colors={gradients.investments}
            padding="lg"
            style={styles.summaryCard}
          >
            <View style={styles.summaryContent}>
              <View style={styles.summaryMain}>
                <Text variant="body" style={{ color: colors.white, opacity: 0.8 }}>
                  Total Portfolio Value
                </Text>
                <Text variant="h1" weight="bold" color="white" style={styles.summaryAmount}>
                  {formatCurrency(summary.totalValue, { symbol: '$', minimumFractionDigits: 2 })}
                </Text>

                {/* P&L indicator */}
                <View style={styles.pnlRow}>
                  <View style={[styles.pnlBadge, { backgroundColor: isPositivePnL ? `${colors.success}30` : `${colors.error}30` }]}>
                    <Ionicons
                      name={isPositivePnL ? 'trending-up' : 'trending-down'}
                      size={14}
                      color={isPositivePnL ? colors.success : colors.error}
                    />
                    <Text
                      variant="small"
                      weight="semiBold"
                      style={{ color: isPositivePnL ? colors.success : colors.error, marginLeft: 4 }}
                    >
                      {formatCurrency(Math.abs(summary.totalPnL), { symbol: '$', minimumFractionDigits: 2 })}
                    </Text>
                    <Text
                      variant="small"
                      style={{ color: isPositivePnL ? colors.success : colors.error, marginLeft: 4 }}
                    >
                      ({formatPercent(Math.abs(summary.totalPnLPercent), { decimals: 2 })})
                    </Text>
                  </View>
                </View>
              </View>

              {/* Position count */}
              <View style={styles.positionCount}>
                <Text variant="h3" weight="bold" color="white">
                  {summary.positionsCount}
                </Text>
                <Text variant="small" style={{ color: colors.white, opacity: 0.7 }}>
                  {summary.positionsCount === 1 ? 'Position' : 'Positions'}
                </Text>
              </View>
            </View>
          </GradientCard>
        </View>
      )}

      <View style={styles.searchContainer}>
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
        contentContainerStyle={styles.scrollContent}
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
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.md,
  },
  actionButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressed: {
    opacity: 0.7,
  },
  summaryContainer: {
    paddingHorizontal: Spacing.md,
    marginBottom: Spacing.sm,
  },
  summaryCard: {
    paddingVertical: Spacing.lg,
  },
  summaryContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  summaryMain: {
    flex: 1,
  },
  summaryAmount: {
    fontSize: 32,
    lineHeight: 38,
    marginTop: Spacing.xs,
  },
  pnlRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Spacing.sm,
  },
  pnlBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  positionCount: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: Spacing.md,
  },
  searchContainer: {
    paddingHorizontal: Spacing.md,
    paddingBottom: 0,
  },
  scrollContent: {
    padding: Spacing.md,
    paddingTop: Spacing.sm,
  },
});
