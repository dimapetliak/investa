import { Button, Text } from '@/components/_shared';
import { useTheme } from '@/contexts/theme-context';
import { useOnboarding } from '@/hooks';
import { STORAGE_KEYS, storageHelpers } from '@/lib/storage';
import { Spacing } from '@/theme';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

interface CurrencyOption {
  value: string;
  label: string;
  symbol: string;
  icon: string;
}

const CURRENCY_OPTIONS: CurrencyOption[] = [
  { value: 'USD', label: 'US Dollar', symbol: 'USD ($)', icon: '$' },
  { value: 'EUR', label: 'Euro', symbol: 'EUR (€)', icon: '€' },
  { value: 'GBP', label: 'British Pound', symbol: 'GBP (£)', icon: '£' },
];

export default function OnboardingScreen() {
  const [currency, setCurrency] = useState<string>('USD');
  const { completeOnboarding } = useOnboarding();
  const { colors } = useTheme();

  const handleFinish = () => {
    const preferences = {
      currency,
      faceIdEnabled: false,
    };
    storageHelpers.setItem(STORAGE_KEYS.USER_PREFERENCES, preferences);
    completeOnboarding();
    router.replace('/(tabs)');
  };

  return (
    <LinearGradient
      colors={['#4776E6', '#8E54E9']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.gradient}
    >
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* App Icon */}
        <View style={styles.iconContainer}>
          <View style={[styles.iconCircle, { backgroundColor: colors.white }]}>
            <Ionicons name="trending-up" size={56} color="#4776E6" />
          </View>
        </View>

        {/* Title and Description */}
        <View style={styles.headerContainer}>
          <Text variant="h1" style={[styles.title, { color: colors.white }]}>
            Personal Investment Tracker
          </Text>
          <Text
            variant="body"
            style={[styles.description, { color: colors.white }]}
          >
            Track your stocks and crypto investments with real-time updates and
            detailed analytics
          </Text>
        </View>

        {/* Currency Selection Card */}
        <View style={[styles.card, { backgroundColor: colors.white }]}>
          <Text
            variant="h3"
            style={[styles.cardTitle, { color: colors.foreground }]}
          >
            Select Base Currency
          </Text>

          <View style={styles.currencyList}>
            {CURRENCY_OPTIONS.map((option) => {
              const isSelected = currency === option.value;
              return (
                <Pressable
                  key={option.value}
                  onPress={() => setCurrency(option.value)}
                  style={({ pressed }) => [
                    styles.currencyOption,
                    {
                      backgroundColor: isSelected
                        ? colors.primaryLight
                        : colors.backgroundSecondary,
                      borderColor: isSelected ? colors.primary : colors.border,
                      borderWidth: isSelected ? 2 : 1,
                      transform: pressed ? [{ scale: 0.98 }] : [{ scale: 1 }],
                    },
                  ]}
                >
                  <View style={styles.currencyContent}>
                    <View
                      style={[
                        styles.currencyIcon,
                        {
                          backgroundColor: isSelected
                            ? colors.primary
                            : colors.neutral200,
                        },
                      ]}
                    >
                      <Text
                        variant="h2"
                        style={{
                          color: isSelected ? colors.white : colors.foreground,
                          fontSize: 28,
                          fontWeight: '700',
                        }}
                      >
                        {option.icon}
                      </Text>
                    </View>
                    <View style={styles.currencyInfo}>
                      <Text
                        variant="body"
                        style={{
                          color: colors.foreground,
                          fontWeight: '600',
                          fontSize: 17,
                        }}
                      >
                        {option.label}
                      </Text>
                      <Text
                        variant="caption"
                        style={{
                          color: colors.foregroundMuted,
                          fontSize: 14,
                        }}
                      >
                        {option.symbol}
                      </Text>
                    </View>
                  </View>
                  {isSelected && (
                    <View
                      style={[
                        styles.checkmark,
                        { backgroundColor: colors.primary },
                      ]}
                    >
                      <Ionicons
                        name="checkmark"
                        size={20}
                        color={colors.white}
                      />
                    </View>
                  )}
                </Pressable>
              );
            })}
          </View>

          <Button
            variant="primary"
            onPress={handleFinish}
            size="lg"
            style={styles.button}
          >
            Get Started
          </Button>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    paddingHorizontal: Spacing['2xl'],
    paddingTop: Spacing['5xl'],
    paddingBottom: Spacing['3xl'],
    justifyContent: 'center',
  },
  iconContainer: {
    alignItems: 'center',
    marginBottom: Spacing['2xl'],
  },
  iconCircle: {
    width: 100,
    height: 100,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 12,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: Spacing['3xl'],
  },
  title: {
    textAlign: 'center',
    marginBottom: Spacing.md,
    fontSize: 28,
    fontWeight: '700',
    lineHeight: 36,
  },
  description: {
    textAlign: 'center',
    opacity: 0.95,
    paddingHorizontal: Spacing.lg,
    fontSize: 16,
    lineHeight: 24,
  },
  card: {
    borderRadius: 24,
    padding: Spacing['2xl'],
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.2,
    shadowRadius: 32,
    elevation: 16,
  },
  cardTitle: {
    textAlign: 'center',
    marginBottom: Spacing['2xl'],
    fontSize: 20,
    fontWeight: '600',
  },
  currencyList: {
    gap: Spacing.md,
    marginBottom: Spacing['2xl'],
  },
  currencyOption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 16,
    padding: Spacing.lg,
    minHeight: 84,
  },
  currencyContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  currencyIcon: {
    width: 60,
    height: 60,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Spacing.lg,
  },
  currencyInfo: {
    flex: 1,
  },
  checkmark: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: Spacing.md,
  },
  button: {
    marginTop: Spacing.md,
    height: 56,
  },
});
