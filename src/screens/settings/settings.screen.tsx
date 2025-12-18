import { Button, Card, ListItem, ScreenLayout, SectionHeader, Text, Separator } from '@/components/_shared';
import { useTheme } from '@/contexts/theme-context';
import { Spacing } from '@/theme/spacing';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, View } from 'react-native';
import type { SettingsScreenProps } from './settings.types';

export const SettingsScreen = ({
  baseCurrency,
  onCurrencyChange,
  onExportData,
  onImportData,
  onClearAllData,
  stats,
}: SettingsScreenProps) => {
  const { theme, setTheme } = useTheme();

  const getThemeLabel = () => {
    switch (theme) {
      case 'light':
        return 'Light';
      case 'dark':
        return 'Dark';
      case 'system':
        return 'System';
      default:
        return 'System';
    }
  };

  const handleThemeChange = () => {
    // Cycle through: system -> light -> dark -> system
    if (theme === 'system') {
      setTheme('light');
    } else if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('system');
    }
  };

  return (
    <ScreenLayout>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ paddingHorizontal: Spacing.lg }}>
          {/* Stats Card */}
          <Card style={{ marginBottom: Spacing.lg }}>
            <SectionHeader title="Statistics" />
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: Spacing.sm }}>
              <View style={{ alignItems: 'center' }}>
                <Text variant="h2">{stats.assetsCount}</Text>
                <Text variant="caption" style={{ marginTop: 4 }}>Assets</Text>
              </View>
              <View style={{ alignItems: 'center' }}>
                <Text variant="h2">{stats.tradesCount}</Text>
                <Text variant="caption" style={{ marginTop: 4 }}>Trades</Text>
              </View>
            </View>
          </Card>

          {/* Appearance Settings */}
          <View style={{ marginBottom: Spacing.lg }}>
            <SectionHeader title="Appearance" />
            <Card>
              <ListItem
                title="Theme"
                subtitle={getThemeLabel()}
                icon={<Ionicons name="color-palette-outline" size={24} />}
                onPress={handleThemeChange}
                showChevron
              />
            </Card>
          </View>

          {/* General Settings */}
          <View style={{ marginBottom: Spacing.lg }}>
            <SectionHeader title="General" />
            <Card>
              <ListItem
                title="Base Currency"
                subtitle={baseCurrency}
                icon={<Ionicons name="cash-outline" size={24} />}
                onPress={() => {
                  // Toggle between USD and EUR for now
                  onCurrencyChange(baseCurrency === 'USD' ? 'EUR' : 'USD');
                }}
                showChevron
              />
            </Card>
          </View>

          {/* Data Management */}
          <View style={{ marginBottom: Spacing.lg }}>
            <SectionHeader title="Data Management" />
            <Card>
              <ListItem
                title="Import from CSV"
                subtitle="Import trades from IBKR or other brokers"
                icon={<Ionicons name="cloud-upload-outline" size={24} />}
                onPress={onImportData}
                showChevron
              />
              <ListItem
                title="Export Data"
                subtitle="Download your portfolio data"
                icon={<Ionicons name="cloud-download-outline" size={24} />}
                onPress={onExportData}
                showChevron
              />
            </Card>
          </View>

          {/* Danger Zone */}
          <View style={{ marginBottom: Spacing.lg }}>
            <SectionHeader title="Danger Zone" />
            <Card>
              <Button
                variant="destructive"
                onPress={onClearAllData}
              >
                Clear All Data
              </Button>
            </Card>
          </View>

          {/* About */}
          <View style={{ marginBottom: Spacing['3xl'] }}>
            <SectionHeader title="About" />
            <Card>
              <View style={{ alignItems: 'center', padding: Spacing.lg }}>
                <Text variant="h3">Investment Tracker</Text>
                <Text variant="caption" color="muted" style={{ marginTop: 4 }}>v1.0.0</Text>
                <Text variant="caption" color="muted" style={{ marginTop: Spacing.md, textAlign: 'center' }}>
                  Personal investment portfolio manager
                </Text>
              </View>
            </Card>
          </View>
        </View>
      </ScrollView>
    </ScreenLayout>
  );
};
