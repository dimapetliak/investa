import { Button, SectionHeader } from '@/components';
import { Spacing } from '@/theme/spacing';
import React from 'react';
import { View } from 'react-native';
import type { DangerZoneSectionProps } from './danger-zone-section.types';

export const DangerZoneSection = ({ onClearAllData }: DangerZoneSectionProps) => {
  return (
    <View style={{ marginBottom: Spacing.lg }}>
      <SectionHeader title="Danger Zone" />
      <Button variant="destructive" onPress={onClearAllData}>
        Clear All Data
      </Button>
    </View>
  );
};

