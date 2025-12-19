import { Text } from '@/components';
import { Ionicons } from '@expo/vector-icons';
import React, { memo } from 'react';
import { Pressable, View } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { styles } from './onboarding-header.styles';
import { OnboardingHeaderProps } from './onboarding-header.types';

export const OnboardingHeader = memo(({ 
  currentStep, 
  isLastStep, 
  onBack, 
  onSkip 
}: OnboardingHeaderProps) => {
  return (
    <Animated.View 
      entering={FadeInDown.delay(100).springify()}
      style={styles.header}
    >
      {currentStep > 0 ? (
        <Pressable onPress={onBack} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#ffffff" />
        </Pressable>
      ) : (
        <View style={styles.backButton} />
      )}
      
      {!isLastStep && (
        <Pressable onPress={onSkip}>
          <Text variant="body" style={styles.skipText}>Skip</Text>
        </Pressable>
      )}
    </Animated.View>
  );
});
