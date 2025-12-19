import { Card, SectionHeader, Text } from '@/components';
import { useTheme } from '@/contexts/theme-context';
import { formatCurrency } from '@/lib/utils';
import { Spacing } from '@/theme/spacing';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import type { RecentActivityProps } from './recent-activity.types';

export const RecentActivity = ({
  items,
  currency = '$',
  onViewItem,
}: RecentActivityProps) => {
  const { colors } = useTheme();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  if (items.length === 0) {
    return null; // Don't show section if no activity
  }

  return (
    <View style={styles.container}>
      <SectionHeader title="Recent Activity" />
      
      <Card style={styles.card}>
        {items.map((item, index) => (
          <Pressable
            key={item.id}
            onPress={() => onViewItem?.(item.id)}
            style={({ pressed }) => [
              styles.activityItem,
              index < items.length - 1 && [styles.itemBorder, { borderBottomColor: colors.border }],
              pressed && { backgroundColor: colors.backgroundMuted },
            ]}
          >
            <View style={[styles.iconContainer, { backgroundColor: colors.backgroundMuted }]}>
              <Ionicons
                name={item.type === 'trade' ? 'swap-horizontal' : 'receipt-outline'}
                size={18}
                color={colors.foregroundMuted}
              />
            </View>
            
            <View style={styles.activityContent}>
              <Text variant="body" weight="medium" numberOfLines={1}>
                {item.label}
              </Text>
              <Text variant="caption" color="muted">
                {formatDate(item.date)}
              </Text>
            </View>
            
            <Text 
              variant="body" 
              weight="semiBold"
              style={{ color: item.isPositive ? colors.success : colors.foreground }}
            >
              {item.isPositive ? '+' : '-'}{formatCurrency(item.amount, { symbol: currency })}
            </Text>
          </Pressable>
        ))}
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: Spacing.lg,
  },
  card: {
    padding: 0,
    overflow: 'hidden',
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: Spacing.md,
  },
  itemBorder: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  iconContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activityContent: {
    flex: 1,
    marginLeft: Spacing.sm,
    marginRight: Spacing.sm,
  },
});

