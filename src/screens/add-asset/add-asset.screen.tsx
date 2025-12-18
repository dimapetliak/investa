import {
    Button,
    IconButton,
    Input,
    Label,
    ScreenLayout,
    Select,
    Text,
} from '@/components/_shared';
import type { AssetType, CurrencyCode } from '@/types';
import { Spacing } from '@/theme/spacing';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, View } from 'react-native';
import type { AddAssetScreenProps } from './add-asset.types';

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
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: Spacing.lg }}>
        <IconButton
          icon={<Ionicons name="arrow-back" size={24} />}
          onPress={onCancel}
          variant="ghost"
        />
        <Text variant="h2" style={{ marginLeft: Spacing.sm, flex: 1 }}>
          Add Asset
        </Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ marginBottom: Spacing.md }}>
          <Label text="Asset Type" required />
          <Select
            options={[
              { label: 'Stock', value: 'stock' },
              { label: 'Crypto', value: 'crypto' },
            ]}
            value={formData.type}
            onChangeValue={(value: string | number) => onFieldChange('type', value as AssetType)}
            error={errors.type}
          />
        </View>

        <View style={{ marginBottom: Spacing.md }}>
          <Label text="Ticker Symbol" required />
          <Input
            value={formData.ticker}
            onChangeText={(text) => onFieldChange('ticker', text.toUpperCase())}
            placeholder="e.g., AAPL, BTC"
            error={errors.ticker}
            hint="Enter the stock ticker or crypto symbol"
          />
        </View>

        <View style={{ marginBottom: Spacing.md }}>
          <Label text="Name" required />
          <Input
            value={formData.name}
            onChangeText={(text) => onFieldChange('name', text)}
            placeholder="e.g., Apple Inc., Bitcoin"
            error={errors.name}
            hint="Full name of the asset"
          />
        </View>

        <View style={{ marginBottom: Spacing.lg }}>
          <Label text="Currency" required />
          <Select
            options={[
              { label: 'USD', value: 'USD' },
              { label: 'EUR', value: 'EUR' },
            ]}
            value={formData.currency}
            onChangeValue={(value: string | number) => onFieldChange('currency', value as CurrencyCode)}
            error={errors.currency}
          />
        </View>

        <View style={{ flexDirection: 'row', gap: Spacing.md, marginTop: Spacing.md }}>
          <Button
            variant="outline"
            onPress={onCancel}
            style={{ flex: 1 }}
            disabled={isLoading}
          >
            Cancel
          </Button>
          <Button
            variant="primary"
            onPress={onSave}
            style={{ flex: 1 }}
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

