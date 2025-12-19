import { useTheme } from '@/contexts/theme-context';
import { Spacing } from '@/theme/spacing';
import React from 'react';
import { View } from 'react-native';
import { styles } from './divider.styles';
import type { DividerProps } from './divider.types';

export const Divider: React.FC<DividerProps> = ({
  spacing = 'md',
  style,
  ...props
}) => {
  const { colors } = useTheme();

  return (
    <View
      style={[
        styles.divider,
        {
          backgroundColor: colors.border,
          marginVertical: Spacing[spacing],
        },
        style,
      ]}
      {...props}
    />
  );
};

export type { DividerProps } from './divider.types';

