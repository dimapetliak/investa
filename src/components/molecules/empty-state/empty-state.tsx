import { useTheme } from '@/contexts/theme-context';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View } from 'react-native';
import { Button } from '../../atoms/button';
import { Text } from '../../atoms/text';
import { styles } from './empty-state.styles';
import type { EmptyStateProps } from './empty-state.types';

export const EmptyState: React.FC<EmptyStateProps> = ({
  icon = 'information-circle-outline',
  title,
  message,
  actionLabel,
  onAction,
  actionVariant = 'primary',
}) => {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <View style={[styles.iconContainer, { backgroundColor: colors.backgroundMuted }]}>
        <Ionicons name={icon} size={48} color={colors.foregroundMuted} />
      </View>

      <Text variant="h3" style={styles.title}>
        {title}
      </Text>

      {message && (
        <Text variant="body" color="muted" style={styles.message}>
          {message}
        </Text>
      )}

      {actionLabel && onAction && (
        <Button
          variant={actionVariant}
          size="md"
          onPress={onAction}
          style={styles.action}
        >
          {actionLabel}
        </Button>
      )}
    </View>
  );
};

export type { EmptyStateProps } from './empty-state.types';

