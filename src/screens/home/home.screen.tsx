import { GradientCard, ScreenLayout, Text } from '@/components';
import { useTheme } from '@/contexts/theme-context';
import { formatCurrency, formatPercent } from '@/lib/utils';
import { Spacing } from '@/theme/spacing';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import {
    BreakdownSection,
    InvestmentSnapshot,
    RecentActivity,
    SavingsSnapshot,
} from './components';
import type { HomeScreenProps } from './home.types';

export const HomeScreen = ({
  userName = 'Investor',
  notificationCount = 0,
  data,
  onNotificationPress,
  onViewInvestments,
  onViewSavings,
  onViewSavingsGoal,
  onViewActivity,
  onAddSavingsGoal,
}: HomeScreenProps) => {
  const { colors, gradients } = useTheme();
  const [hideBalance, setHideBalance] = useState(false);

  const { netWorth, investments, savingsGoals, recentActivity } = data;
  const isPositiveChange = netWorth.change >= 0;

  return (
    <ScreenLayout containerProps={{ noPadding: true }}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text variant="caption" color="muted">
            Welcome back,
          </Text>
          <Text variant="h2" weight="bold">
            Hello {userName} 👋
          </Text>
        </View>

        <Pressable
          onPress={onNotificationPress}
          accessibilityLabel="Notifications"
          style={({ pressed }) => [
            styles.notificationButton,
            { backgroundColor: colors.backgroundSecondary },
            pressed && styles.pressed,
          ]}
        >
          <Ionicons
            name="notifications-outline"
            size={24}
            color={colors.foreground}
          />
          {notificationCount > 0 && (
            <View style={[styles.badge, { backgroundColor: colors.error }]}>
              <Text variant="small" weight="bold" color="white">
                {notificationCount > 9 ? '9+' : notificationCount}
              </Text>
            </View>
          )}
        </Pressable>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* NET WORTH - Primary Anchor */}
        <View style={styles.netWorthSection}>
          <GradientCard
            colors={gradients.netWorthMain}
            padding="lg"
            style={styles.netWorthCard}
          >
            <View style={styles.netWorthContent}>
              <View style={styles.netWorthMain}>
                <Text variant="body" style={{ color: colors.white, opacity: 0.8 }}>
                  Total Net Worth
                </Text>
                <Text variant="h1" weight="bold" color="white" style={styles.netWorthAmount}>
                  {hideBalance ? '••••••' : formatCurrency(netWorth.total, { symbol: '$', minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                </Text>
                
                {/* Small change indicator */}
                {netWorth.change !== 0 && (
                  <View style={styles.changeRow}>
                    <View style={[styles.changeBadge, { backgroundColor: isPositiveChange ? `${colors.success}30` : `${colors.error}30` }]}>
                      <Ionicons
                        name={isPositiveChange ? 'trending-up' : 'trending-down'}
                        size={14}
                        color={isPositiveChange ? colors.success : colors.error}
                      />
                      <Text
                        variant="small"
                        weight="semiBold"
                        style={{ color: isPositiveChange ? colors.success : colors.error, marginLeft: 4 }}
                      >
                        {formatPercent(Math.abs(netWorth.changePercent), { decimals: 1 })}
                      </Text>
                    </View>
                  </View>
                )}
              </View>
              
              <Pressable
                onPress={() => setHideBalance(!hideBalance)}
                hitSlop={8}
                accessibilityLabel={hideBalance ? 'Show balance' : 'Hide balance'}
              >
                <Ionicons
                  name={hideBalance ? 'eye-off-outline' : 'eye-outline'}
                  size={22}
                  color={colors.white}
                  style={{ opacity: 0.8 }}
                />
              </Pressable>
            </View>
          </GradientCard>
        </View>

        {/* BREAKDOWN SUMMARY */}
        <BreakdownSection
          accountsValue={netWorth.accountsValue}
          investmentsValue={netWorth.investmentsValue}
          savingsValue={netWorth.savingsValue}
        />

        {/* INVESTMENTS SNAPSHOT */}
        <InvestmentSnapshot
          totalValue={investments.totalValue}
          pnl={investments.pnl}
          pnlPercent={investments.pnlPercent}
          positionsCount={investments.positionsCount}
          lastUpdated={investments.lastUpdated}
          onPress={onViewInvestments}
        />

        {/* SAVINGS SNAPSHOT */}
        <SavingsSnapshot
          goals={savingsGoals}
          onAddGoal={onAddSavingsGoal}
          onViewGoal={onViewSavingsGoal}
          onViewAll={onViewSavings}
        />

        {/* RECENT ACTIVITY */}
        <RecentActivity
          items={recentActivity}
          onViewItem={onViewActivity}
        />
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
  notificationButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressed: {
    opacity: 0.7,
  },
  badge: {
    position: 'absolute',
    top: 6,
    right: 6,
    minWidth: 18,
    height: 18,
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  scrollContent: {
    paddingHorizontal: Spacing.md,
    paddingBottom: Spacing.xl,
  },
  netWorthSection: {
    marginBottom: Spacing.lg,
  },
  netWorthCard: {
    paddingVertical: Spacing.xl,
  },
  netWorthContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  netWorthMain: {
    flex: 1,
  },
  netWorthAmount: {
    fontSize: 36,
    lineHeight: 42,
    marginTop: Spacing.xs,
  },
  changeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Spacing.sm,
  },
  changeBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
});

