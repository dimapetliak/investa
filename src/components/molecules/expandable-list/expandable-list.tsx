import { Text } from '@/components/atoms/text';
import { useTheme } from '@/contexts/theme-context';
import { Ionicons } from '@expo/vector-icons';
import React, { useCallback, useEffect, useState, Children } from 'react';
import {
  LayoutAnimation,
  Platform,
  Pressable,
  UIManager,
  View,
} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { styles } from './expandable-list.styles';
import type { ExpandableListProps } from './expandable-list.types';

// Enable LayoutAnimation on Android
if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export const ExpandableList: React.FC<ExpandableListProps> = ({
  title,
  icon,
  count,
  defaultExpanded = true,
  expanded: controlledExpanded,
  onExpandedChange,
  headerAction,
  children,
  style,
  contentStyle,
  emptyState,
  showCount = true,
}) => {
  const { colors } = useTheme();
  const [internalExpanded, setInternalExpanded] = useState(defaultExpanded);
  
  // Support both controlled and uncontrolled modes
  const isControlled = controlledExpanded !== undefined;
  const isExpanded = isControlled ? controlledExpanded : internalExpanded;
  
  // Animation for chevron rotation
  const rotation = useSharedValue(isExpanded ? 1 : 0);
  
  useEffect(() => {
    rotation.value = withTiming(isExpanded ? 1 : 0, { duration: 200 });
  }, [isExpanded, rotation]);
  
  const chevronStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotation.value * 90}deg` }],
  }));
  
  const handleToggle = useCallback(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    
    if (isControlled) {
      onExpandedChange?.(!controlledExpanded);
    } else {
      const newExpanded = !internalExpanded;
      setInternalExpanded(newExpanded);
      onExpandedChange?.(newExpanded);
    }
  }, [isControlled, controlledExpanded, internalExpanded, onExpandedChange]);
  
  // Count children if count prop not provided
  const childCount = count ?? Children.count(children);
  const hasChildren = childCount > 0;
  
  return (
    <View style={[styles.container, style]}>
      <Pressable
        onPress={handleToggle}
        style={({ pressed }) => [
          styles.header,
          pressed && { opacity: 0.7 },
        ]}
        accessibilityRole="button"
        accessibilityLabel={`${title} section, ${isExpanded ? 'expanded' : 'collapsed'}, ${childCount} items`}
        accessibilityHint="Double tap to toggle section"
      >
        <View style={styles.headerLeft}>
          {icon && (
            <View style={styles.iconContainer}>
              <Ionicons
                name={icon as any}
                size={20}
                color={colors.primary}
              />
            </View>
          )}
          
          <View style={styles.titleContainer}>
            <Text variant="body" weight="semiBold">
              {title}
            </Text>
            
            {showCount && (
              <View style={[styles.countBadge, { backgroundColor: colors.backgroundMuted }]}>
                <Text variant="caption" weight="medium" color="muted">
                  {childCount}
                </Text>
              </View>
            )}
          </View>
        </View>
        
        <View style={styles.headerRight}>
          {headerAction}
          
          <Animated.View style={[styles.chevron, chevronStyle]}>
            <Ionicons
              name="chevron-forward"
              size={20}
              color={colors.foregroundMuted}
            />
          </Animated.View>
        </View>
      </Pressable>
      
      {isExpanded && (
        <View style={[styles.content, contentStyle]}>
          <View style={styles.contentInner}>
            {hasChildren ? children : emptyState}
          </View>
        </View>
      )}
    </View>
  );
};

export type { ExpandableListProps } from './expandable-list.types';

