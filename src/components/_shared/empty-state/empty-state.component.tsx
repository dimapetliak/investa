import { Colors } from '@/theme/colors';
import { Spacing } from '@/theme/spacing';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View } from 'react-native';
import { Button } from '../button';
import { Text } from '../text/text.component';
import { styles } from './empty-state.styles';
import { EmptyStateProps } from './empty-state.types';

export const EmptyState = ({
  icon = 'document-outline',
  title,
  message,
  actionLabel,
  onAction,
  style,
}: EmptyStateProps) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.iconContainer}>
        <Ionicons name={icon} size={32} color={Colors.neutral400} />
      </View>
 
      {title && (
        <Text variant="h3" style={{ marginTop: Spacing.md, marginBottom: Spacing.sm }}>
          {title}
        </Text>
      )}
      {message && (
        <Text variant="body" color="muted" style={{ textAlign: 'center', marginBottom: Spacing.lg }}>
          {message}
        </Text>
      )}
      {actionLabel && onAction && (
        <Button variant="primary" onPress={onAction}>
          {actionLabel}
        </Button>
      )}
    </View>
  );
};

