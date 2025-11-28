import { Colors } from '@/theme/colors';
import { Spacing } from '@/theme/spacing';
import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import { Text } from '../text/text.component';
import { styles } from './input.styles';
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
      <TextInput
        {...props}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholderTextColor={Colors.neutral400}
        style={[
          styles.input,
          isFocused && styles.inputFocused,
          error && styles.inputError,
          style,
        ]}
      />
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

