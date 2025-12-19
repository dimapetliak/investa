import { Card, ChangeBadge, SectionHeader, Text } from '@/components';
import { useTheme } from '@/contexts/theme-context';
import { formatCurrency } from '@/lib/utils';
import { Spacing } from '@/theme/spacing';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import type { InvestmentSnapshotProps } from './investment-snapshot.types';

export const InvestmentSnapshot = ({
  totalValue,
  pnl,
  pnlPercent,
  positionsCount,
  lastUpdated,
  currency = '$',
  onPress,
}: InvestmentSnapshotProps) => {
  const { colors } = useTheme();

  const formatLastUpdated = (dateString: string | null) => {
    if (!dateString) return 'No data';
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    return `${diffDays}d ago`;
  };

  return (
    <View style={styles.container}>
      <SectionHeader 
        title="Investments" 
        action={
          onPress && (
            <Pressable onPress={onPress} hitSlop={8}>
              <Text variant="caption" color="primary">View All</Text>
            </Pressable>
          )
        }
      />
      
      <Card style={styles.card} onPress={onPress}>
        <View style={styles.content}>
          {/* Main Value */}
          <View style={styles.valueRow}>
            <View>
              <Text variant="h2" weight="bold">
                {formatCurrency(totalValue, { symbol: currency })}
              </Text>
              <Text variant="caption" color="muted">
                {positionsCount} {positionsCount === 1 ? 'position' : 'positions'}
              </Text>
            </View>
            
            {/* P&L Badge */}
            <ChangeBadge
              value={pnl}
              percentValue={pnlPercent}
              format="both"
              size="md"
            />
          </View>

          {/* Last Updated */}
          <View style={styles.footer}>
            <Ionicons name="time-outline" size={14} color={colors.foregroundTertiary} />
            <Text variant="small" color="tertiary" style={styles.footerText}>
              Updated {formatLastUpdated(lastUpdated)}
            </Text>
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: Spacing.lg,
  },
  card: {
    padding: Spacing.md,
  },
  content: {
    gap: Spacing.md,
  },
  valueRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: Spacing.sm,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: 'rgba(0,0,0,0.1)',
  },
  footerText: {
    marginLeft: Spacing.xs,
  },
});

