import { useTheme } from '@/contexts/theme-context';
import { Typography } from '@/theme';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from '../../atoms/text';
import type { ValueWithChangeProps, ValueWithChangeSize } from './value-with-change.types';

export const ValueWithChange: React.FC<ValueWithChangeProps> = ({
  value,
  change,
  changePercent,
  size = 'md',
  label,
  style,
  ...props
}) => {
  const { colors } = useTheme();
  const hasChange = change !== undefined && change !== null;
  const isPositive = hasChange ? change >= 0 : false;
  const isNegative = hasChange ? change < 0 : false;
  
  // Use theme colors for P&L
  const changeColor = isPositive ? colors.success : isNegative ? colors.error : colors.foregroundMuted;

  // Normalize 'large' to 'lg' for backwards compatibility
  const normalizedSize: ValueWithChangeSize = size === 'large' ? 'lg' : size;

  const valueSizes: Record<ValueWithChangeSize, { fontSize: number; lineHeight: number }> = {
    sm: { fontSize: Typography.fontSize.xl, lineHeight: Typography.lineHeight.xl },
    md: { fontSize: Typography.fontSize['2xl'], lineHeight: Typography.lineHeight['2xl'] },
    lg: { fontSize: Typography.fontSize['4xl'], lineHeight: Typography.lineHeight['4xl'] },
  };

  const formatChange = (val: number) => {
    const prefix = val >= 0 ? '+' : '';
    return `${prefix}${val.toFixed(2)}`;
  };

  return (
    <View style={[styles.container, style]} {...props}>
      {label && (
        <Text variant="caption" color="muted" style={styles.label}>
          {label}
        </Text>
      )}

      <Text
        weight="bold"
        style={[styles.value, valueSizes[normalizedSize], { color: colors.foreground }]}
      >
        {value}
      </Text>

      {hasChange && (
        <View style={[styles.changeContainer, { backgroundColor: `${changeColor}15` }]}>
          <Ionicons
            name={isPositive ? 'trending-up' : isNegative ? 'trending-down' : 'remove'}
            size={16}
            color={changeColor}
          />
          <Text
            variant="body"
            weight="semiBold"
            style={{ color: changeColor, marginLeft: 4 }}
          >
            {formatChange(change)}{changePercent !== undefined ? ` (${formatChange(changePercent)}%)` : ''}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  label: {
    marginBottom: 4,
  },
  value: {},
  changeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    marginTop: 8,
    alignSelf: 'flex-start',
  },
});

export type { ValueWithChangeData, ValueWithChangeProps, ValueWithChangeSize } from './value-with-change.types';
