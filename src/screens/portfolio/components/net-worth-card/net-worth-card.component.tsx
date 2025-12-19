import { GradientCard, IconBadge, Text } from '@/components';
import { formatCurrency, formatPercent } from '@/lib/utils';
import { Spacing } from '@/theme/spacing';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import type { NetWorthCardProps } from './net-worth-card.types';

// Gradient color pairs for the cards (darker tones)
const MAIN_CARD_GRADIENT = ['#6366f1', '#a78bfa'] as const;
const INVESTMENTS_CARD_GRADIENT = ['#a855f7', '#c4b5fd'] as const;
const SAVINGS_CARD_GRADIENT = ['#84cc16', '#bef264'] as const;

export const NetWorthCard = ({
  totalNetWorth,
  investmentsValue,
  savingsValue,
  investmentsPnL = 0,
  investmentsPnLPercent = 0,
  currency = '$',
  onPress,
}: NetWorthCardProps) => {
  const [hideBalance, setHideBalance] = useState(false);
  const isProfit = investmentsPnL >= 0;

  // Calculate savings "change" (dummy for now)
  const savingsChangePercent = 12;

  const formattedTotal = formatCurrency(totalNetWorth, { symbol: currency });
  const formattedInvestments = formatCurrency(investmentsValue, { symbol: currency });
  const formattedSavings = formatCurrency(savingsValue, { symbol: currency });

  return (
    <View style={styles.container}>
      {/* Main Total Card */}
      <Pressable onPress={onPress}>
        {({ pressed }) => (
          <GradientCard
            colors={MAIN_CARD_GRADIENT}
            padding="lg"
            style={[styles.mainCard, pressed && styles.pressed]}
          >
            <View style={styles.mainCardContent}>
              <View style={styles.flex1}>
                <Text variant="h1" weight="bold" color="white" style={styles.totalAmount}>
                  {hideBalance ? '••••••' : formattedTotal}
                </Text>
                <View style={styles.labelRow}>
                  <Text variant="body" style={styles.mainLabel}>
                    Total Net Worth
                  </Text>
                  <Pressable
                    onPress={() => setHideBalance(!hideBalance)}
                    hitSlop={8}
                    style={styles.eyeButton}
                  >
                    <Ionicons
                      name={hideBalance ? 'eye-off-outline' : 'eye-outline'}
                      size={18}
                      color="#3730a3"
                    />
                  </Pressable>
                </View>
              </View>
            </View>
          </GradientCard>
        )}
      </Pressable>

      {/* Two Cards Row */}
      <View style={styles.cardsRow}>
        {/* Investments Card */}
        <Pressable style={styles.flex1}>
          {({ pressed }) => (
            <GradientCard
              colors={INVESTMENTS_CARD_GRADIENT}
              padding="md"
              style={[styles.subCard, pressed && styles.pressed]}
            >
              <IconBadge icon="trending-up" variant="purple" style={styles.iconBadge} />
              
              <Text variant="h2" weight="bold" style={styles.subCardAmount}>
                {hideBalance ? '••••' : formattedInvestments}
              </Text>

              <View style={styles.changeRow}>
                <View style={styles.investmentsChangeBadge}>
                  <Ionicons
                    name={isProfit ? 'arrow-up' : 'arrow-down'}
                    size={10}
                    color={isProfit ? '#16a34a' : '#dc2626'}
                  />
                  <Text
                    variant="small"
                    weight="medium"
                    style={{ color: isProfit ? '#16a34a' : '#dc2626', marginLeft: 2 }}
                  >
                    {formatPercent(investmentsPnLPercent, { decimals: 0 })}
                  </Text>
                </View>
                <Text variant="caption" style={styles.investmentsLabel}>
                  Investments
                </Text>
              </View>
            </GradientCard>
          )}
        </Pressable>

        {/* Savings Card */}
        <Pressable style={styles.flex1}>
          {({ pressed }) => (
            <GradientCard
              colors={SAVINGS_CARD_GRADIENT}
              padding="md"
              style={[styles.subCard, pressed && styles.pressed]}
            >
              <IconBadge icon="wallet-outline" variant="lime" style={styles.iconBadge} />

              <Text variant="h2" weight="bold" style={styles.subCardAmount}>
                {hideBalance ? '••••' : formattedSavings}
              </Text>

              <View style={styles.changeRow}>
                <View style={styles.savingsChangeBadge}>
                  <Ionicons name="arrow-up" size={10} color="#16a34a" />
                  <Text
                    variant="small"
                    weight="medium"
                    style={{ color: '#16a34a', marginLeft: 2 }}
                  >
                    {formatPercent(savingsChangePercent)}
                  </Text>
                </View>
                <Text variant="caption" style={styles.savingsLabel}>
                  Savings
                </Text>
              </View>
            </GradientCard>
          )}
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Spacing.md,
  },
  flex1: {
    flex: 1,
  },
  mainCard: {
    paddingVertical: Spacing.xl,
    marginBottom: Spacing.md,
  },
  pressed: {
    opacity: 0.95,
  },
  mainCardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  totalAmount: {
    fontSize: 36,
    lineHeight: 42,
  },
  labelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Spacing.sm,
  },
  mainLabel: {
    color: '#3730a3',
  },
  eyeButton: {
    marginLeft: Spacing.xs,
  },
  cardsRow: {
    flexDirection: 'row',
    gap: Spacing.md,
  },
  subCard: {
    paddingTop: Spacing.lg,
    minHeight: 130,
  },
  iconBadge: {
    marginBottom: Spacing.sm,
  },
  subCardAmount: {
    color: '#1e1b4b',
    fontSize: 22,
    marginBottom: 4,
  },
  changeRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  investmentsChangeBadge: {
    backgroundColor: 'rgba(147, 51, 234, 0.15)',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: Spacing.xs,
  },
  savingsChangeBadge: {
    backgroundColor: 'rgba(101, 163, 13, 0.15)',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: Spacing.xs,
  },
  investmentsLabel: {
    color: '#6b21a8',
  },
  savingsLabel: {
    color: '#3f6212',
  },
});
