import React, { memo } from 'react';
import { View } from 'react-native';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import { styles } from './progress-bar.styles';
import { OnboardingProgressBarProps } from './progress-bar.types';

export const OnboardingProgressBar = memo(({ progress }: OnboardingProgressBarProps) => {
  const animatedWidth = useAnimatedStyle(() => ({
    width: `${progress.value * 100}%`,
  }));

  return (
    <View style={styles.container}>
      <View style={styles.track}>
        <Animated.View style={[styles.fill, animatedWidth]} />
      </View>
    </View>
  );
});
