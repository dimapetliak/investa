import { useTheme } from '@/contexts/theme-context';
import { formatCurrency } from '@/lib/utils';
import { AssetColors } from '@/theme/colors';
import { Shadow, Spacing } from '@/theme';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { ChangeBadge } from '../../atoms/change-badge';
import { Text } from '../../atoms/text';
import type { PositionCardProps } from './position-card.types';

// Format quantity with appropriate decimals
const formatQuantity = (qty: number): string => {
  if (qty >= 1) {
    return qty.toLocaleString('en-US', {
      minimumFractionDigits: qty % 1 === 0 ? 0 : 2,
      maximumFractionDigits: 4,
    });
  }
  return qty.toFixed(6);
};

export const PositionCard: React.FC<PositionCardProps> = ({
  ticker,
  name,
  assetType,
  quantity,
  avgPrice,
  currentPrice,
  currentValue,
  pnl,
  pnlPercent,
  currency = '$',
  onPress,
}) => {
  const { colors } = useTheme();
  const isProfit = pnl >= 0;
  const pnlColor = isProfit ? colors.success : colors.error;
  const assetColor = assetType === 'crypto' ? AssetColors.crypto : AssetColors.stock;

  const iconName: keyof typeof Ionicons.glyphMap =
    assetType === 'crypto' ? 'logo-bitcoin' : 'trending-up';

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.card,
        {
          backgroundColor: colors.backgroundSecondary,
          opacity: pressed ? 0.8 : 1,
        },
        Shadow.sm,
      ]}
    >
      {/* Header with ticker and P&L */}
      <View style={styles.header}>
        <View style={styles.titleRow}>
          <View style={[styles.iconContainer, { backgroundColor: `${assetColor}20` }]}>
            <Ionicons name={iconName} size={20} color={assetColor} />
          </View>
          <View style={styles.titleInfo}>
            <Text variant="h3" weight="bold">
              {ticker}
            </Text>
            {name && (
              <Text variant="caption" color="muted" numberOfLines={1}>
                {name}
              </Text>
            )}
          </View>
        </View>
        <View style={styles.valueContainer}>
          <Text variant="h3" weight="semiBold">
            {formatCurrency(currentValue, { symbol: currency })}
          </Text>
          <ChangeBadge
            value={pnl}
            percentValue={pnlPercent}
            format="percent"
            size="sm"
          />
        </View>
      </View>

      <View style={[styles.divider, { backgroundColor: colors.border }]} />

      {/* Footer with details grid */}
      <View style={styles.details}>
        <View style={styles.detailRow}>
          <Text variant="caption" color="muted">Quantity</Text>
          <Text variant="body" weight="medium">{formatQuantity(quantity)}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text variant="caption" color="muted">Avg Price</Text>
          <Text variant="body" weight="medium">{formatCurrency(avgPrice, { symbol: currency })}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text variant="caption" color="muted">Current Price</Text>
          <Text variant="body" weight="medium">{formatCurrency(currentPrice, { symbol: currency })}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text variant="caption" color="muted">P&L</Text>
          <Text variant="body" weight="semiBold" style={{ color: pnlColor }}>
            {isProfit ? '+' : ''}{formatCurrency(pnl, { symbol: currency })}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    marginBottom: Spacing.md,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: Spacing.md,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Spacing.sm,
  },
  titleInfo: {
    flex: 1,
  },
  valueContainer: {
    alignItems: 'flex-end',
  },
  divider: {
    height: 1,
    marginHorizontal: Spacing.md,
  },
  details: {
    padding: Spacing.md,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  detailRow: {
    width: '50%',
    marginBottom: Spacing.sm,
  },
});

export type { PositionCardAssetType, PositionCardProps } from './position-card.types';
