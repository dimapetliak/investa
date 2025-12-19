import { useTheme } from '@/contexts/theme-context';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from '../text';
import type { ChangeBadgeProps, ChangeBadgeSize } from './change-badge.types';

const SIZE_CONFIG: Record<ChangeBadgeSize, { iconSize: number; paddingH: number; paddingV: number }> = {
  sm: { iconSize: 10, paddingH: 6, paddingV: 2 },
  md: { iconSize: 12, paddingH: 8, paddingV: 4 },
};

export const ChangeBadge: React.FC<ChangeBadgeProps> = ({
  value,
  percentValue,
  format = 'percent',
  currency = '$',
  size = 'sm',
  showIcon = true,
  style,
}) => {
  const { colors } = useTheme();
  const sizeConfig = SIZE_CONFIG[size];
  
  // Determine color based on value
  const isPositive = value > 0;
  const isNegative = value < 0;
  const badgeColor = isPositive ? colors.success : isNegative ? colors.error : colors.foregroundMuted;
  
  // Format the display value
  const formatValue = (val: number, type: 'currency' | 'percent'): string => {
    const sign = val > 0 ? '+' : '';
    if (type === 'currency') {
      return `${sign}${currency}${Math.abs(val).toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}`;
    }
    return `${sign}${val.toFixed(2)}%`;
  };

  // Build display text based on format
  let displayText = '';
  if (format === 'currency') {
    displayText = formatValue(value, 'currency');
  } else if (format === 'percent') {
    displayText = formatValue(percentValue ?? value, 'percent');
  } else if (format === 'both') {
    displayText = `${formatValue(value, 'currency')} (${formatValue(percentValue ?? 0, 'percent')})`;
  }

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: `${badgeColor}15`,
          paddingHorizontal: sizeConfig.paddingH,
          paddingVertical: sizeConfig.paddingV,
        },
        style,
      ]}
    >
      {showIcon && (
        <Ionicons
          name={isPositive ? 'arrow-up' : isNegative ? 'arrow-down' : 'remove'}
          size={sizeConfig.iconSize}
          color={badgeColor}
          style={styles.icon}
        />
      )}
      <Text
        variant="small"
        weight="medium"
        style={{ color: badgeColor }}
      >
        {displayText}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
  },
  icon: {
    marginRight: 2,
  },
});

export type { ChangeBadgeProps, ChangeBadgeFormat, ChangeBadgeSize } from './change-badge.types';

