import { Fonts } from '@/theme/fonts';
import React from 'react';
import { View } from 'react-native';
import { Text } from '../text/text.component';
import { styles } from './ticker-badge.styles';
import { TickerBadgeProps } from './ticker-badge.types';

export const TickerBadge = ({
  ticker,
  size = 'md',
  style,
}: TickerBadgeProps) => {
  return (
    <View style={[styles.badge, styles[size], style]}>
      <Text
        variant={size === 'sm' ? 'caption' : 'body'}
        style={[
          styles.ticker,
          { fontFamily: Fonts.semiBold },
        ]}
      >
        {ticker.toUpperCase()}
      </Text>
    </View>
  );
};

