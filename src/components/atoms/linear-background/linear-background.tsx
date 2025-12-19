import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { styles } from './linear-background.styles';
import type { LinearBackgroundProps } from './linear-background.types';

export const LinearBackground: React.FC<LinearBackgroundProps> = ({
  colors = ['#4776E6', '#8E54E9'] as const,
  children,
  style,
  ...props
}) => {
  return (
    <LinearGradient
      colors={colors}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={[styles.gradient, style]}
      {...props}
    >
      {children}
    </LinearGradient>
  );
};

export type { LinearBackgroundProps } from './linear-background.types';

