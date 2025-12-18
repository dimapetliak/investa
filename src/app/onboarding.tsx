import { Button, Card, Select, Text } from '@/components/_shared';
import { useTheme } from '@/contexts/theme-context';
import { useOnboarding } from '@/hooks';
import { STORAGE_KEYS, storageHelpers } from '@/lib/storage';
import { Spacing } from '@/theme/spacing';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useRef, useState } from 'react';
import {
  Dimensions,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  Switch,
  View,
} from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const CURRENCY_OPTIONS = [
  { label: "USD - US Dollar", value: "USD" },
  { label: "EUR - Euro", value: "EUR" },
];

interface OnboardingSlide {
  id: string;
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  description: string;
}

const onboardingSlides: OnboardingSlide[] = [
  {
    id: '1',
    icon: 'wallet',
    title: 'Track Your Investments',
    description: 'Keep track of all your stocks and crypto assets in one place. Monitor your portfolio performance with ease.',
  },
  {
    id: '2',
    icon: 'trending-up',
    title: 'Analyze Performance',
    description: 'View detailed analytics and insights about your investment performance. Make informed decisions.',
  },
  {
    id: '3',
    icon: 'shield-checkmark',
    title: 'Secure & Private',
    description: 'Your data stays on your device. No cloud sync, no servers. Complete privacy and security.',
  },
];

export default function OnboardingScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showSetup, setShowSetup] = useState(false);
  const [currency, setCurrency] = useState("USD");
  const [faceIdEnabled, setFaceIdEnabled] = useState(false);
  const flatListRef = useRef<FlatList>(null);
  const { completeOnboarding } = useOnboarding();
  const { colors } = useTheme();

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / SCREEN_WIDTH);
    setCurrentIndex(index);
  };

  const handleNext = () => {
    if (currentIndex < onboardingSlides.length - 1) {
      const nextIndex = currentIndex + 1;
      flatListRef.current?.scrollToIndex({
        index: nextIndex,
        animated: true
      });
    } else {
      setShowSetup(true);
    }
  };

  const handleSkip = () => {
    setShowSetup(true);
  };

  const handleFinish = () => {
    // Save user preferences
    const preferences = {
      currency,
      faceIdEnabled,
    };
    storageHelpers.setItem(STORAGE_KEYS.USER_PREFERENCES, preferences);

    completeOnboarding();
    router.replace('/(tabs)');
  };

  const renderSlide = ({ item }: { item: OnboardingSlide }) => {
    return (
      <View style={{ width: SCREEN_WIDTH, flex: 1, backgroundColor: colors.primary }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'space-between',
            paddingHorizontal: Spacing.lg,
            paddingVertical: Spacing['2xl'],
          }}
        >
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View
              style={{
                width: 120,
                height: 120,
                borderRadius: 60,
                backgroundColor: colors.white,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: Spacing.xl,
              }}
            >
              <Ionicons name={item.icon} size={64} color={colors.primary} />
            </View>

            <Text
              variant="h1"
              style={{
                color: colors.white,
                textAlign: 'center',
                marginBottom: Spacing.md,
              }}
            >
              {item.title}
            </Text>

            <Text
              variant="body"
              style={{
                color: colors.white,
                textAlign: 'center',
                opacity: 0.9,
                paddingHorizontal: Spacing.lg,
              }}
            >
              {item.description}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  const renderPagination = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: Spacing.sm,
          marginBottom: Spacing.lg,
        }}
      >
        {onboardingSlides.map((_, index) => (
          <View
            key={index}
            style={{
              width: currentIndex === index ? 24 : 8,
              height: 8,
              borderRadius: 4,
              backgroundColor: currentIndex === index ? colors.white : colors.white + '80',
            }}
          />
        ))}
      </View>
    );
  };

  const renderSetupScreen = () => {
    return (
      <ScrollView
        style={{ flex: 1, backgroundColor: colors.background }}
        contentContainerStyle={{
          paddingHorizontal: Spacing.lg,
          paddingTop: Spacing['5xl'],
          paddingBottom: Spacing['3xl'],
        }}
      >
        <View style={{ alignItems: 'center', marginBottom: Spacing['2xl'] }}>
          <View
            style={{
              width: 80,
              height: 80,
              borderRadius: 40,
              backgroundColor: colors.primary,
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: Spacing.lg,
            }}
          >
            <Ionicons name="settings-outline" size={40} color={colors.white} />
          </View>
          <Text variant="h1" style={{ textAlign: 'center', marginBottom: Spacing.sm }}>
            Setup Your App
          </Text>
          <Text variant="body" color="muted" style={{ textAlign: 'center' }}>
            Customize your experience with a few quick settings
          </Text>
        </View>

        <View style={{ marginBottom: Spacing.xl }}>
          <Card>
            <View style={{ padding: Spacing.md }}>
              <Select
                label="Base Currency"
                placeholder="Select your preferred currency"
                options={CURRENCY_OPTIONS}
                value={currency}
                onChangeValue={(value) => setCurrency(value as string)}
                leftIcon={
                  <Ionicons
                    name="cash-outline"
                    size={20}
                    color={colors.foreground}
                  />
                }
                hint="This will be used to display all your portfolio values"
              />
            </View>
          </Card>
        </View>

        <View style={{ marginBottom: Spacing['2xl'] }}>
          <Card>
            <View style={{ padding: Spacing.md }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <View style={{ flex: 1, marginRight: Spacing.md }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: Spacing.xs }}>
                    <Ionicons
                      name="finger-print"
                      size={24}
                      color={colors.foreground}
                      style={{ marginRight: Spacing.sm }}
                    />
                    <Text variant="body">Face ID / Touch ID</Text>
                  </View>
                  <Text variant="caption" color="muted">
                    Secure your app with biometric authentication
                  </Text>
                </View>
                <Switch
                  value={faceIdEnabled}
                  onValueChange={setFaceIdEnabled}
                  trackColor={{
                    false: colors.neutral300,
                    true: colors.primary,
                  }}
                  thumbColor={colors.white}
                />
              </View>
            </View>
          </Card>
        </View>

        <Button
          variant="primary"
          onPress={handleFinish}
          style={{ marginTop: Spacing.md }}
        >
          Get Started
        </Button>
      </ScrollView>
    );
  };

  if (showSetup) {
    return renderSetupScreen();
  }

  return (
    <View style={{ flex: 1, backgroundColor: colors.neutral50 }}>
      <FlatList
        ref={flatListRef}
        data={onboardingSlides}
        renderItem={renderSlide}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        keyExtractor={(item) => item.id}
        getItemLayout={(_, index) => ({
          length: SCREEN_WIDTH,
          offset: SCREEN_WIDTH * index,
          index,
        })}
        onScrollToIndexFailed={(info) => {
          const wait = new Promise((resolve) => setTimeout(resolve, 500));
          wait.then(() => {
            flatListRef.current?.scrollToIndex({
              index: info.index,
              animated: true
            });
          });
        }}
      />

      <View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          paddingHorizontal: Spacing.lg,
          paddingBottom: Spacing.xl,
          paddingTop: Spacing.md,
          backgroundColor: 'transparent',
        }}
      >
        {renderPagination()}

        <View
          style={{
            flexDirection: 'row',
            gap: Spacing.md,
            justifyContent: 'space-between',
          }}
        >
          {currentIndex < onboardingSlides.length - 1 && (
            <Button
              variant="outline"
              onPress={handleSkip}
              style={{
                flex: 1,
                backgroundColor: colors.white + '20',
                borderColor: colors.white,
              }}
              textStyle={{ color: colors.white }}
            >
              Skip
            </Button>
          )}

          <Button
            variant="primary"
            onPress={handleNext}
            fullWidth={currentIndex === onboardingSlides.length - 1}
            style={{
              flex: 1,
              backgroundColor: colors.white,
            }}
            textStyle={{ color: colors.primary }}
          >
            {currentIndex === onboardingSlides.length - 1 ? 'Setup' : 'Next'}
          </Button>
        </View>
      </View>
    </View>
  );
}
