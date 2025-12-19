import { useTheme } from '@/contexts/theme-context';
import { Shadow } from '@/theme';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, View } from 'react-native';
import { Text } from '../../atoms/text';
import { styles } from './metric-card.styles';
import type { MetricCardProps } from './metric-card.types';

export const MetricCard: React.FC<MetricCardProps> = ({
  label,
  value,
  change,
  icon,
  onPress,
}) => {
  const { colors } = useTheme();
  const changeColor = change?.isPositive ? colors.success : colors.error;

  const content = (
    <>
      <View style={styles.header}>
        {icon && <View style={styles.iconContainer}>{icon}</View>}
        <Text variant="caption" color="muted" numberOfLines={1}>
          {label}
        </Text>
      </View>

      <Text variant="h2" weight="bold" style={styles.value}>
        {value}
      </Text>

      {change && (
        <View style={[styles.changeContainer, { backgroundColor: `${changeColor}15` }]}>
          <Ionicons
            name={change.isPositive ? 'trending-up' : 'trending-down'}
            size={14}
            color={changeColor}
          />
          <Text
            variant="caption"
            weight="medium"
            style={{ color: changeColor, marginLeft: 4 }}
          >
            {change.isPositive ? '+' : ''}{change.value}
          </Text>
        </View>
      )}
    </>
  );

  const cardStyle = [
    styles.card,
    {
      backgroundColor: colors.backgroundSecondary,
      borderColor: colors.border,
    },
    Shadow.sm,
  ];

  if (onPress) {
    return (
      <Pressable
        style={({ pressed }) => [...cardStyle, pressed && { opacity: 0.8 }]}
        onPress={onPress}
      >
        {content}
      </Pressable>
    );
  }

  return <View style={cardStyle}>{content}</View>;
};

export type { MetricCardChange, MetricCardProps } from './metric-card.types';

