import { Badge, Text } from '@/components';
import { useTheme } from '@/contexts/theme-context';
import { Spacing } from '@/theme/spacing';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import type { PortfolioHeaderProps } from './portfolio-header.types';

export const PortfolioHeader = ({
  userName = 'Investor',
  notificationCount = 0,
  onNotificationPress,
}: PortfolioHeaderProps) => {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <View>
        <Text variant="caption" color="muted">
          Welcome back,
        </Text>
        <Text variant="h2" weight="bold">
          Hello {userName} 👋
        </Text>
      </View>

      <Pressable
        onPress={onNotificationPress}
        style={({ pressed }) => [
          styles.notificationButton,
          { backgroundColor: colors.backgroundSecondary },
          pressed && styles.pressed,
        ]}
      >
        <Ionicons
          name="notifications-outline"
          size={24}
          color={colors.foreground}
        />
        {notificationCount > 0 && (
          <Badge
            value={notificationCount}
            max={9}
            variant="error"
            size="sm"
            style={styles.badge}
          />
        )}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.md,
  },
  notificationButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressed: {
    opacity: 0.7,
  },
  badge: {
    position: 'absolute',
    top: 6,
    right: 6,
  },
});
