import { useTheme } from '@/contexts/theme-context';
import { ControlHeight, Opacity, Radius, Typography } from '@/theme/tokens';
import React from 'react';
import { ActivityIndicator, Pressable, PressableProps, StyleSheet, Text, ViewStyle } from 'react-native';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends Omit<PressableProps, 'children'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  children: string;
}

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
  };

  const textColorMap: Record<ButtonVariant, string> = {
    primary: colors.primaryForeground,
    secondary: colors.foreground,
    outline: colors.foreground,
    ghost: colors.foreground,
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
      {loading ? (
        <ActivityIndicator color={textColorMap[variant]} size="small" />
      ) : (
        <Text
          style={[
            styles.text,
            { color: textColorMap[variant] },
          ]}
        >
          {children}
        </Text>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  base: {
    borderRadius: Radius.md,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  text: {
    fontSize: Typography.fontSize.base,
    fontFamily: Typography.fontWeight.semiBold,
    lineHeight: Typography.lineHeight.base,
  },
  fullWidth: {
    width: '100%',
  },
  disabled: {
    opacity: Opacity.disabled,
  },
});
