import { useTheme } from '@/contexts/theme-context';
import { Spacing } from '@/theme';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, ButtonProps } from '../atoms/Button';
import { Text } from '../atoms/Text';

export interface EmptyStateProps {
  icon?: keyof typeof Ionicons.glyphMap;
  title: string;
  message?: string;
  actionLabel?: string;
  onAction?: () => void;
  actionVariant?: ButtonProps['variant'];
}

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Spacing['2xl'],
    paddingVertical: Spacing['4xl'],
  },
  iconContainer: {
    width: 96,
    height: 96,
    borderRadius: 48,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.lg,
  },
  title: {
    textAlign: 'center',
    marginBottom: Spacing.sm,
  },
  message: {
    textAlign: 'center',
    marginBottom: Spacing.xl,
  },
  action: {
    minWidth: 160,
  },
});
