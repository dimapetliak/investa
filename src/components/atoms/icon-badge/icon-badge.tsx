import { useTheme } from '@/contexts/theme-context';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import type { IconBadgeProps, IconBadgeSize, IconBadgeVariant } from './icon-badge.types';

const SIZE_CONFIG: Record<IconBadgeSize, { container: number; icon: number; borderRadius: number }> = {
  sm: { container: 32, icon: 16, borderRadius: 8 },
  md: { container: 40, icon: 20, borderRadius: 12 },
  lg: { container: 48, icon: 24, borderRadius: 14 },
};

const VARIANT_COLORS: Record<Exclude<IconBadgeVariant, 'custom'>, { bg: string; icon: string }> = {
  primary: { bg: 'rgba(99, 102, 241, 0.15)', icon: '#6366f1' },
  secondary: { bg: 'rgba(107, 114, 128, 0.15)', icon: '#6b7280' },
  success: { bg: 'rgba(34, 197, 94, 0.15)', icon: '#22c55e' },
  warning: { bg: 'rgba(245, 158, 11, 0.15)', icon: '#f59e0b' },
  error: { bg: 'rgba(239, 68, 68, 0.15)', icon: '#ef4444' },
  purple: { bg: 'rgba(147, 51, 234, 0.2)', icon: '#7c3aed' },
  lime: { bg: 'rgba(101, 163, 13, 0.2)', icon: '#4d7c0f' },
};

export const IconBadge: React.FC<IconBadgeProps> = ({
  icon,
  variant = 'primary',
  size = 'md',
  backgroundColor,
  iconColor,
  style,
}) => {
  const { colors } = useTheme();
  const sizeConfig = SIZE_CONFIG[size];
  
  // Determine colors based on variant
  const variantColors = variant === 'custom'
    ? { bg: backgroundColor || colors.backgroundMuted, icon: iconColor || colors.foreground }
    : VARIANT_COLORS[variant];

  return (
    <View
      style={[
        styles.container,
        {
          width: sizeConfig.container,
          height: sizeConfig.container,
          borderRadius: sizeConfig.borderRadius,
          backgroundColor: variantColors.bg,
        },
        style,
      ]}
    >
      <Ionicons
        name={icon as keyof typeof Ionicons.glyphMap}
        size={sizeConfig.icon}
        color={variantColors.icon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export type { IconBadgeProps, IconBadgeSize, IconBadgeVariant } from './icon-badge.types';

