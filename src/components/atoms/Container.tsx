import { Spacing } from '@/theme';
import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';

export interface ContainerProps extends ViewProps {
  padding?: keyof typeof Spacing;
  children: React.ReactNode;
}

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

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});
