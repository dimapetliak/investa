import { useTheme } from '@/contexts/theme-context';
import { Opacity, Spacing } from '@/theme';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, PressableProps, StyleSheet, View } from 'react-native';
import { Text } from '../atoms/Text';

export interface ListItemProps extends Omit<PressableProps, 'style'> {
  title: string;
  subtitle?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  showChevron?: boolean;
}

export const ListItem: React.FC<ListItemProps> = ({
  title,
  subtitle,
  leftIcon,
  rightIcon,
  showChevron = true,
  onPress,
  ...props
}) => {
  const { colors } = useTheme();

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.container,
        {
          backgroundColor: pressed ? colors.backgroundMuted : 'transparent',
          borderBottomColor: colors.border,
        },
      ]}
      {...props}
    >
      {leftIcon && (
        <View style={[styles.leftIcon, { color: colors.foreground }]}>
          {leftIcon}
        </View>
      )}

      <View style={styles.content}>
        <Text variant="body" weight="medium">
          {title}
        </Text>
        {subtitle && (
          <Text variant="caption" color="muted" style={styles.subtitle}>
            {subtitle}
          </Text>
        )}
      </View>

      {rightIcon && <View style={styles.rightIcon}>{rightIcon}</View>}

      {showChevron && !rightIcon && (
        <Ionicons
          name="chevron-forward"
          size={20}
          color={colors.foregroundMuted}
        />
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.lg,
    borderBottomWidth: 1,
    minHeight: 64,
  },
  leftIcon: {
    marginRight: Spacing.md,
  },
  content: {
    flex: 1,
  },
  subtitle: {
    marginTop: 4,
  },
  rightIcon: {
    marginLeft: Spacing.md,
  },
});
