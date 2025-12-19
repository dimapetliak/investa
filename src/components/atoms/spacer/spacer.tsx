import { Spacing } from '@/theme';
import React from 'react';
import { View } from 'react-native';
import type { SpacerProps } from './spacer.types';

export const Spacer: React.FC<SpacerProps> = ({
  size = 'md',
  horizontal = false,
  style,
  ...props
}) => {
  const spacingValue = Spacing[size];

  return (
    <View
      style={[
        {
          [horizontal ? 'width' : 'height']: spacingValue,
        },
        style,
      ]}
      {...props}
    />
  );
};


