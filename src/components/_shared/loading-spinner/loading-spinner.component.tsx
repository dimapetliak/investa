import { Colors } from '@/theme/colors';
import { Spacing } from '@/theme/spacing';
import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { Text } from '../text/text.component';
import { styles } from './loading-spinner.styles';
import { LoadingSpinnerProps } from './loading-spinner.types';

export const LoadingSpinner = ({
  message,
  size = 'small',
  color = Colors.primary,
  style,
}: LoadingSpinnerProps) => {
  return (
    <View style={[styles.container, style]}>
      <ActivityIndicator size={size} color={color} />
      {message && (
        <Text variant="body" color="muted" style={{ marginTop: Spacing.md }}>
          {message}
        </Text>
      )}
    </View>
  );
};

