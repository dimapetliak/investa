import React, { useEffect, useRef } from "react";
import { Animated } from "react-native";
import { skeletonStyles } from "./skeleton.styles";
import type { SkeletonProps } from "./skeleton.types";

export const Skeleton: React.FC<SkeletonProps> = ({
  width = "100%",
  height = 20,
  borderRadius = 4,
  style,
  variant = "rectangular",
  ...rest
}) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animation = Animated.loop(
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
    );
    animation.start();
    return () => animation.stop();
  }, [animatedValue]);

  const opacity = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0.5, 1],
  });

  const finalBorderRadius =
    variant === "circular" ? height / 2 : variant === "text" ? 4 : borderRadius;

  return (
    <Animated.View
      {...rest}
      style={[
        skeletonStyles.base,
        {
          width,
          height,
          borderRadius: finalBorderRadius,
          opacity,
        },
        style,
      ]}
    />
  );
};


