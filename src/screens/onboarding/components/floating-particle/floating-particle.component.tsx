import React, { memo, useEffect } from 'react';
import { Dimensions } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import { createParticleStyle } from './floating-particle.styles';
import { FloatingParticleProps } from './floating-particle.types';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

export const FloatingParticle = memo(({ delay, size, startX, startY }: FloatingParticleProps) => {
  const translateY = useSharedValue(0);
  const translateX = useSharedValue(0);
  const opacity = useSharedValue(0);
  const scale = useSharedValue(0.5);

  useEffect(() => {
    opacity.value = withDelay(delay, withRepeat(
      withSequence(
        withTiming(0.6, { duration: 2000 }),
        withTiming(0, { duration: 2000 })
      ),
      -1,
      false
    ));
    
    translateY.value = withDelay(delay, withRepeat(
      withTiming(-SCREEN_HEIGHT * 0.5, { duration: 8000, easing: Easing.linear }),
      -1,
      false
    ));

    translateX.value = withDelay(delay, withRepeat(
      withSequence(
        withTiming(30, { duration: 2000 }),
        withTiming(-30, { duration: 2000 })
      ),
      -1,
      true
    ));

    scale.value = withDelay(delay, withRepeat(
      withSequence(
        withTiming(1.2, { duration: 1500 }),
        withTiming(0.8, { duration: 1500 })
      ),
      -1,
      true
    ));
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateY: translateY.value },
      { translateX: translateX.value },
      { scale: scale.value },
    ],
    opacity: opacity.value,
  }));

  const particleStyle = createParticleStyle(size, startX, startY);

  return (
    <Animated.View style={[particleStyle, animatedStyle]} />
  );
});
