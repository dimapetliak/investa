import { useTheme } from '@/contexts/theme-context';
import { formatCurrency } from '@/lib/utils';
import { Spacing } from '@/theme';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { Text } from '../../atoms/text';
import type { TradeRowProps } from './trade-row.types';

export const TradeRow: React.FC<TradeRowProps> = ({
  ticker,
  assetType,
  type,
  price,
  quantity,
  date,
  fee,
  comment,
  onPress,
  onDelete,
}) => {
  const { colors } = useTheme();
  const isBuy = type === 'buy';
  const typeColor = isBuy ? colors.success : colors.error;

  const iconName: keyof typeof Ionicons.glyphMap =
    assetType === 'crypto' ? 'logo-bitcoin' : 'trending-up';

  const totalValue = price * quantity;

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.container,
        {
          backgroundColor: pressed ? colors.backgroundMuted : 'transparent',
        },
      ]}
    >
      <View style={styles.leftSection}>
        <View style={[styles.iconContainer, { backgroundColor: colors.backgroundMuted }]}>
          <Ionicons name={iconName} size={20} color={colors.primary} />
        </View>
        <View style={styles.info}>
          <View style={styles.titleRow}>
            {ticker && (
              <Text variant="body" weight="semiBold">
                {ticker}
              </Text>
            )}
            <View style={[styles.typeBadge, { backgroundColor: `${typeColor}15` }]}>
              <Text variant="small" weight="semiBold" style={{ color: typeColor }}>
                {type.toUpperCase()}
              </Text>
            </View>
          </View>
          <Text variant="caption" color="muted">
            {new Date(date).toLocaleDateString()} • {quantity} @ {formatCurrency(price, { symbol: '$' })}
            {fee ? ` • Fee: ${formatCurrency(fee, { symbol: '$' })}` : ''}
          </Text>
          {comment && (
            <Text variant="small" color="muted" numberOfLines={1}>
              {comment}
            </Text>
          )}
        </View>
      </View>

      <View style={styles.rightSection}>
        <Text variant="body" weight="semiBold">
          {formatCurrency(totalValue, { symbol: '$' })}
        </Text>
        {onDelete ? (
          <Pressable 
            onPress={onDelete} 
            hitSlop={12}
            accessibilityLabel="Delete trade"
            accessibilityRole="button"
            style={styles.deleteButton}
          >
            <Ionicons name="trash-outline" size={18} color={colors.error} />
          </Pressable>
        ) : (
          <Ionicons name="chevron-forward" size={20} color={colors.foregroundMuted} />
        )}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: Spacing.sm,
    paddingHorizontal: Spacing.md,
  },
  leftSection: {
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
  info: {
    flex: 1,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.xs,
    marginBottom: 2,
  },
  typeBadge: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  rightSection: {
    alignItems: 'flex-end',
    gap: Spacing.xs,
  },
  deleteButton: {
    padding: Spacing.xs,
    marginRight: -Spacing.xs,
  },
});

export type { TradeRowAssetType, TradeRowProps, TradeRowType } from './trade-row.types';
