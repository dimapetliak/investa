import { useTheme } from '@/contexts/theme-context';
import { Shadow } from '@/theme';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, View } from 'react-native';
import { Text } from '../../atoms/text';
import { styles } from './portfolio-summary-card.styles';
import type { PortfolioSummaryCardProps } from './portfolio-summary-card.types';

// Utility function for formatting currency
const formatCurrency = (value: number, currency = '$'): string => {
  return `${currency}${value.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
};

export const PortfolioSummaryCard: React.FC<PortfolioSummaryCardProps> = ({
  totalValue,
  totalPnL,
  totalPnLPercent,
  totalCost,
  currency = '$',
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
          backgroundColor: colors.backgroundSecondary,
          opacity: pressed ? 0.9 : 1,
        },
        Shadow.lg,
      ]}
    >
      <View style={styles.header}>
        <Text variant="caption">
          Total Portfolio Value
        </Text>
        {onPress && (
          <Ionicons name="chevron-forward" size={20} color={colors.foregroundMuted} />
        )}
      </View>

      <Text variant="h1" weight="bold" style={styles.totalValue}>
        {formatCurrency(totalValue, currency)}
      </Text>

      <View style={[styles.pnlContainer, { backgroundColor: `${pnlColor}15` }]}>
        <Ionicons
          name={isProfit ? 'trending-up' : 'trending-down'}
          size={16}
          color={pnlColor}
        />
        <Text variant="body" weight="semiBold" style={[styles.pnlText, { color: pnlColor }]}>
          {isProfit ? '+' : ''}{formatCurrency(totalPnL, currency)} ({isProfit ? '+' : ''}
          {totalPnLPercent.toFixed(2)}%)
        </Text>
      </View>

      <View style={[styles.divider, { backgroundColor: colors.border }]} />

      <View style={styles.footer}>
        <View style={styles.footerItem}>
          <Text variant="caption" color="muted">
            Total Cost
          </Text>
          <Text variant="body" weight="semiBold">
            {formatCurrency(totalCost, currency)}
          </Text>
        </View>
        <View style={styles.footerItem}>
          <Text variant="caption" color="muted">
            Return
          </Text>
          <Text variant="body" weight="semiBold" style={{ color: pnlColor }}>
            {isProfit ? '+' : ''}{totalPnLPercent.toFixed(2)}%
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export type { PortfolioSummaryCardProps } from './portfolio-summary-card.types';

