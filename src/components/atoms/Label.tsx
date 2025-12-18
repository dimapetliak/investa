import { Spacing } from '@/theme';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, TextProps } from './Text';

export interface LabelProps {
  text: string;
  required?: boolean;
  color?: TextProps['color'];
}

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

const styles = StyleSheet.create({
  container: {
    marginBottom: Spacing.xs,
  },
});
