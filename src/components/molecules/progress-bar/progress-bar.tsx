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
  showLabels,
  showValueLabels,
  showPercentage,
  formatValue = (v) => `$${v.toLocaleString()}`,
  style,
  ...props
}) => {
  const { colors } = useTheme();
  const progressColor = color || colors.primary;
  const percentage = Math.min((current / target) * 100, 100);

  // Backward compatibility: showLabels enables both value labels and percentage
  const shouldShowValueLabels = showValueLabels ?? showLabels ?? false;
  const shouldShowPercentage = showPercentage ?? showLabels ?? false;

  return (
    <View style={[styles.container, style]} {...props}>
      {shouldShowValueLabels && (
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

      {shouldShowPercentage && (
        <Text variant="caption" color="muted" style={styles.percentage}>
          {percentage.toFixed(0)}% complete
        </Text>
      )}
    </View>
  );
};

export type { ProgressBarProps } from './progress-bar.types';

