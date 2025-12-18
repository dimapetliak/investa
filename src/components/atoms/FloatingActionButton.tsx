import { useTheme } from '@/contexts/theme-context';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, PressableProps, StyleSheet } from 'react-native';

export interface FloatingActionButtonProps extends Omit<PressableProps, 'style'> {
  icon: keyof typeof Ionicons.glyphMap;
  position?: {
    bottom?: number;
    right?: number;
    top?: number;
    left?: number;
  };
}

export const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({
  icon,
  position = { bottom: 20, right: 20 },
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
      {...props}
    >
      <Ionicons name={icon} size={28} color="#FFFFFF" />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
});
