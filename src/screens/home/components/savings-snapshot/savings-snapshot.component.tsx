import { Button, Card, EmptyState, ProgressBar, SectionHeader, Text } from '@/components';
import { formatCurrency } from '@/lib/utils';
import { Spacing } from '@/theme/spacing';
import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import type { SavingsSnapshotProps } from './savings-snapshot.types';

export const SavingsSnapshot = ({
  goals,
  currency = '$',
  onAddGoal,
  onViewGoal,
  onViewAll,
}: SavingsSnapshotProps) => {
  // Show max 2 goals on home screen
  const displayGoals = goals.slice(0, 2);

  return (
    <View style={styles.container}>
      <SectionHeader 
        title="Savings Goals" 
        action={
          onViewAll && goals.length > 0 && (
            <Pressable onPress={onViewAll} hitSlop={8}>
              <Text variant="caption" color="primary">View All</Text>
            </Pressable>
          )
        }
      />
      
      {displayGoals.length > 0 ? (
        <View style={styles.goalsList}>
          {displayGoals.map((goal) => (
            <Card 
              key={goal.id} 
              style={styles.goalCard}
              onPress={() => onViewGoal?.(goal.id)}
            >
              <View style={styles.goalContent}>
                <View style={styles.goalHeader}>
                  <Text variant="body" weight="medium" numberOfLines={1} style={styles.goalName}>
                    {goal.name}
                  </Text>
                  <Text variant="body" weight="semiBold" color="primary">
                    {goal.progressPercent}%
                  </Text>
                </View>
                
                <ProgressBar 
                  current={goal.currentAmount} 
                  target={goal.targetAmount}
                  showLabels={false}
                />
                
                <Text variant="caption" color="muted">
                  {formatCurrency(goal.currentAmount, { symbol: currency, minimumFractionDigits: 0, maximumFractionDigits: 0 })} of {formatCurrency(goal.targetAmount, { symbol: currency, minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                </Text>
              </View>
            </Card>
          ))}
        </View>
      ) : (
        <EmptyState
          icon="flag-outline"
          title="No savings goals"
          message="Set a goal to start tracking your savings progress"
          actionLabel="Add Goal"
          onAction={onAddGoal}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: Spacing.lg,
  },
  goalsList: {
    gap: Spacing.sm,
  },
  goalCard: {
    padding: Spacing.md,
  },
  goalContent: {
    gap: Spacing.sm,
  },
  goalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  goalName: {
    flex: 1,
    marginRight: Spacing.sm,
  },
});

