import {
    Button,
    Input,
    Label,
    ScreenHeader,
    ScreenLayout,
    Select,
} from '@/components';
import { Spacing } from '@/theme/spacing';
import type { AssetType, CurrencyCode } from '@/types';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import type { AddAssetScreenProps } from './add-asset.types';

const ASSET_TYPE_OPTIONS = [
  { label: 'Stock', value: 'stock' },
  { label: 'Crypto', value: 'crypto' },
];

const CURRENCY_OPTIONS = [
  { label: 'USD', value: 'USD' },
  { label: 'EUR', value: 'EUR' },
];

export const AddAssetScreen = ({
  formData,
  errors,
  onFieldChange,
  onSave,
  onCancel,
  isLoading,
}: AddAssetScreenProps) => {
  return (
    <ScreenLayout containerProps={{ padding: 'md' }}>
      <ScreenHeader title="Add Asset" onBack={onCancel} />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.field}>
          <Label text="Asset Type" required />
          <Select
            options={ASSET_TYPE_OPTIONS}
            value={formData.type}
            onChangeValue={(value: string | number) => onFieldChange('type', value as AssetType)}
            error={errors.type}
          />
        </View>

        <View style={styles.field}>
          <Label text="Ticker Symbol" required />
          <Input
            value={formData.ticker}
            onChangeText={(text) => onFieldChange('ticker', text.toUpperCase())}
            placeholder="e.g., AAPL, BTC"
            error={errors.ticker}
            hint="Enter the stock ticker or crypto symbol"
          />
        </View>

        <View style={styles.field}>
          <Label text="Name" required />
          <Input
            value={formData.name}
            onChangeText={(text) => onFieldChange('name', text)}
            placeholder="e.g., Apple Inc., Bitcoin"
            error={errors.name}
            hint="Full name of the asset"
          />
        </View>

        <View style={styles.lastField}>
          <Label text="Currency" required />
          <Select
            options={CURRENCY_OPTIONS}
            value={formData.currency}
            onChangeValue={(value: string | number) => onFieldChange('currency', value as CurrencyCode)}
            error={errors.currency}
          />
        </View>

        <View style={styles.buttonRow}>
          <Button
            variant="outline"
            onPress={onCancel}
            style={styles.button}
            disabled={isLoading}
          >
            Cancel
          </Button>
          <Button
            variant="primary"
            onPress={onSave}
            style={styles.button}
            loading={isLoading}
            disabled={isLoading}
          >
            Add Asset
          </Button>
        </View>
      </ScrollView>
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  field: {
    marginBottom: Spacing.md,
  },
  lastField: {
    marginBottom: Spacing.lg,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: Spacing.md,
    marginTop: Spacing.md,
  },
  button: {
    flex: 1,
  },
});
