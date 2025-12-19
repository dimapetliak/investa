import { Ionicons } from '@expo/vector-icons';
import React, { memo, useEffect } from 'react';
import Animated, {
    Easing,
    useAnimatedStyle,
    useSharedValue,
    withRepeat,
    withSequence,
    withSpring,
    withTiming,
} from 'react-native-reanimated';
import { AnimatedIconProps } from './animated-icon.types';

export const AnimatedIcon = memo(({ icon, color, isActive, size = 64 }: AnimatedIconProps) => {
  const scale = useSharedValue(1);
  const rotate = useSharedValue(0);
  const translateY = useSharedValue(0);

  useEffect(() => {
    if (isActive) {
      // Pulse effect
      scale.value = withRepeat(
        withSequence(
          withSpring(1.05, { damping: 5 }),
          withSpring(1, { damping: 5 })
        ),
        -1,
        true
      );

      // Gentle float effect
      translateY.value = withRepeat(
        withSequence(
          withTiming(-8, { duration: 1500, easing: Easing.inOut(Easing.ease) }),
          withTiming(0, { duration: 1500, easing: Easing.inOut(Easing.ease) })
        ),
        -1,
        true
      );

      // Subtle rotation
      rotate.value = withRepeat(
        withSequence(
          withTiming(3, { duration: 2000 }),
          withTiming(-3, { duration: 2000 })
        ),
        -1,
        true
      );
    }
  }, [isActive]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { scale: scale.value },
      { translateY: translateY.value },
      { rotate: `${rotate.value}deg` },
    ],
  }));

  return (
    <Animated.View style={animatedStyle}>
      <Ionicons name={icon} size={size} color={color} />
    </Animated.View>
  );
});

