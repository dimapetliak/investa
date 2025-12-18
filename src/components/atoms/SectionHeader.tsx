import { Spacing } from '@/theme';
import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import { Text } from './Text';

export interface SectionHeaderProps extends ViewProps {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  action,
  style,
  ...props
}) => {
  return (
    <View style={[styles.container, style]} {...props}>
      <View style={styles.textContainer}>
        <Text variant="h3" weight="semibold">
          {title}
        </Text>
        {subtitle && (
          <Text variant="caption" color="muted" style={styles.subtitle}>
            {subtitle}
          </Text>
        )}
      </View>
      {action && <View style={styles.action}>{action}</View>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.md,
  },
  textContainer: {
    flex: 1,
  },
  subtitle: {
    marginTop: 4,
  },
  action: {
    marginLeft: Spacing.md,
  },
});
