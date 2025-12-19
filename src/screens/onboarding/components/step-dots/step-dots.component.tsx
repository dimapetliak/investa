import React, { memo } from 'react';
import { View } from 'react-native';
import Animated, { 
  useAnimatedStyle, 
  withTiming 
} from 'react-native-reanimated';
import { styles } from './step-dots.styles';
import { StepDotsProps } from './step-dots.types';

const AnimatedDot = memo(({ 
  isActive, 
  activeColor, 
  inactiveColor 
}: { 
  isActive: boolean; 
  activeColor: string; 
  inactiveColor: string;
}) => {
  const animatedStyle = useAnimatedStyle(() => ({
    backgroundColor: withTiming(isActive ? activeColor : inactiveColor, { duration: 300 }),
    width: withTiming(isActive ? 24 : 8, { duration: 300 }),
  }));

  return <Animated.View style={[styles.dot, animatedStyle]} />;
});

export const StepDots = memo(({ 
  totalSteps, 
  currentStep, 
  activeColor = '#ffffff',
  inactiveColor = 'rgba(255, 255, 255, 0.3)',
}: StepDotsProps) => {
  return (
    <View style={styles.container}>
      {Array.from({ length: totalSteps }, (_, index) => (
        <AnimatedDot
          key={index}
          isActive={index === currentStep}
          activeColor={activeColor}
          inactiveColor={inactiveColor}
        />
      ))}
    </View>
  );
});
