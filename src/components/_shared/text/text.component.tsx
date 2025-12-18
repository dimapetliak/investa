import { useTheme } from '@/contexts/theme-context';
import React from 'react';
import { Text as RNText, StyleSheet } from 'react-native';
import { LightColors } from '@/theme';
import { styles } from './text.styles';
import { TextProps } from './text.types';

const getColorStyles = (colors: typeof LightColors) => StyleSheet.create({
  default: {
    color: colors.foreground,
  },
  muted: {
    color: colors.foregroundMuted,
  },
  primary: {
    color: colors.primary,
  },
  error: {
    color: colors.error,
  },
  success: {
    color: colors.success,
  },
  warning: {
    color: colors.warning,
  },
});

export const Text = ({
  variant = 'body',
  color = 'default',
  style,
  children,
  ...props
}: TextProps) => {
  const { colors } = useTheme();
  const colorStyles = getColorStyles(colors);

  return (
    <RNText
      style={[styles[variant], colorStyles[color], style]}
      {...props}
    >
      {children}
    </RNText>
  );
};
