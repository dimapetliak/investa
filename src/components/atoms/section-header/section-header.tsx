import React from 'react';
import { View } from 'react-native';
import { Text } from '../text';
import { styles } from './section-header.styles';
import type { SectionHeaderProps } from './section-header.types';

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  action,
  rightAction,
  style,
  ...props
}) => {
  const actionContent = action || rightAction;

  return (
    <View style={[styles.container, style]} {...props}>
      <View style={styles.textContainer}>
        <Text variant="h3" weight="semiBold">
          {title}
        </Text>
        {subtitle && (
          <Text variant="caption" color="muted" style={styles.subtitle}>
            {subtitle}
          </Text>
        )}
      </View>
      {actionContent && <View style={styles.action}>{actionContent}</View>}
    </View>
  );
};

export type { SectionHeaderProps } from './section-header.types';

