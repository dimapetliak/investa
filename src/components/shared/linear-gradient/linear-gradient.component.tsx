import { Colors } from '@/src/theme/colors';
import { LinearGradient as ExpoLinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { ViewStyle } from 'react-native';
import { gradientVariants } from './linear-gradient.styles';
import { LinearGradientProps } from './linear-gradient.types';

export const LinearGradient: React.FC<LinearGradientProps> = ({
  startColor = Colors.primaryGradientStart,
  endColor = Colors.primaryGradientEnd,
  start = [0, 0],
  end = [1, 1],
  colors,
  locations,
  style,
  children,
  variant = 'primary',
}) => {
  // Get gradient configuration based on variant
  const variantConfig = gradientVariants[variant];
  
  // Determine final colors
  let finalColors: string[];
  if (colors && colors.length > 0) {
    // Use custom colors array if provided
    finalColors = colors;
  } else if (variant !== 'custom' && variantConfig.colors.length > 0) {
    // Use variant colors
    finalColors = variantConfig.colors;
  } else {
    // Use startColor and endColor
    finalColors = [startColor, endColor];
  }
  
  // Determine final start and end points
  const finalStart = variant !== 'custom' ? variantConfig.start : start;
  const finalEnd = variant !== 'custom' ? variantConfig.end : end;
  
  // Combine style with flex: 1 if not specified to ensure gradient fills container
  const containerStyle: ViewStyle = {
    flex: 1,
    ...style,
  };

  return (
    <ExpoLinearGradient
      colors={finalColors}
      start={finalStart}
      end={finalEnd}
      locations={locations}
      style={containerStyle}
    >
      {children}
    </ExpoLinearGradient>
  );
};

