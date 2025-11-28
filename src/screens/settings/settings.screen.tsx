import { Button, Card, Container, ScreenLayout, Text } from '@/components/_shared';
import { Spacing } from '@/theme/spacing';
import React from 'react';
import { ActivityIndicator, Switch, View } from 'react-native';
import { GeneralSettings } from './components/general-settings';
import { SettingsScreenProps } from './settings.types';


export const SettingsScreen = ({
  state,
  actions,
  isLoading,
}: SettingsScreenProps) => {
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
    <ScreenLayout containerProps={{ gap: 'md' }}>
      <Text variant="h2" style={{ marginBottom: Spacing.sm }}>
        Settings
      </Text>

      {/* Notifications */}
      <Container padding='md'>
        <GeneralSettings />
      </Container>


      {/* Dark Mode */}
      <Card>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <View style={{ flex: 1 }}>
            <Text variant="body" style={{ marginBottom: Spacing.xs }}>
              Dark Mode
            </Text>
            <Text variant="caption" color="muted">
              Enable dark theme
            </Text>
          </View>
          <Switch
            value={state.darkModeEnabled}
            onValueChange={actions.toggleDarkMode}
          />
        </View>
      </Card>

      {/* Currency */}
      <Card>
        <Text variant="body" style={{ marginBottom: Spacing.sm }}>
          Currency
        </Text>
        <View style={{ flexDirection: 'row', gap: Spacing.sm }}>
          {['USD', 'EUR', 'GBP'].map((currency) => (
            <Button
              key={currency}
              variant={state.currency === currency ? 'primary' : 'outline'}
              size="sm"
              onPress={() => actions.setCurrency(currency)}
            >
              {currency}
            </Button>
          ))}
        </View>
      </Card>

      <Card backgroundVariant="info">
        <Text variant="body" style={{ marginBottom: Spacing.sm }}>
          Language
        </Text>
        <View style={{ flexDirection: 'row', gap: Spacing.sm }}>
          {[
            { code: 'en', label: 'English' },
            { code: 'es', label: 'Spanish' },
            { code: 'fr', label: 'French' },
          ].map((lang) => (
            <Button
              key={lang.code}
              variant={state.language === lang.code ? 'primary' : 'outline'}
              size="sm"
              onPress={() => actions.setLanguage(lang.code)}
            >
              {lang.label}
            </Button>
          ))}
        </View>
      </Card>

      {/* Reset Button */}
      <Card>
        <Button variant="outline" onPress={actions.resetSettings} fullWidth>
          Reset to Defaults
        </Button>
      </Card>
    </ScreenLayout>
  );
};

