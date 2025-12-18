import { useTheme } from '@/contexts/theme-context';
import { ControlHeight, Opacity, Radius } from '@/theme/tokens';
import React from 'react';
import { Pressable, PressableProps, StyleSheet } from 'react-native';

export interface IconButtonProps extends Omit<PressableProps, 'style'> {
  icon: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  variant = 'ghost',
  size = 'md',
  disabled,
  ...props
}) => {
  const { colors } = useTheme();

  const sizeValue = {
    sm: 32,
    md: ControlHeight.md,
    lg: 48,
  }[size];

  const getBackgroundColor = (pressed: boolean) => {
    if (disabled) return colors.backgroundMuted;

    switch (variant) {
      case 'primary':
        return pressed ? colors.primaryHover : colors.primary;
      case 'secondary':
        return pressed ? colors.backgroundMuted : colors.backgroundMuted;
      case 'outline':
        return pressed ? colors.backgroundMuted : colors.background;
      case 'ghost':
        return pressed ? colors.backgroundMuted : 'transparent';
      default:
        return 'transparent';
    }
  };

  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        {
          width: sizeValue,
          height: sizeValue,
          backgroundColor: getBackgroundColor(pressed),
          borderColor: variant === 'outline' ? colors.border : 'transparent',
          borderWidth: variant === 'outline' ? 1 : 0,
          opacity: disabled ? Opacity.disabled : 1,
        },
      ]}
      disabled={disabled}
      {...props}
    >
      {icon}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Radius.md,
  },
});
