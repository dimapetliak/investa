import { Text } from '@/components';
import { Ionicons } from '@expo/vector-icons';
import React, { memo } from 'react';
import { Pressable, View } from 'react-native';
import Animated, { FadeInUp } from 'react-native-reanimated';
import { styles } from './face-id-toggle.styles';
import { FaceIdToggleProps } from './face-id-toggle.types';

export const FaceIdToggle = memo(({ enabled, onToggle }: FaceIdToggleProps) => {
  return (
    <Animated.View
      entering={FadeInUp.delay(500).springify()}
      style={styles.container}
    >
      <Pressable
        onPress={onToggle}
        style={({ pressed }) => [
          styles.card,
          { opacity: pressed ? 0.9 : 1 },
        ]}
      >
        <View style={styles.content}>
          <View 
            style={[
              styles.icon, 
              { backgroundColor: enabled ? '#10b981' : 'rgba(255, 255, 255, 0.2)' }
            ]}
          >
            <Ionicons 
              name="finger-print" 
              size={32} 
              color={enabled ? '#ffffff' : 'rgba(255, 255, 255, 0.8)'} 
            />
          </View>
          <View style={styles.info}>
            <Text variant="body" weight="semiBold" style={styles.title}>
              Enable Face ID
            </Text>
            <Text variant="caption" style={styles.subtitle}>
              Quick access with biometric authentication
            </Text>
          </View>
          <View style={[styles.toggle, enabled && styles.toggleActive]}>
            <View style={[styles.toggleKnob, enabled && styles.toggleKnobActive]} />
          </View>
        </View>
      </Pressable>
    </Animated.View>
  );
});
