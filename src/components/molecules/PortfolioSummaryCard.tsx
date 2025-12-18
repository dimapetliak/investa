import { useTheme } from '@/contexts/theme-context';
import { Radius, Spacing } from '@/theme';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { Text } from '../atoms/Text';

export interface PortfolioSummaryCardProps {
  totalValue: number;
  totalPnL: number;
  totalPnLPercent: number;
  totalCost: number;
  onPress?: () => void;
}

export const PortfolioSummaryCard: React.FC<PortfolioSummaryCardProps> = ({
  totalValue,
  totalPnL,
  totalPnLPercent,
  totalCost,
  onPress,
}) => {
  const { colors } = useTheme();
  const isProfit = totalPnL >= 0;
  const pnlColor = isProfit ? colors.success : colors.error;

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.card,
        {
          backgroundColor: colors.background,
          opacity: pressed ? 0.9 : 1,
        },
      ]}
    >
      <View style={styles.header}>
        <Text variant="caption" color="muted">
          Total Portfolio Value
        </Text>
        <Ionicons
          name="chevron-forward"
          size={20}
          color={colors.foregroundMuted}
        />
      </View>

      <Text variant="h1" weight="bold" style={styles.totalValue}>
        ${totalValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
      </Text>

      <View style={[styles.pnlContainer, { backgroundColor: `${pnlColor}15` }]}>
        <Ionicons
          name={isProfit ? 'trending-up' : 'trending-down'}
          size={16}
          color={pnlColor}
        />
        <Text
          variant="body"
          weight="semibold"
          style={[styles.pnlText, { color: pnlColor }]}
        >
          {isProfit ? '+' : ''}${totalPnL.toFixed(2)} ({isProfit ? '+' : ''}
          {totalPnLPercent.toFixed(2)}%)
        </Text>
      </View>

      <View style={[styles.divider, { backgroundColor: colors.border }]} />

      <View style={styles.footer}>
        <View style={styles.footerItem}>
          <Text variant="caption" color="muted">
            Total Cost
          </Text>
          <Text variant="body" weight="semibold">
            ${totalCost.toFixed(2)}
          </Text>
        </View>
        <View style={styles.footerItem}>
          <Text variant="caption" color="muted">
            Return
          </Text>
          <Text variant="body" weight="semibold" style={{ color: pnlColor }}>
            {isProfit ? '+' : ''}{totalPnLPercent.toFixed(2)}%
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: Radius.lg,
    padding: Spacing.xl,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.sm,
  },
  totalValue: {
    marginBottom: Spacing.md,
  },
  pnlContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    borderRadius: Radius.md,
    gap: Spacing.xs,
  },
  pnlText: {
    fontSize: 14,
  },
  divider: {
    height: 1,
    marginVertical: Spacing.lg,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerItem: {
    flex: 1,
  },
});
