import { Colors } from '@/theme/colors';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable } from 'react-native';
import { styles } from './floating-action-button.styles';
import { FloatingActionButtonProps } from './floating-action-button.types';

export const FloatingActionButton = ({
  onPress,
  icon = 'add',
  size = 'md',
  disabled = false,
  style,
}: FloatingActionButtonProps) => {
  const iconSize = size === 'sm' ? 24 : size === 'lg' ? 32 : 28;

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.button,
        styles[size],
        disabled && styles.disabled,
        pressed && !disabled && { opacity: 0.8 },
        style,
      ]}
    >
      <Ionicons name={icon} size={iconSize} color={Colors.white} />
    </Pressable>
  );
};

