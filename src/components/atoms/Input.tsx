import { useTheme } from '@/contexts/theme-context';
import { ControlHeight, Radius, Typography } from '@/theme/tokens';
import { Spacing } from '@/theme';
import React, { useState } from 'react';
import { StyleSheet, TextInput, TextInputProps, View } from 'react-native';
import { Text } from './Text';

export interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  hint?: string;
  leftElement?: React.ReactNode;
  rightElement?: React.ReactNode;
}

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
            backgroundColor: colors.background,
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
            leftElement && styles.inputWithLeftElement,
            rightElement && styles.inputWithRightElement,
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

const styles = StyleSheet.create({
  container: {
    marginBottom: Spacing.md,
  },
  label: {
    marginBottom: Spacing.xs,
  },
  inputWrapper: {
    height: ControlHeight.md,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: Radius.md,
    borderWidth: 1,
    paddingHorizontal: Spacing.md,
  },
  input: {
    flex: 1,
    fontSize: Typography.fontSize.base,
    lineHeight: Typography.lineHeight.base,
  },
  inputWithLeftElement: {
    marginLeft: Spacing.sm,
  },
  inputWithRightElement: {
    marginRight: Spacing.sm,
  },
  leftElement: {
    marginRight: 0,
  },
  rightElement: {
    marginLeft: 0,
  },
  hint: {
    marginTop: Spacing.xs,
  },
  error: {
    marginTop: Spacing.xs,
  },
});
