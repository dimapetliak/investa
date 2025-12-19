import { useTheme } from '@/contexts/theme-context';
import { BorderWidth } from '@/theme';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, View } from 'react-native';
import { Text } from '../../atoms/text';
import { styles } from './list-item.styles';
import type { ListItemProps } from './list-item.types';

export const ListItem: React.FC<ListItemProps> = ({
  title,
  subtitle,
  leftIcon,
  rightIcon,
  showChevron = true,
  onPress,
  withBorder = true,
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
          borderBottomWidth: withBorder ? BorderWidth.thin : 0,
        },
      ]}
      {...props}
    >
      {leftIcon && <View style={styles.leftIcon}>{leftIcon}</View>}

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
        <Ionicons name="chevron-forward" size={20} color={colors.foregroundMuted} />
      )}
    </Pressable>
  );
};

export type { ListItemProps } from './list-item.types';

