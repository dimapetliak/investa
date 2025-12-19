import { useTheme } from '@/contexts/theme-context';
import { AssetColors } from '@/theme/colors';
import { Shadow } from '@/theme';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, View } from 'react-native';
import { Text } from '../../atoms/text';
import { styles } from './position-card.styles';
import type { PositionCardProps } from './position-card.types';

// Utility function for formatting currency
const formatCurrency = (value: number, currency = '$'): string => {
  return `${currency}${value.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
};

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
          borderColor: colors.border,
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
            {formatCurrency(currentValue, currency)}
          </Text>
          <View style={[styles.pnlBadge, { backgroundColor: `${pnlColor}15` }]}>
            <Ionicons
              name={isProfit ? 'caret-up' : 'caret-down'}
              size={12}
              color={pnlColor}
            />
            <Text
              variant="caption"
              weight="semiBold"
              style={{ color: pnlColor, marginLeft: 2 }}
            >
              {isProfit ? '+' : ''}{pnlPercent.toFixed(2)}%
            </Text>
          </View>
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
          <Text variant="body" weight="medium">{formatCurrency(avgPrice, currency)}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text variant="caption" color="muted">Current Price</Text>
          <Text variant="body" weight="medium">{formatCurrency(currentPrice, currency)}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text variant="caption" color="muted">P&L</Text>
          <Text variant="body" weight="semiBold" style={{ color: pnlColor }}>
            {isProfit ? '+' : ''}{formatCurrency(pnl, currency)}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export type { PositionCardAssetType, PositionCardProps } from './position-card.types';

