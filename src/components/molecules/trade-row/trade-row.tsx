import { useTheme } from '@/contexts/theme-context';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, View } from 'react-native';
import { Text } from '../../atoms/text';
import { styles } from './trade-row.styles';
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
            {new Date(date).toLocaleDateString()} • {quantity} @ ${price.toFixed(2)}
            {fee ? ` • Fee: $${fee.toFixed(2)}` : ''}
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
          ${totalValue.toFixed(2)}
        </Text>
        {onDelete ? (
          <Pressable onPress={onDelete} hitSlop={8}>
            <Ionicons name="trash-outline" size={18} color={colors.error} />
          </Pressable>
        ) : (
          <Ionicons name="chevron-forward" size={20} color={colors.foregroundMuted} />
        )}
      </View>
    </Pressable>
  );
};

export type { TradeRowAssetType, TradeRowProps, TradeRowType } from './trade-row.types';

