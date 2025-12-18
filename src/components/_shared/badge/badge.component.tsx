import { useTheme } from '@/contexts/theme-context';
import React from 'react';
import { Text, View } from 'react-native';
import { styles, getVariantStyles } from './badge.styles';
import { BadgeProps } from './badge.types';

export const Badge = ({
  children,
  variant = 'default',
  size = 'md',
  style,
}: BadgeProps) => {
  const { colors } = useTheme();
  const variantStyles = getVariantStyles(colors);

  return (
    <View style={[styles.base, styles[size], variantStyles[variant], style]}>
      <Text style={[styles.text, styles[`${size}Text`], variantStyles[`${variant}Text`]]}>
        {children}
      </Text>
    </View>
  );
};
