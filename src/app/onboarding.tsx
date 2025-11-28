import { Button, Text } from '@/components/_shared';
import { Colors } from '@/theme/colors';
import { Spacing } from '@/theme/spacing';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useRef, useState } from 'react';
import {
  Dimensions,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  View,
} from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

interface OnboardingSlide {
  id: string;
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  description: string;
  backgroundColor: string;
}

const onboardingSlides: OnboardingSlide[] = [
  {
    id: '1',
    icon: 'wallet',
    title: 'Track Your Investments',
    description: 'Keep track of all your stocks and crypto assets in one place. Monitor your portfolio performance with ease.',
    backgroundColor: Colors.primary,
  },
  {
    id: '2',
    icon: 'trending-up',
    title: 'Analyze Performance',
    description: 'View detailed analytics and insights about your investment performance. Make informed decisions.',
    backgroundColor: Colors.accentPurple,
  },
  {
    id: '3',
    icon: 'shield-checkmark',
    title: 'Secure & Private',
    description: 'Your data stays on your device. No cloud sync, no servers. Complete privacy and security.',
    backgroundColor: Colors.primary,
  },
];

export default function OnboardingScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

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
      handleFinish();
    }
  };

  const handleSkip = () => {
    handleFinish();
  };

  const handleFinish = () => {
    router.replace('/(tabs)');
  };

  const renderSlide = ({ item }: { item: OnboardingSlide }) => {
    return (
      <View style={{ width: SCREEN_WIDTH, flex: 1, backgroundColor: item.backgroundColor }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'space-between',
            paddingHorizontal: Spacing.lg,
            paddingVertical: Spacing.xxl,
          }}
        >
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View
              style={{
                width: 120,
                height: 120,
                borderRadius: 60,
                backgroundColor: Colors.white,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: Spacing.xl,
              }}
            >
              <Ionicons name={item.icon} size={64} color={item.backgroundColor} />
            </View>

            <Text
              variant="h1"
              style={{
                color: Colors.white,
                textAlign: 'center',
                marginBottom: Spacing.md,
              }}
            >
              {item.title}
            </Text>

            <Text
              variant="body"
              style={{
                color: Colors.white,
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
              backgroundColor: currentIndex === index ? Colors.white : Colors.white + '80',
            }}
          />
        ))}
      </View>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: Colors.neutral50 }}>
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
                backgroundColor: Colors.white + '20',
                borderColor: Colors.white,
              }}
              textStyle={{ color: Colors.white }}
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
              backgroundColor: Colors.white,
            }}
            textStyle={{ color: onboardingSlides[currentIndex].backgroundColor }}
          >
            {currentIndex === onboardingSlides.length - 1 ? 'Get Started' : 'Next'}
          </Button>
        </View>
      </View>
    </View>
  );
}
