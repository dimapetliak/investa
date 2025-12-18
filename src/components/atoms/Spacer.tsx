import { Spacing } from '@/theme';
import React from 'react';
import { View, ViewProps } from 'react-native';

type SpacerSize = keyof typeof Spacing;

export interface SpacerProps extends ViewProps {
  size?: SpacerSize;
  horizontal?: boolean;
}

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
