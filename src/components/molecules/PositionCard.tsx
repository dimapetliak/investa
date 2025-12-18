import { useTheme } from '@/contexts/theme-context';
import { Radius, Spacing } from '@/theme';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { Text } from '../atoms/Text';

export interface PositionCardProps {
  ticker: string;
  assetType: 'stock' | 'crypto';
  quantity: number;
  avgPrice: number;
  currentPrice: number;
  currentValue: number;
  pnl: number;
  pnlPercent: number;
  onPress?: () => void;
}

export const PositionCard: React.FC<PositionCardProps> = ({
  ticker,
  assetType,
  quantity,
  avgPrice,
  currentPrice,
  currentValue,
  pnl,
  pnlPercent,
  onPress,
}) => {
  const { colors } = useTheme();
  const isProfit = pnl >= 0;
  const pnlColor = isProfit ? colors.success : colors.error;

  const iconName: keyof typeof Ionicons.glyphMap =
    assetType === 'crypto' ? 'logo-bitcoin' : 'trending-up';

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.card,
        {
          backgroundColor: colors.background,
          borderColor: colors.border,
          opacity: pressed ? 0.7 : 1,
        },
      ]}
    >
      <View style={styles.header}>
        <View style={styles.titleRow}>
          <View style={[styles.iconContainer, { backgroundColor: colors.backgroundMuted }]}>
            <Ionicons name={iconName} size={24} color={colors.primary} />
          </View>
          <View style={styles.titleInfo}>
            <Text variant="h3" weight="bold">
              {ticker}
            </Text>
            <Text variant="caption" color="muted">
              {assetType.charAt(0).toUpperCase() + assetType.slice(1)}
            </Text>
          </View>
        </View>
        <View style={styles.valueContainer}>
          <Text variant="h3" weight="semibold">
            ${currentValue.toFixed(2)}
          </Text>
          <View style={[styles.pnlBadge, { backgroundColor: `${pnlColor}15` }]}>
            <Text
              variant="caption"
              weight="semibold"
              style={{ color: pnlColor }}
            >
              {isProfit ? '+' : ''}
              {pnlPercent.toFixed(2)}%
            </Text>
          </View>
        </View>
      </View>

      <View style={[styles.divider, { backgroundColor: colors.border }]} />

      <View style={styles.details}>
        <View style={styles.detailRow}>
          <Text variant="caption" color="muted">
            Quantity
          </Text>
          <Text variant="body" weight="medium">
            {quantity.toFixed(4)}
          </Text>
        </View>
        <View style={styles.detailRow}>
          <Text variant="caption" color="muted">
            Avg Price
          </Text>
          <Text variant="body" weight="medium">
            ${avgPrice.toFixed(2)}
          </Text>
        </View>
        <View style={styles.detailRow}>
          <Text variant="caption" color="muted">
            Current Price
          </Text>
          <Text variant="body" weight="medium">
            ${currentPrice.toFixed(2)}
          </Text>
        </View>
        <View style={styles.detailRow}>
          <Text variant="caption" color="muted">
            P&L
          </Text>
          <Text variant="body" weight="semibold" style={{ color: pnlColor }}>
            {isProfit ? '+' : ''}${pnl.toFixed(2)}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: Radius.lg,
    borderWidth: 1,
    padding: Spacing.lg,
    marginBottom: Spacing.md,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: Spacing.md,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Spacing.md,
  },
  titleInfo: {
    flex: 1,
  },
  valueContainer: {
    alignItems: 'flex-end',
  },
  pnlBadge: {
    paddingHorizontal: Spacing.sm,
    paddingVertical: 4,
    borderRadius: Radius.sm,
    marginTop: 4,
  },
  divider: {
    height: 1,
    marginVertical: Spacing.md,
  },
  details: {
    gap: Spacing.sm,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
