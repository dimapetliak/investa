import { Spacing } from '@/theme/spacing';
import React from 'react';
import { View } from 'react-native';
import { Text } from '../text/text.component';
import { FormErrorProps } from './form-error.types';

export const FormError = ({
  message,
  style,
}: FormErrorProps) => {
  if (!message) return null;

  return (
    <View style={[{ marginTop: Spacing.xs }, style]}>
      <Text variant="caption" color="error">
        {message}
      </Text>
    </View>
  );
};

