import { useTheme } from '@/contexts/theme-context';
import { ControlHeight, Opacity } from '@/theme/tokens';
import React from 'react';
import { ActivityIndicator, Pressable, Text, View, ViewStyle } from 'react-native';
import { styles } from './button.styles';
import type { ButtonProps, ButtonSize, ButtonVariant } from './button.types';

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  fullWidth = false,
  children,
  style,
  ...props
}) => {
  const { colors } = useTheme();
  const isDisabled = disabled || loading;

  const sizeStyles: Record<ButtonSize, ViewStyle> = {
    sm: {
      height: ControlHeight.sm,
      paddingHorizontal: 16,
    },
    md: {
      height: ControlHeight.md,
      paddingHorizontal: 24,
    },
    lg: {
      height: ControlHeight.lg,
      paddingHorizontal: 32,
    },
  };

  const variantStyles: Record<ButtonVariant, ViewStyle> = {
    primary: {
      backgroundColor: colors.primary,
    },
    secondary: {
      backgroundColor: colors.backgroundSecondary,
    },
    outline: {
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderColor: colors.border,
    },
    ghost: {
      backgroundColor: 'transparent',
    },
    text: {
      backgroundColor: 'transparent',
    },
    destructive: {
      backgroundColor: colors.error,
    },
  };

  const textColorMap: Record<ButtonVariant, string> = {
    primary: colors.primaryForeground,
    secondary: colors.foreground,
    outline: colors.foreground,
    ghost: colors.foreground,
    text: colors.primary,
    destructive: '#FFFFFF',
  };

  const renderContent = () => {
    if (loading) {
      return <ActivityIndicator color={textColorMap[variant]} size="small" />;
    }

    // If children is a string, render with Text component
    if (typeof children === 'string') {
      return (
        <Text style={[styles.text, { color: textColorMap[variant] }]}>
          {children}
        </Text>
      );
    }

    // Otherwise, render children directly (for icons, etc.)
    return <View style={styles.contentContainer}>{children}</View>;
  };

  return (
    <Pressable
      style={({ pressed }) => [
        styles.base,
        sizeStyles[size],
        variantStyles[variant],
        fullWidth && styles.fullWidth,
        isDisabled && styles.disabled,
        pressed && !isDisabled && { opacity: Opacity.hover },
        style,
      ]}
      disabled={isDisabled}
      {...props}
    >
      {renderContent()}
    </Pressable>
  );
};

