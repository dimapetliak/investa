import { useTheme } from '@/contexts/theme-context';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from '../text';
import type { BadgeProps, BadgeSize, BadgeVariant } from './badge.types';

const SIZE_CONFIG: Record<BadgeSize, { minWidth: number; height: number; paddingH: number; fontSize: number }> = {
  sm: { minWidth: 16, height: 16, paddingH: 4, fontSize: 10 },
  md: { minWidth: 20, height: 20, paddingH: 6, fontSize: 12 },
};

export const Badge: React.FC<BadgeProps> = ({
  value,
  variant = 'error',
  size = 'sm',
  dot = false,
  max = 99,
  style,
}) => {
  const { colors } = useTheme();
  const sizeConfig = SIZE_CONFIG[size];

  const VARIANT_COLORS: Record<BadgeVariant, string> = {
    default: colors.foregroundMuted,
    primary: colors.primary,
    success: colors.success,
    warning: colors.warning,
    error: colors.error,
  };

  // Calculate display value
  const displayValue = typeof value === 'number' && value > max ? `${max}+` : value;

  if (dot) {
    return (
      <View
        style={[
          styles.dot,
          { backgroundColor: VARIANT_COLORS[variant] },
          style,
        ]}
      />
    );
  }

  if (value === undefined || value === null) {
    return null;
  }

  return (
    <View
      style={[
        styles.container,
        {
          minWidth: sizeConfig.minWidth,
          height: sizeConfig.height,
          paddingHorizontal: sizeConfig.paddingH,
          backgroundColor: VARIANT_COLORS[variant],
          borderRadius: sizeConfig.height / 2,
        },
        style,
      ]}
    >
      <Text
        variant="small"
        weight="bold"
        style={{ color: '#FFFFFF', fontSize: sizeConfig.fontSize }}
      >
        {displayValue}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
});

export type { BadgeProps, BadgeSize, BadgeVariant } from './badge.types';

