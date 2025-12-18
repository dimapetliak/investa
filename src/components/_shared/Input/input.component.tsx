import { useTheme } from '@/contexts/theme-context';
import { Spacing } from '@/theme';
import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import { Text } from '../text/text.component';
import { getInputStyles } from './input.styles';
import { InputProps } from './input.types';

export const Input = ({
  label,
  error,
  onFocus,
  onBlur,
  style,
  hint,
  leftIcon,
  rightIcon,
  ...props
}: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const { colors } = useTheme();
  const styles = getInputStyles(colors);

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
        <Text
          variant="caption"
          color="muted"
          style={{ marginBottom: Spacing.xs }}
        >
          {label}
        </Text>
      )}
      <View style={styles.inputWrapper}>
        {leftIcon && (
          <View style={styles.leftIconContainer}>
            {leftIcon}
          </View>
        )}
        <TextInput
          {...props}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholderTextColor={colors.foregroundMuted}
          style={[
            styles.input,
            leftIcon ? styles.inputWithLeftIcon : undefined,
            rightIcon ? styles.inputWithRightIcon : undefined,
            isFocused ? styles.inputFocused : undefined,
            error ? styles.inputError : undefined,
            style,
          ]}
        />
        {rightIcon && (
          <View style={styles.rightIconContainer}>
            {rightIcon}
          </View>
        )}
      </View>
      {hint && !error && (
        <Text
          variant="caption"
          color="muted"
          style={{ marginTop: Spacing.xs }}
        >
          {hint}
        </Text>
      )}
      {error && (
        <Text
          variant="caption"
          color="error"
          style={{ marginTop: Spacing.xs }}
        >
          {error}
        </Text>
      )}
    </View>
  );
};

