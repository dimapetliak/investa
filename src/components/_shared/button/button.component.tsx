import { Fonts } from '@/theme/fonts';
import React from 'react';
import { ActivityIndicator, Pressable } from 'react-native';
import { Text } from '../text/text.component';
import { buttonStyles, textColors, textSizes } from './button.styles';
import { ButtonProps } from './button.types';

export const Button = ({
  variant = 'primary',
  size = 'md',
  onPress,
  disabled = false,
  loading = false,
  fullWidth = false,
  children,
  style,
  textStyle,
}: ButtonProps) => {
  const isDisabled = disabled || loading;

  return (
    <Pressable
      onPress={onPress}
      disabled={isDisabled}
      style={({ pressed }) => [
        buttonStyles.base,
        buttonStyles[variant],
        buttonStyles[size],
        isDisabled && buttonStyles.disabled,
        pressed && !isDisabled && { opacity: 0.8 },
        fullWidth && { width: '100%' },
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator
          size="small"
          color={textStyle?.color || textColors[variant]}
        />
      ) : (
        <Text
          style={[
            {
              color: textColors[variant],
              fontSize: textSizes[size],
              fontFamily: Fonts.semiBold,
            },
            textStyle,
          ]}
        >
          {children}
        </Text>
      )}
    </Pressable>
  );
};

