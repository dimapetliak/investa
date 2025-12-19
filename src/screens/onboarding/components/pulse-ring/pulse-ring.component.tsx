import React, { memo, useEffect } from 'react';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import { createRingStyle } from './pulse-ring.styles';
import { PulseRingProps } from './pulse-ring.types';

export const PulseRing = memo(({ 
  delay, 
  size = 140, 
  borderRadius = 40,
  borderColor = 'rgba(255, 255, 255, 0.5)' 
}: PulseRingProps) => {
  const scale = useSharedValue(1);
  const opacity = useSharedValue(0.5);

  useEffect(() => {
    scale.value = withDelay(delay, withRepeat(
      withTiming(2, { duration: 2000, easing: Easing.out(Easing.ease) }),
      -1,
      false
    ));
    opacity.value = withDelay(delay, withRepeat(
      withTiming(0, { duration: 2000, easing: Easing.out(Easing.ease) }),
      -1,
      false
    ));
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
    opacity: opacity.value,
  }));

  const ringStyle = createRingStyle(size, borderRadius, borderColor);

  return (
    <Animated.View style={[ringStyle, animatedStyle]} />
  );
});
