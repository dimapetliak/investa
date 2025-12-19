import { useTheme } from '@/contexts/theme-context';
import { Typography } from '@/theme/tokens';
import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import { Text } from '../text';
import { styles } from './number-input.styles';
import type { NumberInputProps } from './number-input.types';

export const NumberInput: React.FC<NumberInputProps> = ({
  label,
  value,
  onChangeValue,
  error,
  hint,
  prefix,
  suffix,
  placeholder,
  ...props
}) => {
  const { colors } = useTheme();
  const [isFocused, setIsFocused] = useState(false);

  const handleChangeText = (text: string) => {
    // Allow only numbers, decimal point, and minus sign
    const sanitized = text.replace(/[^0-9.-]/g, '');
    onChangeValue(sanitized);
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
        {prefix && (
          <Text variant="body" color="muted" style={styles.prefix}>
            {prefix}
          </Text>
        )}

        <TextInput
          style={[
            styles.input,
            {
              color: colors.foreground,
              fontFamily: Typography.fontWeight.regular,
            },
          ]}
          value={value}
          onChangeText={handleChangeText}
          placeholderTextColor={colors.foregroundMuted}
          placeholder={placeholder}
          keyboardType="decimal-pad"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />

        {suffix && (
          <Text variant="body" color="muted" style={styles.suffix}>
            {suffix}
          </Text>
        )}
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

