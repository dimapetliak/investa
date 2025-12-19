import { Card, SectionHeader, Select, Text } from '@/components';
import { useTheme } from '@/contexts/theme-context';
import { Spacing } from '@/theme/spacing';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Switch, View } from 'react-native';
import { THEME_OPTIONS } from '../../constants';
import type { AppearanceSectionProps } from './appearance-section.types';

export const AppearanceSection = ({
  theme,
  darkModeLabel,
  isDarkModeEnabled,
  onDarkModeToggle,
  onThemeChange,
}: AppearanceSectionProps) => {
  const { colors } = useTheme();

  return (
    <View style={{ marginBottom: Spacing.lg }}>
      <SectionHeader title="Appearance" />
      <Card>
        <View style={{ padding: Spacing.md }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: Spacing.lg,
            }}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Ionicons
                name="moon-outline"
                size={24}
                color={colors.foreground}
                style={{ marginRight: Spacing.md }}
              />
              <View>
                <Text variant="body">Dark Mode</Text>
                <Text variant="caption" color="muted">
                  {darkModeLabel}
                </Text>
              </View>
            </View>
            <Switch
              value={isDarkModeEnabled}
              onValueChange={onDarkModeToggle}
              trackColor={{
                false: colors.neutral300,
                true: colors.primary,
              }}
              thumbColor={colors.white}
            />
          </View>

          <Select
            label="Theme Preference"
            placeholder="Select theme"
            options={[...THEME_OPTIONS]}
            value={theme}
            onChangeValue={onThemeChange}
            leftIcon={
              <Ionicons
                name="color-palette-outline"
                size={20}
                color={colors.foreground}
              />
            }
          />
        </View>
      </Card>
    </View>
  );
};

