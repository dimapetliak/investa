import { Button, Card, ListItem, ScreenLayout, SectionHeader, Text } from '@/components/_shared';
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
  return (
    <ScreenLayout>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Stats Card */}
        <Card style={{ marginBottom: Spacing.md }}>
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

        {/* General Settings */}
        <View style={{ marginBottom: Spacing.md }}>
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
        <View style={{ marginBottom: Spacing.md }}>
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
              variant="outline"
              onPress={onClearAllData}
              style={{ borderColor: '#EF4444' }}
            >
              <Text style={{ color: '#EF4444' }}>Clear All Data</Text>
            </Button>
          </Card>
        </View>

        {/* About */}
        <View style={{ marginBottom: Spacing.xl }}>
          <SectionHeader title="About" />
          <Card>
            <View style={{ alignItems: 'center', padding: Spacing.md }}>
              <Text variant="h3">Investment Tracker</Text>
              <Text variant="caption" style={{ marginTop: 4 }}>v1.0.0</Text>
              <Text variant="caption" style={{ marginTop: Spacing.sm, textAlign: 'center' }}>
                Personal investment portfolio manager
              </Text>
            </View>
          </Card>
        </View>
      </ScrollView>
    </ScreenLayout>
  );
};
