import React from 'react';
import { View } from 'react-native';
import { Text } from '../text/text.component';
import { styles } from './label.styles';
import { LabelProps } from './label.types';

export const Label = ({
  text,
  required = false,
  style,
}: LabelProps) => {
  return (
    <View style={[styles.container, style]}>
      <Text variant="caption" color="muted">
        {text}
        {required && <Text variant="caption" color="error"> *</Text>}
      </Text>
    </View>
  );
};

