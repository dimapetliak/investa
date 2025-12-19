import { useTheme } from '@/contexts/theme-context';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable } from 'react-native';
import { styles } from './floating-action-button.styles';
import type { FloatingActionButtonProps } from './floating-action-button.types';

export const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({
  icon,
  position = { bottom: 20, right: 20 },
  accessibilityLabel,
  accessibilityHint,
  ...props
}) => {
  const { colors } = useTheme();

  return (
    <Pressable
      style={({ pressed }) => [
        styles.fab,
        {
          backgroundColor: colors.primary,
          opacity: pressed ? 0.8 : 1,
          ...position,
        },
      ]}
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint}
      accessibilityRole="button"
      {...props}
    >
      <Ionicons name={icon} size={28} color={colors.primaryForeground} />
    </Pressable>
  );
};

export type { FloatingActionButtonProps } from './floating-action-button.types';

