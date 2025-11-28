import { Colors } from '@/theme/colors';
import { Spacing } from '@/theme/spacing';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View } from 'react-native';
import { Button } from '../button';
import { Text } from '../text/text.component';
import { styles } from './error-state.styles';
import { ErrorStateProps } from './error-state.types';

export const ErrorState = ({
  title = 'Something went wrong',
  message,
  retryLabel = 'Try Again',
  onRetry,
  style,
}: ErrorStateProps) => {
  return (
    <View style={[styles.container, style]}>
      <Ionicons name="alert-circle-outline" size={64} color={Colors.error} />
      <Text variant="h3" style={{ marginTop: Spacing.md, marginBottom: Spacing.sm }}>
        {title}
      </Text>
      {message && (
        <Text variant="body" color="muted" style={{ textAlign: 'center', marginBottom: Spacing.lg }}>
          {message}
        </Text>
      )}
      {onRetry && (
        <Button variant="primary" onPress={onRetry}>
          {retryLabel}
        </Button>
      )}
    </View>
  );
};

