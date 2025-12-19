import { Spacing } from '@/theme/spacing';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import type { GradientCardProps, GradientPreset } from './gradient-card.types';

const GRADIENT_PRESETS: Record<GradientPreset, readonly [string, string]> = {
  indigo: ['#6366f1', '#a78bfa'],
  purple: ['#a855f7', '#c4b5fd'],
  lime: ['#84cc16', '#bef264'],
  blue: ['#3b82f6', '#93c5fd'],
  orange: ['#f97316', '#fdba74'],
  pink: ['#ec4899', '#f9a8d4'],
};

const PADDING_MAP = {
  none: 0,
  sm: Spacing.sm,
  md: Spacing.md,
  lg: Spacing.lg,
};

export const GradientCard: React.FC<GradientCardProps> = ({
  children,
  preset = 'indigo',
  colors,
  start = { x: 0, y: 0 },
  end = { x: 1, y: 1 },
  padding = 'md',
  borderRadius = 24,
  onPress,
  style,
}) => {
  const gradientColors = colors ?? GRADIENT_PRESETS[preset];
  const paddingValue = PADDING_MAP[padding];

  const content = (
    <LinearGradient
      colors={gradientColors}
      start={start}
      end={end}
      style={[
        styles.gradient,
        {
          borderRadius,
          padding: paddingValue,
        },
        style,
      ]}
    >
      {children}
    </LinearGradient>
  );

  if (onPress) {
    return (
      <Pressable onPress={onPress} style={({ pressed }) => pressed && styles.pressed}>
        {content}
      </Pressable>
    );
  }

  return content;
};

const styles = StyleSheet.create({
  gradient: {
    overflow: 'hidden',
  },
  pressed: {
    opacity: 0.95,
  },
});

export type { GradientCardProps, GradientPreset } from './gradient-card.types';

