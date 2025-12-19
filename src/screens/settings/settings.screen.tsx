import { ScreenLayout, Text } from '@/components';
import { Spacing } from '@/theme/spacing';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  AboutSection,
  AppearanceSection,
  DangerZoneSection,
  DataManagementSection,
  GeneralSection,
  PriceSettingsSection,
  SecuritySection,
} from './components';
import { useThemeSettings } from './hooks';
import type { SettingsScreenProps } from './settings.types';

export const SettingsScreen = ({
  baseCurrency,
  onCurrencyChange,
  priceRefreshInterval,
  onPriceRefreshIntervalChange,
  stockPriceSource,
  onStockPriceSourceChange,
  cryptoPriceSource,
  onCryptoPriceSourceChange,
  security,
  onSecurityChange,
  onExportData,
  onImportData,
  onLoadSampleData,
  onClearAllData,
  stats,
  isExporting,
}: SettingsScreenProps) => {
  const {
    theme,
    darkModeLabel,
    isDarkModeEnabled,
    handleDarkModeToggle,
    handleThemeChange,
  } = useThemeSettings();

  return (
    <ScreenLayout showsVerticalScrollIndicator={false} containerProps={{ noPadding: true }}>
      {/* Header */}
      <View style={styles.header}>
        <Text variant="caption" color="muted">
          Preferences
        </Text>
        <Text variant="h2" weight="bold">
          Settings
        </Text>
      </View>

      <View style={styles.content}>
        <AppearanceSection
          theme={theme}
          darkModeLabel={darkModeLabel}
          isDarkModeEnabled={isDarkModeEnabled}
          onDarkModeToggle={handleDarkModeToggle}
          onThemeChange={handleThemeChange}
        />

        <GeneralSection
          baseCurrency={baseCurrency}
          onCurrencyChange={onCurrencyChange}
        />

        <PriceSettingsSection
          priceRefreshInterval={priceRefreshInterval}
          onPriceRefreshIntervalChange={onPriceRefreshIntervalChange}
          stockPriceSource={stockPriceSource}
          onStockPriceSourceChange={onStockPriceSourceChange}
          cryptoPriceSource={cryptoPriceSource}
          onCryptoPriceSourceChange={onCryptoPriceSourceChange}
        />

        <SecuritySection
          security={security}
          onSecurityChange={onSecurityChange}
        />

        <DataManagementSection
          stats={stats}
          isExporting={isExporting}
          onImportData={onImportData}
          onLoadSampleData={onLoadSampleData}
          onExportData={onExportData}
        />

        <DangerZoneSection onClearAllData={onClearAllData} />

        <AboutSection />
      </View>
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.md,
  },
  content: {
    paddingHorizontal: Spacing.lg,
  },
});
