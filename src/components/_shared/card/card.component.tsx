import { Spacing } from '@/theme/spacing';
import React from 'react';
import { View } from 'react-native';
import { styles } from './card.styles';
import { CardProps } from './card.types';

export const Card = ({
  children,
  padding = 'md',
  style,
  backgroundVariant = 'subtle',
  shadow = false,
  ...props
}: CardProps) => {
  return (
    <View
      style={[
        styles.card,
        { padding: Spacing[padding] },
        styles[backgroundVariant],
        shadow && styles.shadow,
        style,
      ]}
      {...props}
    >
      {children}
    </View>
  );
};

