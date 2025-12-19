import {
  AssetTag,
  Button,
  Card,
  EmptyState,
  KeyValueRow,
  ScreenLayout,
  SectionHeader,
  Text,
  TradeRow,
  ValueWithChange,
} from '@/components';
import { useTheme } from '@/contexts/theme-context';
import { Spacing } from '@/theme/spacing';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, View } from 'react-native';
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
  const { colors } = useTheme();
  const sortedTrades = [...trades].sort(
    (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  );

  return (
    <ScreenLayout>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: Spacing.md, paddingHorizontal: Spacing.md, paddingTop: Spacing.md }}>
        <Button variant="secondary" onPress={onBack} style={{ marginRight: Spacing.sm }}>
          <Ionicons name="arrow-back" size={24} color={colors.primary} />
        </Button>
        <Text variant="h2" style={{ flex: 1 }}>Asset Details</Text>
        <Button variant="secondary" onPress={onEditAsset}>
          <Ionicons name="pencil" size={20} color={colors.primary} />
        </Button>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: Spacing.md }}>
        {/* Asset Header */}
        <Card style={{ marginBottom: Spacing.md }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: Spacing.sm }}>
            <Text variant="h2" style={{ flex: 1 }}>
              {asset.ticker}
            </Text>
            <AssetTag type={asset.type} />
          </View>
          <Text variant="body" color="muted" style={{ marginBottom: Spacing.md }}>
            {asset.name}
          </Text>

          {/* Position Value */}
          <View style={{ marginBottom: Spacing.sm }}>
            <Text variant="caption" color="muted" style={{ marginBottom: 4 }}>
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
        <Card style={{ marginBottom: Spacing.md }}>
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
        <View style={{ marginBottom: Spacing.lg }}>
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
