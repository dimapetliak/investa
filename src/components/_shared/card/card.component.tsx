import { useTheme } from '@/contexts/theme-context';
import { Spacing, Opacity } from '@/theme';
import React from 'react';
import { Pressable, View } from 'react-native';
import { getCardStyles } from './card.styles';
import { CardProps } from './card.types';

export const Card = ({
  children,
  padding = 'lg',
  style,
  variant = 'default',
  onPress,
  ...props
}: CardProps) => {
  const { colors } = useTheme();
  const styles = getCardStyles(colors);

  const cardStyle = [
    styles.card,
    { padding: Spacing[padding] },
    styles[variant],
    style,
  ];

  if (onPress) {
    return (
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          ...cardStyle,
          pressed && { opacity: Opacity.hover },
        ]}
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
