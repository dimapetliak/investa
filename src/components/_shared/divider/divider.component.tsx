import { Colors } from '@/theme/colors';
import { Spacing } from '@/theme/spacing';
import React from 'react';
import { View } from 'react-native';
import { styles } from './divider.styles';
import { DividerProps } from './divider.types';

export const Divider = ({
  vertical = false,
  spacing = 'md',
  color = Colors.neutral200,
  style,
}: DividerProps) => {
  return (
    <View
      style={[
        vertical ? styles.vertical : styles.horizontal,
        {
          backgroundColor: color,
          [vertical ? 'width' : 'height']: 1,
          marginVertical: vertical ? 0 : Spacing[spacing],
          marginHorizontal: vertical ? Spacing[spacing] : 0,
        },
        style,
      ]}
    />
  );
};

