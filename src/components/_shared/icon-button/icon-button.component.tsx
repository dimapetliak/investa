import React from 'react';
import { Pressable } from 'react-native';
import { styles } from './icon-button.styles';
import { IconButtonProps } from './icon-button.types';

export const IconButton = ({
  icon,
  onPress,
  variant = 'default',
  size = 'md',
  disabled = false,
  style,
}: IconButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.button,
        styles[size],
        styles[variant],
        disabled && styles.disabled,
        pressed && !disabled && { opacity: 0.7 },
        style,
      ]}
    >
      {icon}
    </Pressable>
  );
};

