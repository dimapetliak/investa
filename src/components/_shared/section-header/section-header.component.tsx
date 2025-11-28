import { Spacing } from '@/theme/spacing';
import React from 'react';
import { View } from 'react-native';
import { Text } from '../text/text.component';
import { styles } from './section-header.styles';
import { SectionHeaderProps } from './section-header.types';

export const SectionHeader = ({
  title,
  subtitle,
  rightAction,
  style,
}: SectionHeaderProps) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.content}>
        <Text variant="h3">{title}</Text>
        {subtitle && (
          <Text variant="caption" color="muted" style={{ marginTop: Spacing.xs }}>
            {subtitle}
          </Text>
        )}
      </View>
      {rightAction && <View style={styles.rightAction}>{rightAction}</View>}
    </View>
  );
};

