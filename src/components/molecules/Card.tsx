import { useTheme } from '@/contexts/theme-context';
import { Opacity, Radius, Spacing } from '@/theme';
import React from 'react';
import { Pressable, StyleSheet, View, ViewProps } from 'react-native';

type CardPadding = keyof typeof Spacing;

export interface CardProps extends ViewProps {
  padding?: CardPadding;
  onPress?: () => void;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  padding = 'lg',
  onPress,
  children,
  style,
  ...props
}) => {
  const { colors } = useTheme();

  const cardStyle = [
    styles.card,
    {
      backgroundColor: colors.background,
      borderColor: colors.border,
      padding: Spacing[padding],
    },
    style,
  ];

  if (onPress) {
    return (
      <Pressable
        style={({ pressed }) => [
          ...cardStyle,
          pressed && { opacity: Opacity.hover },
        ]}
        onPress={onPress}
        {...props}
      >
        {children}
      </Pressable>
    );
  }

  return (
    <View style={cardStyle} {...props}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: Radius.lg,
    borderWidth: 1,
  },
});
