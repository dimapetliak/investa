import { Button, Text } from '@/components/ui';
import { useOnboarding } from '@/hooks';
import { STORAGE_KEYS, storageHelpers } from '@/lib/storage';
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

        {/* Title and Description */}
        <View style={styles.headerContainer}>
          <Text variant="h1" className="text-white text-center mb-3 text-[28px] font-bold leading-9">
            Personal Investment Tracker
          </Text>
          <Text variant="body" className="text-white text-center opacity-95 px-4 text-base leading-6">
            Track your stocks and crypto investments with real-time updates and
            detailed analytics
          </Text>
        </View>

        {/* Currency Selection Card */}
        <View style={styles.card}>
          <Text variant="h3" className="text-foreground text-center mb-8 text-xl font-semibold">
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
                        className={isSelected ? 'text-white text-[28px] font-bold' : 'text-foreground text-[28px] font-bold'}
                      >
                        {option.icon}
                      </Text>
                    </View>
                    <View style={styles.currencyInfo}>
                      <Text variant="body" className="text-foreground font-semibold text-[17px]">
                        {option.label}
                      </Text>
                      <Text variant="caption" className="text-muted-foreground text-sm">
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

          <Button variant="primary" onPress={handleFinish} size="lg" className="mt-3 h-14">
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
    paddingHorizontal: 32,
    paddingTop: 64,
    paddingBottom: 48,
    justifyContent: 'center',
  },
  iconContainer: {
    alignItems: 'center',
    marginBottom: 32,
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
  headerContainer: {
    alignItems: 'center',
    marginBottom: 48,
  },
  card: {
    borderRadius: 24,
    padding: 32,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.2,
    shadowRadius: 32,
    elevation: 16,
  },
  currencyList: {
    gap: 16,
    marginBottom: 32,
  },
  currencyOption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 16,
    padding: 16,
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
    marginRight: 16,
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
    marginLeft: 16,
    backgroundColor: '#155DFC',
  },
});
