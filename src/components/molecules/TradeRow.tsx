import { useTheme } from '@/contexts/theme-context';
import { Spacing } from '@/theme';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { Text } from '../atoms/Text';

export interface TradeRowProps {
  ticker: string;
  assetType: 'stock' | 'crypto';
  type: 'buy' | 'sell';
  price: number;
  quantity: number;
  date: string;
  onPress?: () => void;
}

export const TradeRow: React.FC<TradeRowProps> = ({
  ticker,
  assetType,
  type,
  price,
  quantity,
  date,
  onPress,
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
            <Text variant="body" weight="semibold">
              {ticker}
            </Text>
            <View
              style={[
                styles.typeBadge,
                {
                  backgroundColor: `${typeColor}15`,
                },
              ]}
            >
              <Text
                variant="small"
                weight="semibold"
                style={{ color: typeColor }}
              >
                {type.toUpperCase()}
              </Text>
            </View>
          </View>
          <Text variant="caption" color="muted">
            {new Date(date).toLocaleDateString()} • {quantity} @ ${price.toFixed(2)}
          </Text>
        </View>
      </View>

      <View style={styles.rightSection}>
        <Text variant="body" weight="semibold">
          ${totalValue.toFixed(2)}
        </Text>
        <Ionicons
          name="chevron-forward"
          size={20}
          color={colors.foregroundMuted}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: Spacing.md,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Spacing.md,
  },
  info: {
    flex: 1,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
    marginBottom: 4,
  },
  typeBadge: {
    paddingHorizontal: Spacing.sm,
    paddingVertical: 2,
    borderRadius: 4,
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
  },
});
