import { useTheme } from '@/contexts/theme-context';
import { ControlHeight, Opacity } from '@/theme/tokens';
import React from 'react';
import { Pressable } from 'react-native';
import { styles } from './icon-button.styles';
import type { IconButtonProps, IconButtonSize, IconButtonVariant } from './icon-button.types';

export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  variant = 'ghost',
  size = 'md',
  disabled,
  ...props
}) => {
  const { colors } = useTheme();

  const sizeValue: Record<IconButtonSize, number> = {
    sm: 32,
    md: ControlHeight.md,
    lg: 48,
  };

  const getBackgroundColor = (pressed: boolean): string => {
    if (disabled) return colors.backgroundMuted;

    const variantColors: Record<IconButtonVariant, { default: string; pressed: string }> = {
      default: { default: colors.backgroundSecondary, pressed: colors.backgroundMuted },
      primary: { default: colors.primary, pressed: colors.primaryHover },
      secondary: { default: colors.backgroundMuted, pressed: colors.backgroundMuted },
      outline: { default: colors.backgroundSecondary, pressed: colors.backgroundMuted },
      ghost: { default: 'transparent', pressed: colors.backgroundMuted },
    };

    return pressed ? variantColors[variant].pressed : variantColors[variant].default;
  };

  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        {
          width: sizeValue[size],
          height: sizeValue[size],
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

export type { IconButtonProps } from './icon-button.types';

