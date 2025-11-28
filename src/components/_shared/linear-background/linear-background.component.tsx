import { Colors } from '@/theme/colors';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { ViewStyle } from 'react-native';
import { getDirectionPoints, getVariantColors } from './linear-background.styles';
import { LinearBackgroundProps } from './linear-background.types';

export const LinearBackground: React.FC<LinearBackgroundProps> = ({
  children,
  variant = 'primary',
  colors,
  startColor,
  endColor,
  direction = 'diagonal-top',
  locations,
  opacity = 1,
  style,
  ...props
}) => {
  // Determine final colors
  let finalColors: string[];
  
  if (colors && colors.length > 0) {
    // Use custom colors array
    finalColors = colors;
  } else if (variant !== 'custom') {
    // Use variant colors
    finalColors = getVariantColors(variant);
  } else if (startColor && endColor) {
    // Use start/end colors
    finalColors = [startColor, endColor];
  } else {
    // Default fallback
    finalColors = [Colors.primaryGradientStart, Colors.primaryGradientEnd];
  }

  // Get direction points
  const { start, end } = getDirectionPoints(direction);

  // Apply opacity to colors if needed
  const colorsWithOpacity = opacity < 1
    ? finalColors.map(color => {
        // Convert hex to rgba if opacity is less than 1
        if (color.startsWith('#')) {
          const hex = color.replace('#', '');
          const r = parseInt(hex.substring(0, 2), 16);
          const g = parseInt(hex.substring(2, 4), 16);
          const b = parseInt(hex.substring(4, 6), 16);
          return `rgba(${r}, ${g}, ${b}, ${opacity})`;
        }
        return color;
      })
    : finalColors;

  const containerStyle: ViewStyle = {
    flex: 1,
    ...(style as ViewStyle),
  };

  return (
    <LinearGradient
      colors={colorsWithOpacity}
      start={start}
      end={end}
      locations={locations}
      style={[containerStyle, style]}
      {...props}
    >
      {children}
    </LinearGradient>
  );
};

