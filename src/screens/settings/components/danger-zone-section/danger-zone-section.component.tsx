import { Button, SectionHeader, Text } from '@/components';
import { useTheme } from '@/contexts/theme-context';
import { Radius, Spacing } from '@/theme';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import type { DangerZoneSectionProps } from './danger-zone-section.types';

export const DangerZoneSection = ({ onClearAllData }: DangerZoneSectionProps) => {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <SectionHeader title="Danger Zone" />
      <View style={[styles.warningBox, { backgroundColor: `${colors.error}08`, borderColor: `${colors.error}30` }]}>
        <Text variant="caption" color="muted" style={styles.warningText}>
          These actions cannot be undone. Please proceed with caution.
        </Text>
        <Button 
          variant="destructive" 
          onPress={onClearAllData}
          accessibilityLabel="Delete all app data"
          accessibilityHint="This will permanently delete all your assets, trades, and settings"
        >
          Clear All Data
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: Spacing.lg,
  },
  warningBox: {
    padding: Spacing.md,
    borderRadius: Radius.md,
    borderWidth: 1,
  },
  warningText: {
    marginBottom: Spacing.md,
    textAlign: 'center',
  },
});

