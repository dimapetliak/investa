import { Button, Card, Spacer, Text } from '@/components';
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
          <View style={styles.iconCircle}>
            <Ionicons name="trending-up" size={56} color="#4776E6" />
          </View>
        </View>

        <Spacer size="2xl" />

        {/* Title and Description */}
        <Text variant="h1" style={styles.title}>
          Personal Investment Tracker
        </Text>

        <Spacer size="md" />

        <Text variant="body" style={styles.description}>
          Track your stocks and crypto investments with real-time updates and
          detailed analytics
        </Text>

        <Spacer size="2xl" />

        {/* Currency Selection Card */}
        <Card padding="2xl" style={styles.card}>
          <Text variant="h3" style={styles.cardTitle}>
            Select Base Currency
          </Text>

          <Spacer size="2xl" />

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
                      backgroundColor: isSelected ? '#EFF6FF' : '#FFFFFF',
                      borderColor: isSelected ? '#155DFC' : '#E4E4E7',
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
                          backgroundColor: isSelected ? '#155DFC' : '#EFF6FF',
                        },
                      ]}
                    >
                      <Text
                        variant="h2"
                        style={{
                          color: isSelected ? '#FFFFFF' : '#09090B',
                          fontSize: 28,
                          fontWeight: '700',
                        }}
                      >
                        {option.icon}
                      </Text>
                    </View>
                    <View style={styles.currencyInfo}>
                      <Text variant="body" weight="semibold">
                        {option.label}
                      </Text>
                      <Text variant="caption" color="muted">
                        {option.symbol}
                      </Text>
                    </View>
                  </View>
                  {isSelected && (
                    <View style={styles.checkmark}>
                      <Ionicons name="checkmark" size={20} color="#FFFFFF" />
                    </View>
                  )}
                </Pressable>
              );
            })}
          </View>

          <Spacer size="lg" />

          <Button variant="primary" size="lg" onPress={handleFinish} fullWidth>
            Get Started
          </Button>
        </Card>
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
    paddingTop: 64,
    paddingBottom: Spacing['2xl'],
    justifyContent: 'center',
  },
  iconContainer: {
    alignItems: 'center',
  },
  iconCircle: {
    width: 100,
    height: 100,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 12,
  },
  title: {
    textAlign: 'center',
    color: '#FFFFFF',
  },
  description: {
    textAlign: 'center',
    color: '#FFFFFF',
    opacity: 0.95,
  },
  card: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.2,
    shadowRadius: 32,
    elevation: 16,
  },
  cardTitle: {
    textAlign: 'center',
    color: '#09090B',
  },
  currencyList: {
    gap: Spacing.md,
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
    backgroundColor: '#155DFC',
  },
});
