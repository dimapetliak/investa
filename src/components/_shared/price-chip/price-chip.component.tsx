import { Colors } from '@/theme/colors';
import { Fonts } from '@/theme/fonts';
import React from 'react';
import { View } from 'react-native';
import { Text } from '../text/text.component';
import { styles } from './price-chip.styles';
import { PriceChipProps } from './price-chip.types';

export const PriceChip = ({
  price,
  timestamp,
  change,
  changePercent,
  style,
}: PriceChipProps) => {
  const isPositive = change >= 0;

  return (
    <View style={[styles.container, style]}>
      <Text
        variant="body"
        style={[
          styles.price,
          { fontFamily: Fonts.semiBold },
        ]}
      >
        ${price.toFixed(2)}
      </Text>
      {change !== undefined && changePercent !== undefined && (
        <Text
          variant="caption"
          style={[
            styles.change,
            { color: isPositive ? Colors.success : Colors.error },
          ]}
        >
          {isPositive ? '+' : ''}{changePercent.toFixed(2)}%
        </Text>
      )}
      {timestamp && (
        <Text variant="caption" color="muted" style={styles.timestamp}>
          {timestamp}
        </Text>
      )}
    </View>
  );
};

