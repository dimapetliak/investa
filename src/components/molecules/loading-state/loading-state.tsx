import { useTheme } from '@/contexts/theme-context';
import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { Text } from '../../atoms/text';
import { styles } from './loading-state.styles';
import type { LoadingStateProps } from './loading-state.types';

export const LoadingState: React.FC<LoadingStateProps> = ({
  message = 'Loading...',
  size = 'large',
  style,
  ...props
}) => {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, style]} {...props}>
      <ActivityIndicator size={size} color={colors.primary} />
      {message && (
        <Text variant="body" color="muted" style={styles.message}>
          {message}
        </Text>
      )}
    </View>
  );
};

export type { LoadingStateProps } from './loading-state.types';

