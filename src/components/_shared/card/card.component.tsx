import { Spacing } from '@/theme/spacing';
import React from 'react';
import { Pressable, View } from 'react-native';
import { styles } from './card.styles';
import { CardProps } from './card.types';

export const Card = ({
  children,
  padding = 'md',
  style,
  backgroundVariant = 'subtle',
  shadow = false,
  onPress,
  ...props
}: CardProps) => {
  const cardStyle = [
    styles.card,
    { padding: Spacing[padding] },
    styles[backgroundVariant],
    shadow && styles.shadow,
    style,
  ];

  if (onPress) {
    return (
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          ...cardStyle,
          pressed && { opacity: 0.8 },
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

