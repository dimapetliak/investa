import React from 'react';
import { View } from 'react-native';
import { Text } from '../text';
import { styles } from './label.styles';
import type { LabelProps } from './label.types';

export const Label: React.FC<LabelProps> = ({ text, required, color = 'default' }) => {
  return (
    <View style={styles.container}>
      <Text variant="caption" color={color} weight="medium">
        {text}
        {required && <Text variant="caption" color="error"> *</Text>}
      </Text>
    </View>
  );
};

export type { LabelProps } from './label.types';

