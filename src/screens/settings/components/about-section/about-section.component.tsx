import { Card, SectionHeader, Text } from '@/components';
import { Spacing } from '@/theme/spacing';
import React from 'react';
import { View } from 'react-native';

export const AboutSection = () => {
  return (
    <View style={{ marginBottom: Spacing['3xl'] }}>
      <SectionHeader title="About" />
      <Card>
        <View style={{ alignItems: 'center', padding: Spacing.lg }}>
          <Text variant="h3">Investment Tracker</Text>
          <Text variant="caption" color="muted" style={{ marginTop: 4 }}>
            v1.0.0
          </Text>
          <Text
            variant="caption"
            color="muted"
            style={{ marginTop: Spacing.md, textAlign: 'center' }}
          >
            Personal finance & investment portfolio manager.{'\n'}
            Offline-first. No cloud sync. Your data stays yours.
          </Text>
        </View>
      </Card>
    </View>
  );
};

