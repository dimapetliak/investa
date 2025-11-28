import { Colors } from '@/theme/colors';
import React from 'react';
import { Text as RNText, StyleSheet } from 'react-native';
import { styles } from './text.styles';
import { TextProps } from './text.types';

const colorStyles = StyleSheet.create({
  default: {
    color: Colors.black,
  },
  muted: {
    color: Colors.neutral500,
  },
  primary: {
    color: Colors.primary,
  },
  error: {
    color: Colors.error,
  },
});

export const Text = ({
  variant = 'body',
  color = 'default',
  style,
  children,
  ...props
}: TextProps) => {
  return (
    <RNText
      style={[styles[variant], colorStyles[color], style]}
      {...props}
    >
      {children}
    </RNText>
  );
};

