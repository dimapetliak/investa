import { Colors } from '@/theme/colors';
import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import { styles } from './skeleton.styles';
import { SkeletonProps } from './skeleton.types';

export const Skeleton = ({
  width,
  height,
  borderRadius = 4,
  style,
}: SkeletonProps) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(animatedValue, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [animatedValue]);

  const opacity = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0.3, 0.7],
  });

  return (
    <Animated.View
      style={[
        styles.skeleton,
        {
          width: width || '100%',
          height: height || 20,
          borderRadius,
          opacity,
          backgroundColor: Colors.neutral200,
        },
        style,
      ]}
    />
  );
};

