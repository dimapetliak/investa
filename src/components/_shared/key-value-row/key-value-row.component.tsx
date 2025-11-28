import React from 'react';
import { View } from 'react-native';
import { Text } from '../text/text.component';
import { styles } from './key-value-row.styles';
import { KeyValueRowProps } from './key-value-row.types';

export const KeyValueRow = ({
  label,
  value,
  valueColor,
  align = 'space-between',
  style,
}: KeyValueRowProps) => {
  return (
    <View style={[styles.container, style]}>
      <Text variant="body" color="muted">
        {label}
      </Text>
      <Text
        variant="body"
        color={valueColor || 'default'}
        style={[
          styles.value,
          align === 'flex-end' && styles.valueRight,
        ]}
      >
        {value}
      </Text>
    </View>
  );
};

