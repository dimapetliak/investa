import {
  AssetTag,
  Button,
  Card,
  EmptyState,
  IconButton,
  KeyValueRow,
  ScreenLayout,
  SectionHeader,
  Text,
  TradeRow,
  ValueWithChange,
} from '@/components';
import { Spacing } from '@/theme/spacing';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import type { AssetDetailsScreenProps } from './asset-details.types';

export const AssetDetailsScreen = ({
  asset,
  position,
  trades,
  onAddTrade,
  onEditAsset,
  onEditTrade,
  onDeleteTrade,
  onBack,
}: AssetDetailsScreenProps) => {
  const sortedTrades = [...trades].sort(
    (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  );

  return (
    <ScreenLayout>
      {/* Header */}
      <View style={styles.header}>
        <IconButton
          icon={<Ionicons name="arrow-back" size={24} />}
          onPress={onBack}
          variant="ghost"
        />
        <Text variant="h2" style={styles.headerTitle}>
          Asset Details
        </Text>
        <IconButton
          icon={<Ionicons name="pencil" size={20} />}
          onPress={onEditAsset}
          variant="ghost"
        />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Asset Header Card */}
        <Card style={styles.assetCard}>
          <View style={styles.assetHeader}>
            <Text variant="h2" style={styles.flex1}>
              {asset.ticker}
            </Text>
            <AssetTag type={asset.type} />
          </View>
          <Text variant="body" color="muted" style={styles.assetName}>
            {asset.name}
          </Text>

          {/* Position Value */}
          <View style={styles.valueSection}>
            <Text variant="caption" color="muted" style={styles.valueLabel}>
              Current Value
            </Text>
            <ValueWithChange
              value={`${asset.currency} ${position.currentValue.toFixed(2)}`}
              change={position.pnl}
              changePercent={position.pnlPercent}
              size="lg"
            />
          </View>
        </Card>

        {/* Position Summary */}
        <Card style={styles.summaryCard}>
          <SectionHeader title="Position Summary" />
          <KeyValueRow label="Quantity" value={position.quantity.toFixed(8)} />
          <KeyValueRow
            label="Avg Buy Price"
            value={`${asset.currency} ${position.avgBuyPrice.toFixed(2)}`}
          />
          <KeyValueRow
            label="Total Cost"
            value={`${asset.currency} ${position.totalCost.toFixed(2)}`}
          />
          <KeyValueRow
            label="P&L"
            value={`${asset.currency} ${position.pnl.toFixed(2)} (${position.pnlPercent.toFixed(2)}%)`}
            valueColor={position.pnl >= 0 ? 'positive' : 'negative'}
          />
        </Card>

        {/* Trade History */}
        <View style={styles.tradesSection}>
          <SectionHeader
            title="Trade History"
            subtitle={`${trades.length} ${trades.length === 1 ? 'trade' : 'trades'}`}
            action={
              <Button variant="outline" size="sm" onPress={onAddTrade}>
                Add Trade
              </Button>
            }
          />

          {sortedTrades.length > 0 ? (
            sortedTrades.map((trade) => (
              <TradeRow
                key={trade.id}
                type={trade.type}
                quantity={trade.quantity}
                price={trade.price}
                date={trade.timestamp}
                fee={trade.fee}
                comment={trade.comment}
                onPress={() => onEditTrade(trade.id)}
                onDelete={() => onDeleteTrade(trade.id)}
              />
            ))
          ) : (
            <EmptyState
              icon="swap-horizontal-outline"
              title="No trades yet"
              message="Add your first trade to start tracking this asset"
              actionLabel="Add Trade"
              onAction={onAddTrade}
            />
          )}
        </View>
      </ScrollView>
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.md,
    paddingTop: Spacing.md,
    marginBottom: Spacing.md,
  },
  headerTitle: {
    flex: 1,
    marginLeft: Spacing.sm,
  },
  scrollContent: {
    paddingHorizontal: Spacing.md,
  },
  assetCard: {
    marginBottom: Spacing.md,
  },
  assetHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.sm,
  },
  flex1: {
    flex: 1,
  },
  assetName: {
    marginBottom: Spacing.md,
  },
  valueSection: {
    marginBottom: Spacing.sm,
  },
  valueLabel: {
    marginBottom: 4,
  },
  summaryCard: {
    marginBottom: Spacing.md,
  },
  tradesSection: {
    marginBottom: Spacing.lg,
  },
});
