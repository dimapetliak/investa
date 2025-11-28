import {
    Button,
    DateTimePicker,
    IconButton,
    Input,
    Label,
    NumberInput,
    ScreenLayout,
    Select,
    Text,
} from '@/components/_shared';
import { AssetType } from '@/components/_shared/asset-tag/asset-tag.types';
import { Spacing } from '@/theme/spacing';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, View } from 'react-native';
import { AddAssetScreenProps } from './add-asset.types';

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
            value={formData.assetType}
            onChangeValue={(value: string | number) => onFieldChange('assetType', value as AssetType)}
            error={errors.assetType}
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
          <Label text="Quantity" required />
          <NumberInput
            value={formData.quantity}
            onChangeValue={(value: string) => onFieldChange('quantity', value)}
            placeholder="0.00"
            error={errors.quantity}
          />
        </View>
        <View style={{ marginBottom: Spacing.md }}>
          <Label text="Purchase Price" required />
          <NumberInput
            value={formData.purchasePrice}
            onChangeValue={(value: string) => onFieldChange('purchasePrice', value)}
            placeholder="0.00"
            error={errors.purchasePrice}
          />
        </View>

        <View style={{ marginBottom: Spacing.md }}>
          <Label text="Purchase Date" required />
          <DateTimePicker
            value={formData.purchaseDate}
            onChangeValue={(date: Date) => onFieldChange('purchaseDate', date)}
            mode="date"
            error={errors.purchaseDate}
          />
        </View>

        <View style={{ marginBottom: Spacing.lg }}>
          <Label text="Notes" />
          <Input
            value={formData.notes}
            onChangeText={(text) => onFieldChange('notes', text)}
            placeholder="Optional notes about this asset"
            multiline
            numberOfLines={3}
            error={errors.notes}
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

