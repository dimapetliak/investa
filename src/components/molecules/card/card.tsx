import { useTheme } from '@/contexts/theme-context';
import { Opacity, Shadow, Spacing } from '@/theme';
import React from 'react';
import { Pressable, View } from 'react-native';
import { styles } from './card.styles';
import type { CardBackgroundVariant, CardPadding, CardProps } from './card.types';

const paddingMap: Record<CardPadding, number> = {
  none: 0,
  sm: Spacing.sm,
  md: Spacing.md,
  lg: Spacing.lg,
  '2xl': Spacing['2xl'],
};

export const Card: React.FC<CardProps> = ({
  padding = 'md',
  elevated = false,
  shadow = false,
  bordered = false,
  backgroundVariant = 'default',
  onPress,
  children,
  style,
  ...props
}) => {
  const { colors } = useTheme();

  const getBackgroundColor = (variant: CardBackgroundVariant) => {
    switch (variant) {
      case 'info':
        return `${colors.info}15`;
      case 'success':
        return `${colors.success}15`;
      case 'warning':
        return `${colors.warning}15`;
      case 'error':
        return `${colors.error}15`;
      default:
        return colors.backgroundSecondary;
    }
  };

  const cardStyle = [
    styles.card,
    {
      backgroundColor: getBackgroundColor(backgroundVariant),
      padding: paddingMap[padding],
    },
    bordered && {
      borderWidth: 1,
      borderColor: colors.border,
    },
    (elevated || shadow) && Shadow.sm,
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

export type { CardPadding, CardProps } from './card.types';


