import { Spacer, Text } from '@/components';
import { Ionicons } from '@expo/vector-icons';
import React, { memo } from 'react';
import { Pressable } from 'react-native';
import Animated, { FadeIn, FadeInUp } from 'react-native-reanimated';
import { StepDots } from '../step-dots';
import { styles } from './bottom-navigation.styles';
import { BottomNavigationProps } from './bottom-navigation.types';

export const BottomNavigation = memo(({ 
  currentStep, 
  totalSteps, 
  isLastStep, 
  onNext 
}: BottomNavigationProps) => {
  return (
    <Animated.View 
      entering={FadeInUp.delay(500).springify()}
      style={styles.container}
    >
      <Pressable
        onPress={onNext}
        style={({ pressed }) => [
          styles.nextButton,
          { transform: [{ scale: pressed ? 0.95 : 1 }] },
        ]}
      >
        <Animated.View 
          style={styles.nextButtonContent}
          entering={FadeIn.delay(600)}
        >
          <Text variant="body" weight="semiBold" style={styles.nextButtonText}>
            {isLastStep ? 'Get Started' : 'Continue'}
          </Text>
          <Ionicons 
            name={isLastStep ? 'checkmark' : 'arrow-forward'} 
            size={20} 
            color="#3b82f6" 
          />
        </Animated.View>
      </Pressable>

      <Spacer size="lg" />

      <StepDots totalSteps={totalSteps} currentStep={currentStep} />
    </Animated.View>
  );
});
