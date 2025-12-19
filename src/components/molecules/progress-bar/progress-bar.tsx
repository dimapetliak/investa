import { useTheme } from '@/contexts/theme-context';
import React from 'react';
import { View } from 'react-native';
import { Text } from '../../atoms/text';
import { styles } from './progress-bar.styles';
import type { ProgressBarProps } from './progress-bar.types';

export const ProgressBar: React.FC<ProgressBarProps> = ({
  current,
  target,
  color,
  showLabels = true,
  formatValue = (v) => `$${v.toLocaleString()}`,
  style,
  ...props
}) => {
  const { colors } = useTheme();
  const progressColor = color || colors.primary;
  const percentage = Math.min((current / target) * 100, 100);

  return (
    <View style={[styles.container, style]} {...props}>
      {showLabels && (
        <View style={styles.labels}>
          <Text variant="body" weight="semiBold">
            {formatValue(current)}
          </Text>
          <Text variant="caption" color="muted">
            of {formatValue(target)}
          </Text>
        </View>
      )}

      <View style={[styles.track, { backgroundColor: colors.backgroundMuted }]}>
        <View
          style={[
            styles.progress,
            {
              backgroundColor: progressColor,
              width: `${percentage}%`,
            },
          ]}
        />
      </View>

      {showLabels && (
        <Text variant="caption" color="muted" style={styles.percentage}>
          {percentage.toFixed(0)}% complete
        </Text>
      )}
    </View>
  );
};

export type { ProgressBarProps } from './progress-bar.types';

