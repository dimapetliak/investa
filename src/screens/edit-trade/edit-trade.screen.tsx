import {
  Button,
  DateTimePicker,
  Input,
  Label,
  NumberInput,
  ScreenLayout,
  Select,
} from '@/components';
import { TRADE_TYPE_OPTIONS } from '@/constants';
import { Spacing } from '@/theme/spacing';
import type { TradeType } from '@/types';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
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
        <View style={styles.field}>
          <Label text="Trade Type" required />
          <Select
            options={TRADE_TYPE_OPTIONS}
            value={formData.type}
            onChangeValue={(value: string | number) => onFieldChange('type', value as TradeType)}
            error={errors.type}
          />
        </View>

        <View style={styles.field}>
          <Label text="Quantity" required />
          <NumberInput
            value={formData.quantity}
            onChangeValue={(value: string) => onFieldChange('quantity', value)}
            placeholder="0.00"
            error={errors.quantity}
            hint="Number of shares or units"
          />
        </View>

        <View style={styles.field}>
          <Label text="Price per Unit" required />
          <NumberInput
            value={formData.price}
            onChangeValue={(value: string) => onFieldChange('price', value)}
            placeholder="0.00"
            error={errors.price}
            hint="Price per share or unit"
          />
        </View>

        <View style={styles.field}>
          <Label text="Fee (Optional)" />
          <NumberInput
            value={formData.fee}
            onChangeValue={(value: string) => onFieldChange('fee', value)}
            placeholder="0.00"
            error={errors.fee}
            hint="Transaction fee or commission"
          />
        </View>

        <View style={styles.field}>
          <Label text="Trade Date & Time" required />
          <DateTimePicker
            value={formData.timestamp}
            onChangeValue={(date: Date) => onFieldChange('timestamp', date)}
            mode="datetime"
            error={errors.timestamp}
          />
        </View>

        <View style={styles.lastField}>
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

        <View style={styles.actions}>
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

const styles = StyleSheet.create({
  field: {
    marginBottom: Spacing.md,
  },
  lastField: {
    marginBottom: Spacing.lg,
  },
  actions: {
    gap: Spacing.md,
    marginTop: Spacing.md,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: Spacing.md,
  },
  button: {
    flex: 1,
  },
});
