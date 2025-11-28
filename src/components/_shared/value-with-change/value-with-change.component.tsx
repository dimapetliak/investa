import { Colors } from '@/theme/colors';
import { Fonts } from '@/theme/fonts';
import React from 'react';
import { View } from 'react-native';
import { Text } from '../text/text.component';
import { styles } from './value-with-change.styles';
import { ValueWithChangeProps } from './value-with-change.types';

export const ValueWithChange = ({
  value,
  change,
  changePercent,
  size = 'md',
  showSign = true,
  style,
}: ValueWithChangeProps) => {
  const isPositive = change >= 0;
  const changeColor = isPositive ? Colors.success : Colors.error;
  const sign = showSign && change > 0 ? '+' : '';

  return (
    <View style={[styles.container, style]}>
      <Text
        variant={size === 'lg' ? 'h2' : size === 'sm' ? 'caption' : 'body'}
        style={styles.value}
      >
        {value}
      </Text>
      <View style={styles.changeContainer}>
        <Text
          variant="caption"
          style={[
            styles.change,
            { color: changeColor, fontFamily: Fonts.semiBold },
          ]}
        >
          {sign}{changePercent}%
        </Text>
        {change !== undefined && (
          <Text
            variant="caption"
            style={[styles.change, { color: changeColor }]}
          >
            {' '}({sign}{change})
          </Text>
        )}
      </View>
    </View>
  );
};

