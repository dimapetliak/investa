import { Spacing } from '@/theme';
import React from 'react';
import { View } from 'react-native';
import { styles } from './container.styles';
import type { ContainerProps } from './container.types';

export const Container: React.FC<ContainerProps> = ({
  padding = 'md',
  children,
  style,
  ...props
}) => {
  return (
    <View
      style={[
        styles.container,
        {
          padding: Spacing[padding],
        },
        style,
      ]}
      {...props}
    >
      {children}
    </View>
  );
};

export type { ContainerProps } from './container.types';

