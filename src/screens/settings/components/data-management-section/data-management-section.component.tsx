import { Card, ListItem, SectionHeader } from '@/components';
import { useTheme } from '@/contexts/theme-context';
import { Spacing } from '@/theme/spacing';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import type { DataManagementSectionProps } from './data-management-section.types';

export const DataManagementSection = ({
  stats,
  isExporting,
  onImportData,
  onLoadSampleData,
  onExportData,
}: DataManagementSectionProps) => {
  const { colors } = useTheme();

  return (
    <View style={{ marginBottom: Spacing.lg }}>
      <SectionHeader title="Data Management" />
      <Card>
        <ListItem
          title="Import from CSV"
          subtitle="Import trades from IBKR or other brokers"
          leftIcon={<Ionicons name="cloud-upload-outline" size={24} />}
          onPress={onImportData}
        />
        <ListItem
          title="Load Sample Data"
          subtitle="Load sample IBKR portfolio (8 stocks)"
          leftIcon={<Ionicons name="flask-outline" size={24} />}
          onPress={onLoadSampleData}
        />
        <ListItem
          withBorder={false}
          title="Export Data"
          subtitle={`Export ${stats.assetsCount} assets & ${stats.tradesCount} trades`}
          leftIcon={
            isExporting ? (
              <ActivityIndicator size="small" color={colors.primary} />
            ) : (
              <Ionicons name="cloud-download-outline" size={24} />
            )
          }
          onPress={onExportData}
          disabled={isExporting}
        />
      </Card>
    </View>
  );
};

