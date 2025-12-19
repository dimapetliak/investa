import { useTheme } from '@/contexts/theme-context';
import { Typography } from '@/theme/tokens';
import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import { Text } from '../text';
import { styles } from './input.styles';
import type { InputProps } from './input.types';

export const Input: React.FC<InputProps> = ({
  label,
  error,
  hint,
  leftElement,
  rightElement,
  style,
  onFocus,
  onBlur,
  ...props
}) => {
  const { colors } = useTheme();
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = (e: any) => {
    setIsFocused(true);
    onFocus?.(e);
  };

  const handleBlur = (e: any) => {
    setIsFocused(false);
    onBlur?.(e);
  };

  return (
    <View style={styles.container}>
      {label && (
        <Text variant="caption" color="muted" style={styles.label}>
          {label}
        </Text>
      )}

      <View
        style={[
          styles.inputWrapper,
          {
            backgroundColor: colors.backgroundSecondary,
            borderColor: error ? colors.error : isFocused ? colors.primary : colors.border,
          },
        ]}
      >
        {leftElement && <View style={styles.leftElement}>{leftElement}</View>}

        <TextInput
          style={[
            styles.input,
            {
              color: colors.foreground,
              fontFamily: Typography.fontWeight.regular,
            },
            leftElement ? styles.inputWithLeftElement : undefined,
            rightElement ? styles.inputWithRightElement : undefined,
            style,
          ]}
          placeholderTextColor={colors.foregroundMuted}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
        />

        {rightElement && <View style={styles.rightElement}>{rightElement}</View>}
      </View>

      {hint && !error && (
        <Text variant="small" color="muted" style={styles.hint}>
          {hint}
        </Text>
      )}

      {error && (
        <Text variant="small" color="error" style={styles.error}>
          {error}
        </Text>
      )}
    </View>
  );
};

export type { InputProps } from './input.types';

