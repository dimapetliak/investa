import {
  Button,
  Card,
  EmptyState,
  FloatingActionButton,
  IconBadge,
  ProgressBar,
  ScreenLayout,
  SectionHeader,
  Text,
} from '@/components';
import { formatCurrency } from '@/lib/utils';
import { Spacing } from '@/theme/spacing';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import type { SavingsScreenProps } from './savings.types';

// Dummy data for preview
const DUMMY_GOALS = [
  {
    id: '1',
    name: 'Emergency Fund',
    targetAmount: 10000,
    currentAmount: 6500,
    icon: 'shield-checkmark-outline',
  },
  {
    id: '2',
    name: 'Vacation',
    targetAmount: 5000,
    currentAmount: 2100,
    deadline: '2025-06-01',
    icon: 'airplane-outline',
  },
  {
    id: '3',
    name: 'New Car',
    targetAmount: 25000,
    currentAmount: 8750,
    deadline: '2026-01-01',
    icon: 'car-outline',
  },
];

const DUMMY_ACCOUNTS = [
  {
    id: '1',
    name: 'High-Yield Savings',
    balance: 15000,
    currency: 'USD',
    interestRate: 4.5,
  },
  {
    id: '2',
    name: 'Emergency Fund',
    balance: 6500,
    currency: 'USD',
    interestRate: 3.8,
  },
];

export const SavingsScreen = ({
  goals = DUMMY_GOALS,
  accounts = DUMMY_ACCOUNTS,
  onAddGoal,
  onViewGoal,
  onAddAccount,
  onViewAccount,
}: SavingsScreenProps) => {
  const totalSavings = accounts.reduce((sum, acc) => sum + acc.balance, 0);

  return (
    <ScreenLayout containerProps={{ noPadding: true }}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Total Savings Summary */}
        <Card style={styles.summaryCard}>
          <View style={styles.summaryContent}>
            <Text variant="caption" color="muted">
              Total Savings
            </Text>
            <Text variant="h1" style={styles.totalAmount}>
              {formatCurrency(totalSavings, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
            </Text>
            <View style={styles.accountsInfo}>
              <Ionicons name="wallet-outline" size={16} color="#22c55e" />
              <Text variant="caption" style={styles.accountsText}>
                {accounts.length} savings accounts
              </Text>
            </View>
          </View>
        </Card>

        {/* Goals Section */}
        <SectionHeader
          title="Savings Goals"
          action={
            onAddGoal && (
              <Button variant="ghost" size="sm" onPress={onAddGoal}>
                Add Goal
              </Button>
            )
          }
        />

        {goals.length > 0 ? (
          goals.map((goal) => {
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
                    <Text variant="body" weight="semiBold">
                      {Math.round(progress)}%
                    </Text>
                  </View>

                  <ProgressBar current={goal.currentAmount} target={goal.targetAmount} />

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
          })
        ) : (
          <EmptyState
            icon="flag-outline"
            title="No goals yet"
            message="Create your first savings goal to start tracking your progress"
            actionLabel="Add Goal"
            onAction={onAddGoal}
          />
        )}

        {/* Accounts Section */}
        <View style={styles.accountsSection}>
          <SectionHeader
            title="Savings Accounts"
            action={
              onAddAccount && (
                <Button variant="ghost" size="sm" onPress={onAddAccount}>
                  Add Account
                </Button>
              )
            }
          />

          {accounts.length > 0 ? (
            accounts.map((account) => (
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
            ))
          ) : (
            <EmptyState
              icon="wallet-outline"
              title="No accounts yet"
              message="Add your savings accounts to track your progress"
              actionLabel="Add Account"
              onAction={onAddAccount}
            />
          )}
        </View>

        {/* Placeholder notice */}
        <View style={styles.notice}>
          <Text variant="caption" color="muted" style={styles.noticeText}>
            💡 This is a preview with sample data.{'\n'}
            Full savings functionality coming soon!
          </Text>
        </View>
      </ScrollView>

      <FloatingActionButton
        onPress={onAddGoal || (() => {})}
        icon="add"
      />
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  scrollContent: {
    padding: Spacing.md,
  },
  summaryCard: {
    marginBottom: Spacing.lg,
  },
  summaryContent: {
    padding: Spacing.lg,
    alignItems: 'center',
  },
  totalAmount: {
    marginTop: Spacing.xs,
  },
  accountsInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Spacing.sm,
  },
  accountsText: {
    marginLeft: Spacing.xs,
    color: '#22c55e',
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
  notice: {
    marginTop: Spacing.xl,
    padding: Spacing.md,
    backgroundColor: 'rgba(99, 102, 241, 0.05)',
    borderRadius: 12,
  },
  noticeText: {
    textAlign: 'center',
  },
});
