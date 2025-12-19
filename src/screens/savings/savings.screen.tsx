import {
    Button,
    Card,
    EmptyState,
    ExpandableList,
    GradientCard,
    IconBadge,
    ProgressBar,
    ScreenLayout,
    Text,
} from '@/components';
import { useTheme } from '@/contexts/theme-context';
import { formatCurrency, formatPercent } from '@/lib/utils';
import { Spacing } from '@/theme/spacing';
import { Ionicons } from '@expo/vector-icons';
import React, { useMemo } from 'react';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import type { SavingsScreenProps } from './savings.types';

export const SavingsScreen = ({
  goals = [],
  accounts = [],
  onAddGoal,
  onViewGoal,
  onAddAccount,
  onViewAccount,
  onManage,
}: SavingsScreenProps) => {
  const { colors, gradients } = useTheme();
  
  // Calculate summary data
  const { totalSavings, goalsProgressPercent } = useMemo(() => {
    const savings = accounts.reduce((sum, acc) => sum + acc.balance, 0);
    const goalTarget = goals.reduce((sum, goal) => sum + goal.targetAmount, 0);
    const goalProgress = goals.reduce((sum, goal) => sum + goal.currentAmount, 0);
    const progressPercent = goalTarget > 0 ? (goalProgress / goalTarget) * 100 : 0;
    
    return {
      totalSavings: savings,
      goalsProgressPercent: progressPercent,
    };
  }, [accounts, goals]);

  return (
    <ScreenLayout containerProps={{ noPadding: true }}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text variant="caption" color="muted">
            Your Progress
          </Text>
          <Text variant="h2" weight="bold">
            Savings & Goals
          </Text>
        </View>

        <Pressable
          onPress={onManage}
          accessibilityLabel="Manage savings"
          accessibilityHint="Opens savings management options"
          style={({ pressed }) => [
            styles.actionButton,
            { backgroundColor: colors.backgroundSecondary },
            pressed && styles.pressed,
          ]}
        >
          <Ionicons
            name="settings-outline"
            size={24}
            color={colors.foreground}
          />
        </Pressable>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Total Savings Summary */}
        <GradientCard
            colors={gradients.savings}
            padding="lg"
            style={styles.summaryCard}
          >
            <View style={styles.summaryGradientContent}>
              <View style={styles.summaryMain}>
                <Text variant="body" style={{ color: colors.white, opacity: 0.8 }}>
                  Total Savings
                </Text>
                <Text variant="h1" weight="bold" color="white" style={styles.summaryAmount}>
                  {formatCurrency(totalSavings, { symbol: '$', minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                </Text>

                {/* Goals progress indicator */}
                {goals.length > 0 && (
                  <View style={styles.progressRow}>
                    <View style={[styles.progressBadge, { backgroundColor: `${colors.white}20` }]}>
                      <Ionicons
                        name="flag"
                        size={14}
                        color={colors.white}
                      />
                      <Text
                        variant="small"
                        weight="semiBold"
                        style={{ color: colors.white, marginLeft: 4 }}
                      >
                        {formatPercent(goalsProgressPercent, { decimals: 0 })} of goals
                      </Text>
                    </View>
                  </View>
                )}
              </View>

              {/* Stats */}
              <View style={styles.statsColumn}>
                <View style={styles.statItem}>
                  <Text variant="h3" weight="bold" color="white">
                    {goals.length}
                  </Text>
                  <Text variant="small" style={{ color: colors.white, opacity: 0.7 }}>
                    Goals
                  </Text>
                </View>
                <View style={[styles.statItem, { marginTop: Spacing.sm }]}>
                  <Text variant="h3" weight="bold" color="white">
                    {accounts.length}
                  </Text>
                  <Text variant="small" style={{ color: colors.white, opacity: 0.7 }}>
                    Accounts
                  </Text>
                </View>
              </View>
            </View>
          </GradientCard>

        {/* Goals Section */}
        <ExpandableList
          title="Savings Goals"
          icon="flag-outline"
          count={goals.length}
          headerAction={
            onAddGoal && (
              <Button variant="ghost" size="sm" onPress={onAddGoal}>
                Add Goal
              </Button>
            )
          }
          emptyState={
            <EmptyState
              icon="flag-outline"
              title="No goals yet"
              message="Create your first savings goal to start tracking your progress"
              actionLabel="Add Goal"
              onAction={onAddGoal}
            />
          }
        >
          {goals.map((goal) => {
            const progress = (goal.currentAmount / goal.targetAmount) * 100;
            return (
              <Card
                key={goal.id}
                style={styles.goalCard}
                onPress={() => onViewGoal?.(goal.id)}
              >
                <View style={styles.cardContent}>
                  <View style={styles.goalHeader}>
                    <IconBadge
                      icon={goal.icon || 'flag-outline'}
                      variant="primary"
                      style={styles.goalIcon}
                    />
                    <View style={styles.goalInfo}>
                      <Text variant="body" weight="medium">
                        {goal.name}
                      </Text>
                      {goal.deadline && (
                        <Text variant="caption" color="muted">
                          Target: {new Date(goal.deadline).toLocaleDateString()}
                        </Text>
                      )}
                    </View>
                    <Text variant="body" weight="semiBold" color="primary">
                      {Math.round(progress)}%
                    </Text>
                  </View>

                  <ProgressBar showLabels={false} current={goal.currentAmount} target={goal.targetAmount} />

                  <View style={styles.goalFooter}>
                    <Text variant="caption" color="muted">
                      {formatCurrency(goal.currentAmount, { minimumFractionDigits: 0, maximumFractionDigits: 0 })} saved
                    </Text>
                    <Text variant="caption" color="muted">
                      of {formatCurrency(goal.targetAmount, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                    </Text>
                  </View>
                </View>
              </Card>
            );
          })}
        </ExpandableList>

        {/* Accounts Section */}
        <ExpandableList
          title="Savings Accounts"
          icon="wallet-outline"
          count={accounts.length}
          style={styles.accountsSection}
          headerAction={
            onAddAccount && (
              <Button variant="ghost" size="sm" onPress={onAddAccount}>
                Add Account
              </Button>
            )
          }
          emptyState={
            <EmptyState
              icon="wallet-outline"
              title="No accounts yet"
              message="Add your savings accounts to track your progress"
              actionLabel="Add Account"
              onAction={onAddAccount}
            />
          }
        >
          {accounts.map((account) => (
            <Card
              key={account.id}
              style={styles.accountCard}
              onPress={() => onViewAccount?.(account.id)}
            >
              <View style={styles.cardContent}>
                <View style={styles.accountRow}>
                  <View style={styles.accountInfo}>
                    <IconBadge
                      icon="wallet-outline"
                      variant="success"
                      style={styles.accountIcon}
                    />
                    <View>
                      <Text variant="body" weight="medium">
                        {account.name}
                      </Text>
                      {account.interestRate && (
                        <Text variant="caption" color="muted">
                          {account.interestRate}% APY
                        </Text>
                      )}
                    </View>
                  </View>
                  <Text variant="h3" weight="semiBold">
                    {formatCurrency(account.balance, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                  </Text>
                </View>
              </View>
            </Card>
          ))}
        </ExpandableList>
      </ScrollView>
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.md,
  },
  actionButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressed: {
    opacity: 0.7,
  },
  scrollContent: {
    padding: Spacing.md,
    paddingTop: 0,
  },
  summaryCard: {
    marginBottom: Spacing.lg,
    paddingVertical: Spacing.lg,
  },
  summaryGradientContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  summaryMain: {
    flex: 1,
  },
  summaryAmount: {
    fontSize: 32,
    lineHeight: 38,
    marginTop: Spacing.xs,
  },
  progressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Spacing.sm,
  },
  progressBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statsColumn: {
    alignItems: 'center',
    paddingLeft: Spacing.md,
  },
  statItem: {
    alignItems: 'center',
  },
  goalCard: {
    marginBottom: Spacing.sm,
  },
  cardContent: {
    padding: Spacing.md,
  },
  goalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.sm,
  },
  goalIcon: {
    marginRight: Spacing.md,
  },
  goalInfo: {
    flex: 1,
  },
  goalFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Spacing.sm,
  },
  accountsSection: {
    marginTop: Spacing.lg,
  },
  accountCard: {
    marginBottom: Spacing.sm,
  },
  accountRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  accountInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  accountIcon: {
    marginRight: Spacing.md,
  },
});
