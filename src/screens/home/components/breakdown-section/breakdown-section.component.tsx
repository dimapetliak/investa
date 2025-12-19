import { Card, IconBadge, SectionHeader, Text } from '@/components';
import { formatCurrency } from '@/lib/utils';
import { Spacing } from '@/theme/spacing';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import type { BreakdownSectionProps } from './breakdown-section.types';

export const BreakdownSection = ({
  accountsValue,
  investmentsValue,
  savingsValue,
  currency = '$',
}: BreakdownSectionProps) => {
  const items = [
    {
      label: 'Cash & Accounts',
      amount: accountsValue,
      description: 'Bank + Card',
      icon: 'card-outline',
      variant: 'primary' as const,
    },
    {
      label: 'Investments',
      amount: investmentsValue,
      description: 'Stocks + Crypto',
      icon: 'trending-up',
      variant: 'purple' as const,
    },
    {
      label: 'Savings',
      amount: savingsValue,
      description: 'Goals + Reserve',
      icon: 'wallet-outline',
      variant: 'lime' as const,
    },
  ];

  return (
    <View style={styles.container}>
      <SectionHeader title="Breakdown" />
      
      <View style={styles.grid}>
        {items.map((item) => (
          <Card key={item.label} style={styles.card}>
            <View style={styles.cardContent}>
              <IconBadge icon={item.icon} variant={item.variant} size="sm" />
              <View style={styles.textContent}>
                <Text variant="h3" weight="semiBold">
                  {formatCurrency(item.amount, { symbol: currency, minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                </Text>
                <Text variant="caption" color="muted">
                  {item.label}
                </Text>
                <Text variant="small" color="tertiary">
                  {item.description}
                </Text>
              </View>
            </View>
          </Card>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: Spacing.lg,
  },
  grid: {
    gap: Spacing.sm,
  },
  card: {
    padding: Spacing.md,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContent: {
    marginLeft: Spacing.md,
    flex: 1,
  },
});

