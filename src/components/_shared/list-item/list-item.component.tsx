import { Spacing } from '@/theme/spacing';
import React from 'react';
import { Pressable, View } from 'react-native';
import { Text } from '../text/text.component';
import { styles } from './list-item.styles';
import { ListItemProps } from './list-item.types';

export const ListItem = ({
  title,
  subtitle,
  leftIcon,
  rightIcon,
  onPress,
  disabled = false,
  style,
}: ListItemProps) => {
  const content = (
    <View style={[styles.container, disabled && styles.disabled, style]}>
      {leftIcon && <View style={styles.leftIcon}>{leftIcon}</View>}
      <View style={styles.content}>
        <Text variant="body">{title}</Text>
        {subtitle && (
          <Text variant="caption" color="muted" style={{ marginTop: Spacing.xs }}>
            {subtitle}
          </Text>
        )}
      </View>
      {rightIcon && <View style={styles.rightIcon}>{rightIcon}</View>}
    </View>
  );

  if (onPress) {
    return (
      <Pressable
        onPress={onPress}
        disabled={disabled}
        style={({ pressed }) => [
          pressed && !disabled && { opacity: 0.7 },
        ]}
      >
        {content}
      </Pressable>
    );
  }

  return content;
};

