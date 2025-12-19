import { Spacing } from '@/theme/spacing';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { IconButton } from '../../atoms/icon-button';
import { Text } from '../../atoms/text';
import type { ScreenHeaderProps } from './screen-header.types';

export const ScreenHeader: React.FC<ScreenHeaderProps> = ({
  title,
  showBack = true,
  onBack,
  rightAction,
  style,
}) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.leftSection}>
        {showBack && onBack && (
          <IconButton
            icon={<Ionicons name="arrow-back" size={24} />}
            onPress={onBack}
            variant="ghost"
          />
        )}
        <Text variant="h2" style={showBack && onBack ? styles.titleWithBack : undefined}>
          {title}
        </Text>
      </View>
      
      {rightAction && (
        <View style={styles.rightSection}>
          {rightAction}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: Spacing.lg,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  titleWithBack: {
    marginLeft: Spacing.sm,
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export type { ScreenHeaderProps } from './screen-header.types';

