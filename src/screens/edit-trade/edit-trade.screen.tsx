import {
  Button,
  DateTimePicker,
  Input,
  Label,
  NumberInput,
  ScreenLayout,
  Select,
} from '@/components';
import type { TradeType } from '@/types';
import { Spacing } from '@/theme/spacing';
import React from 'react';
import { ScrollView, View } from 'react-native';
import type { EditTradeScreenProps } from './edit-trade.types';

export const EditTradeScreen = ({
  formData,
  errors,
  assetTicker,
  onFieldChange,
  onSave,
  onCancel,
  onDelete,
  isLoading,
}: EditTradeScreenProps) => {
  return (
    <ScreenLayout
      title={`Edit Trade${assetTicker ? ` - ${assetTicker}` : ''}`}
      showBackButton
      onBackPress={onCancel}
    >
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
          <Label text="Quantity" required />
          <NumberInput
            value={formData.quantity}
            onChangeValue={(value: string) => onFieldChange('quantity', value)}
            placeholder="0.00"
            error={errors.quantity}
            hint="Number of shares or units"
          />
        </View>

        <View style={{ marginBottom: Spacing.md }}>
          <Label text="Price per Unit" required />
          <NumberInput
            value={formData.price}
            onChangeValue={(value: string) => onFieldChange('price', value)}
            placeholder="0.00"
            error={errors.price}
            hint="Price per share or unit"
          />
        </View>

        <View style={{ marginBottom: Spacing.md }}>
          <Label text="Fee (Optional)" />
          <NumberInput
            value={formData.fee}
            onChangeValue={(value: string) => onFieldChange('fee', value)}
            placeholder="0.00"
            error={errors.fee}
            hint="Transaction fee or commission"
          />
        </View>

        <View style={{ marginBottom: Spacing.md }}>
          <Label text="Trade Date & Time" required />
          <DateTimePicker
            value={formData.timestamp}
            onChangeValue={(date: Date) => onFieldChange('timestamp', date)}
            mode="datetime"
            error={errors.timestamp}
          />
        </View>

        <View style={{ marginBottom: Spacing.lg }}>
          <Label text="Comment (Optional)" />
          <Input
            value={formData.comment}
            onChangeText={(text: string) => onFieldChange('comment', text)}
            placeholder="Add notes about this trade"
            multiline
            numberOfLines={3}
            error={errors.comment}
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
            variant="destructive"
            onPress={onDelete}
            disabled={isLoading}
          >
            Delete Trade
          </Button>
        </View>
      </ScrollView>
    </ScreenLayout>
  );
};
