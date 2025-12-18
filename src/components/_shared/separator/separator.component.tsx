import { useTheme } from '@/contexts/theme-context';
import React from 'react';
import { View } from 'react-native';
import { SeparatorProps } from './separator.types';

export const Separator = ({
  orientation = 'horizontal',
  style
}: SeparatorProps) => {
  const { colors } = useTheme();

  return (
    <View
      style={[
        {
          backgroundColor: colors.border,
        },
        orientation === 'horizontal'
          ? { height: 1, width: '100%' }
          : { width: 1, height: '100%' },
        style,
      ]}
    />
  );
};
