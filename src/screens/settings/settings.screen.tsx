import { Button, Card, Container, ScreenLayout, Text } from '@/components/_shared';
import { Spacing } from '@/theme/spacing';
import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { GeneralSettings } from './components/general-settings';
import { ThemeSwitcher } from './components/theme-switcher';
import { SettingsScreenProps } from './settings.types';


export const SettingsScreen = ({
  state,
  actions,
  isLoading,
}: SettingsScreenProps) => {
  const { currency, autoRefreshPrices, language, notificationsEnabled, themeModeSelected } = state;
  const { toggleNotifications, onSelectThemeMode, onCurrencyChange, onAutoRefreshPricesChange } = actions;


  if (isLoading) {
    return (
      <ScreenLayout containerProps={{ noPadding: true }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="small" />
          <Text variant="body" color="muted" style={{ marginTop: Spacing.md }}>
            Loading settings...
          </Text>
        </View>
      </ScreenLayout>
    );
  }

  return (
    <ScreenLayout containerProps={{ gap: 'sm' }}>

      <Container padding='md'>
        <GeneralSettings currency={currency} autoRefreshPrices={autoRefreshPrices} onCurrencyChange={onCurrencyChange} onAutoRefreshPricesChange={onAutoRefreshPricesChange} />
      </Container>

      <Container padding='md'>
        <ThemeSwitcher />
      </Container>

      {/* Reset Button */}
      <Card>
        <Button variant="outline" onPress={actions.resetSettings} fullWidth>
          Reset to Defaults
        </Button>
      </Card>
    </ScreenLayout>
  );
};

