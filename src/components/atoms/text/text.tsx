import { useTheme } from '@/contexts/theme-context';
import { Typography } from '@/theme/tokens';
import React from 'react';
import { Text as RNText, TextStyle } from 'react-native';
import type { TextColor, TextProps, TextVariant } from './text.types';

export const Text: React.FC<TextProps> = ({
  variant = 'body',
  color = 'default',
  weight,
  style,
  children,
  ...props
}) => {
  const { colors } = useTheme();

  // Design Library Typography specs
  const variantStyles: Record<TextVariant, TextStyle> = {
    h1: {
      fontSize: Typography.fontSize['4xl'],
      lineHeight: Typography.lineHeight['4xl'],
      fontFamily: Typography.fontWeight.bold,
      letterSpacing: Typography.letterSpacing.tight,
    },
    h2: {
      fontSize: Typography.fontSize['2xl'],
      lineHeight: Typography.lineHeight['2xl'],
      fontFamily: Typography.fontWeight.semiBold,
      letterSpacing: Typography.letterSpacing.normal,
    },
    h3: {
      fontSize: Typography.fontSize.lg,
      lineHeight: Typography.lineHeight.lg,
      fontFamily: Typography.fontWeight.semiBold,
    },
    body: {
      fontSize: Typography.fontSize.base,
      lineHeight: Typography.lineHeight.base,
      fontFamily: Typography.fontWeight.regular,
    },
    caption: {
      fontSize: Typography.fontSize.sm,
      lineHeight: Typography.lineHeight.sm,
      fontFamily: Typography.fontWeight.regular,
    },
    small: {
      fontSize: Typography.fontSize.xs,
      lineHeight: Typography.lineHeight.xs,
      fontFamily: Typography.fontWeight.regular,
    },
  };

  const colorStyles: Record<TextColor, string> = {
    default: colors.foreground,
    muted: colors.foregroundMuted,
    tertiary: colors.foregroundTertiary,
    primary: colors.primary,
    success: colors.success,
    error: colors.error,
    warning: colors.warning,
  };

  const weightOverride = weight
    ? { fontFamily: Typography.fontWeight[weight] }
    : {};

  return (
    <RNText
      style={[
        variantStyles[variant],
        { color: colorStyles[color] },
        weightOverride,
        style,
      ]}
      {...props}
    >
      {children}
    </RNText>
  );
};


