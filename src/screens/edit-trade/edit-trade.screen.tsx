import {
  Button,
  DateTimePicker,
  Input,
  Label,
  NumberInput,
  ScreenLayout,
  Select
} from '@/components/_shared';
import { AssetType } from '@/components/_shared/asset-tag/asset-tag.types';
import { TradeType } from '@/components/_shared/trade-row/trade-row.types';
import { Spacing } from '@/theme/spacing';
import React from 'react';
import { ScrollView, View } from 'react-native';
import { EditTradeScreenProps } from './edit-trade.types';

export const EditTradeScreen = ({
  formData,
  errors,
  onFieldChange,
  onSave,
  onCancel,
  onDelete,
  isLoading,
}: EditTradeScreenProps) => {
  return (
    <ScreenLayout containerProps={{ padding: 'md' }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ marginBottom: Spacing.md }}>
          <Label text="Trade Type" required />
          <Select
            options={[
              { label: 'Buy', value: 'buy' },
              { label: 'Sell', value: 'sell' },
            ]}
            value={formData.type}
            onChangeValue={(value: string | number) => onFieldChange('type', value as TradeType)}
            error={errors.type}
          />
        </View>

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
            onChangeText={(text: string) => onFieldChange('ticker', text.toUpperCase())}
            placeholder="e.g., AAPL, BTC"
            error={errors.ticker}
            hint="Enter the stock ticker or crypto symbol"
          />
        </View>

        <View style={{ marginBottom: Spacing.md }}>
          <Label text="Price" required />
          <NumberInput
            value={formData.price}
            onChangeValue={(value: string) => onFieldChange('price', value)}
            placeholder="0.00"
            error={errors.price}
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
          <Label text="Trade Date" required />
          <DateTimePicker
            value={formData.date}
            onChangeValue={(date: Date) => onFieldChange('date', date)}
            mode="date"
            error={errors.date}
          />
        </View>

        <View style={{ marginBottom: Spacing.lg }}>
          <Label text="Notes" />
          <Input
            value={formData.notes}
            onChangeText={(text: string) => onFieldChange('notes', text)}
            placeholder="Optional notes about this trade"
            multiline
            numberOfLines={3}
            error={errors.notes}
          />
        </View>

        <View style={{ gap: Spacing.md, marginTop: Spacing.md }}>
          <View style={{ flexDirection: 'row', gap: Spacing.md }}>
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
              Save Changes
            </Button>
          </View>
          <Button
            variant="outline"
            onPress={onDelete}
            disabled={isLoading}
            style={{ borderColor: '#EF4444' }}
            textStyle={{ color: '#EF4444' }}
          >
            Delete Trade
          </Button>
        </View>
      </ScrollView>
    </ScreenLayout>
  );
};

