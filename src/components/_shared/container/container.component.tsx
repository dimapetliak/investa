import React from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { containerStyles, getAlignmentStyle, getPaddingValue, getVerticalAlignmentStyle } from './container.styles';
import { ContainerProps } from './container.types';

export const Container = ({
  children,
  padding,
  paddingHorizontal,
  paddingVertical,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  noPadding = false,
  noPaddingTop = false,
  noPaddingBottom = false,
  noPaddingLeft = false,
  noPaddingRight = false,
  noPaddingHorizontal = false,
  noPaddingVertical = false,
  align,
  alignVertical,
  flex,
  flexDirection = 'column',
  gap,
  backgroundColor,
  safeArea = false,
  safeAreaTop = false,
  safeAreaBottom = false,
  style,
  ...props
}: ContainerProps) => {
  const insets = useSafeAreaInsets();

  const basePadding = noPadding ? 0 : getPaddingValue(padding);
  
  const paddingTopValue = noPaddingTop || noPaddingVertical
    ? 0
    : getPaddingValue(paddingTop ?? paddingVertical ?? padding);
  
  const paddingBottomValue = noPaddingBottom || noPaddingVertical
    ? 0
    : getPaddingValue(paddingBottom ?? paddingVertical ?? padding);
  
  const paddingLeftValue = noPaddingLeft || noPaddingHorizontal
    ? 0
    : getPaddingValue(paddingLeft ?? paddingHorizontal ?? padding);
  
  const paddingRightValue = noPaddingRight || noPaddingHorizontal
    ? 0
    : getPaddingValue(paddingRight ?? paddingHorizontal ?? padding);

  const safeAreaTopPadding = (safeArea || safeAreaTop) ? insets.top : 0;
  const safeAreaBottomPadding = (safeArea || safeAreaBottom) ? insets.bottom : 0;

  const gapValue = gap ? getPaddingValue(gap) : undefined;

  return (
    <View
      style={[
        containerStyles.base,
        {
          paddingTop: paddingTopValue + safeAreaTopPadding,
          paddingBottom: paddingBottomValue + safeAreaBottomPadding,
          paddingLeft: paddingLeftValue,
          paddingRight: paddingRightValue,
          ...getAlignmentStyle(align),
          ...getVerticalAlignmentStyle(alignVertical),
          flex,
          flexDirection,
          gap: gapValue,
          backgroundColor,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </View>
  );
};

