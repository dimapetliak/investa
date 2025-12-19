import { useTheme } from '@/contexts/theme-context';
import React from 'react';
import { View } from 'react-native';
import { Text } from '../../atoms/text';
import { styles } from './key-value-row.styles';
import type { KeyValueRowColor, KeyValueRowProps } from './key-value-row.types';

const namedColors = ['default', 'positive', 'negative', 'muted', 'primary', 'error', 'success'];

export const KeyValueRow: React.FC<KeyValueRowProps> = ({
  label,
  value,
  valueColor = 'default',
  style,
  ...props
}) => {
  const { colors } = useTheme();

  const valueColorMap: Record<KeyValueRowColor, string> = {
    default: colors.foreground,
    positive: colors.success,
    negative: colors.error,
    muted: colors.foregroundMuted,
    primary: colors.primary,
    error: colors.error,
    success: colors.success,
  };

  // Handle both named colors and raw color strings
  const resolvedColor = typeof valueColor === 'string' && namedColors.includes(valueColor)
    ? valueColorMap[valueColor as KeyValueRowColor]
    : valueColor || colors.foreground;

  return (
    <View style={[styles.container, style]} {...props}>
      <Text variant="body" color="muted">
        {label}
      </Text>
      {typeof value === 'string' ? (
        <Text
          variant="body"
          weight="medium"
          style={{ color: resolvedColor }}
        >
          {value}
        </Text>
      ) : (
        value
      )}
    </View>
  );
};

export type { KeyValueRowColor, KeyValueRowProps } from './key-value-row.types';

