import { Spacing } from '@/theme/spacing';
import React from 'react';
import { View } from 'react-native';
import { Text } from '../text/text.component';
import { HelperTextProps } from './helper-text.types';

export const HelperText = ({
  text,
  type = 'default',
  style,
}: HelperTextProps) => {
  if (!text) return null;

  return (
    <View style={[{ marginTop: Spacing.xs }, style]}>
      <Text variant="caption" color={type === 'error' ? 'error' : 'muted'}>
        {text}
      </Text>
    </View>
  );
};

