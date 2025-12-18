import { useTheme } from '@/contexts/theme-context';
import { Typography } from '@/theme/tokens';
import React from 'react';
import { Text as RNText, TextProps as RNTextProps, TextStyle } from 'react-native';

type TextVariant = 'h1' | 'h2' | 'h3' | 'body' | 'caption' | 'small';
type TextColor = 'default' | 'muted' | 'primary' | 'success' | 'error' | 'warning';

export interface TextProps extends RNTextProps {
  variant?: TextVariant;
  color?: TextColor;
  weight?: 'regular' | 'medium' | 'semibold' | 'bold';
  children: React.ReactNode;
}

export const Text: React.FC<TextProps> = ({
  variant = 'body',
  color = 'default',
  weight,
  style,
  children,
  ...props
}) => {
  const { colors } = useTheme();

  const variantStyles: Record<TextVariant, TextStyle> = {
    h1: {
      fontSize: Typography.fontSize['4xl'],
      lineHeight: Typography.lineHeight['4xl'],
      fontFamily: Typography.fontWeight.bold,
    },
    h2: {
      fontSize: Typography.fontSize['2xl'],
      lineHeight: Typography.lineHeight['2xl'],
      fontFamily: Typography.fontWeight.semiBold,
    },
    h3: {
      fontSize: Typography.fontSize.xl,
      lineHeight: Typography.lineHeight.xl,
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
