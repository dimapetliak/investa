import { useTheme } from '@/contexts/theme-context';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View } from 'react-native';
import { Button } from '../../atoms/button';
import { Text } from '../../atoms/text';
import { styles } from './error-state.styles';
import type { ErrorStateProps } from './error-state.types';

export const ErrorState: React.FC<ErrorStateProps> = ({
  title = 'Something went wrong',
  message,
  onRetry,
  retryLabel = 'Try Again',
  style,
  ...props
}) => {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, style]} {...props}>
      <View style={[styles.iconContainer, { backgroundColor: colors.errorLight }]}>
        <Ionicons name="alert-circle-outline" size={48} color={colors.error} />
      </View>

      <Text variant="h3" style={styles.title}>
        {title}
      </Text>

      <Text variant="body" color="muted" style={styles.message}>
        {message}
      </Text>

      {onRetry && (
        <Button variant="primary" onPress={onRetry} style={styles.button}>
          {retryLabel}
        </Button>
      )}
    </View>
  );
};

export type { ErrorStateProps } from './error-state.types';

