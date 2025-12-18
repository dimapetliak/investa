import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, ViewProps } from 'react-native';

export interface LinearBackgroundProps extends ViewProps {
  colors?: string[];
  children: React.ReactNode;
}

export const LinearBackground: React.FC<LinearBackgroundProps> = ({
  colors = ['#4776E6', '#8E54E9'],
  children,
  style,
  ...props
}) => {
  return (
    <LinearGradient
      colors={colors}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={[styles.gradient, style]}
      {...props}
    >
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    width: '100%',
  },
});
