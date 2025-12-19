import { Card, SectionHeader, Text } from '@/components';
import { useTheme } from '@/contexts/theme-context';
import { Spacing } from '@/theme/spacing';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Switch, View } from 'react-native';
import type { SecuritySectionProps } from './security-section.types';

export const SecuritySection = ({
  security,
  onSecurityChange,
}: SecuritySectionProps) => {
  const { colors } = useTheme();

  return (
    <View style={{ marginBottom: Spacing.lg }}>
      <SectionHeader title="Security" />
      <Card>
        <View style={{ padding: Spacing.md }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: Spacing.md,
            }}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Ionicons
                name="scan-outline"
                size={24}
                color={colors.foreground}
                style={{ marginRight: Spacing.md }}
              />
              <View>
                <Text variant="body">Face ID / Touch ID</Text>
                <Text variant="caption" color="muted">
                  Unlock app with biometrics
                </Text>
              </View>
            </View>
            <Switch
              value={security.useFaceId}
              onValueChange={(value) => onSecurityChange({ useFaceId: value })}
              trackColor={{
                false: colors.neutral300,
                true: colors.primary,
              }}
              thumbColor={colors.white}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Ionicons
                name="keypad-outline"
                size={24}
                color={colors.foreground}
                style={{ marginRight: Spacing.md }}
              />
              <View>
                <Text variant="body">PIN Code</Text>
                <Text variant="caption" color="muted">
                  Set a 4-digit PIN
                </Text>
              </View>
            </View>
            <Switch
              value={security.usePin}
              onValueChange={(value) => onSecurityChange({ usePin: value })}
              trackColor={{
                false: colors.neutral300,
                true: colors.primary,
              }}
              thumbColor={colors.white}
            />
          </View>

          <Text variant="caption" color="muted" style={{ marginTop: Spacing.md }}>
            Security features are not yet implemented in this version.
          </Text>
        </View>
      </Card>
    </View>
  );
};

