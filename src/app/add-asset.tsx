import { Button, Input, Text } from '@/components/_shared';
import { Colors } from '@/theme/colors';
import { Spacing } from '@/theme/spacing';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';

interface AssetFormData {
  name: string;
  ticker: string;
  quantity: string;
  purchasePrice: string;
  notes: string;
}

export default function AddAssetScreen() {
  const [formData, setFormData] = useState<AssetFormData>({
    name: '',
    ticker: '',
    quantity: '',
    purchasePrice: '',
    notes: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof AssetFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof AssetFormData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Asset name is required';
    }

    if (!formData.ticker.trim()) {
      newErrors.ticker = 'Ticker symbol is required';
    }

    if (!formData.quantity.trim() || parseFloat(formData.quantity) <= 0) {
      newErrors.quantity = 'Quantity must be greater than 0';
    }

    if (!formData.purchasePrice.trim() || parseFloat(formData.purchasePrice) <= 0) {
      newErrors.purchasePrice = 'Purchase price must be greater than 0';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    // TODO: Save asset to backend/storage
    console.log('Asset data:', formData);
    
    setIsSubmitting(false);
    router.back();
  };

  const handleCancel = () => {
    router.back();
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
    >
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{
          padding: Spacing.md,
          paddingBottom: Spacing.xl,
          backgroundColor: Colors.white,
        }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={{ gap: Spacing.md }}>
          <Text variant="h2" style={{ marginBottom: Spacing.sm }}>Add New Asset</Text>

          <Input
            label="Asset Name"
            placeholder="e.g., Apple Inc."
            value={formData.name}
            onChangeText={(text) => {
              setFormData({ ...formData, name: text });
              if (errors.name) setErrors({ ...errors, name: undefined });
            }}
            error={errors.name}
          />

          <Input
            label="Ticker Symbol"
            placeholder="e.g., AAPL"
            value={formData.ticker}
            onChangeText={(text) => {
              setFormData({ ...formData, ticker: text.toUpperCase() });
              if (errors.ticker) setErrors({ ...errors, ticker: undefined });
            }}
            error={errors.ticker}
            autoCapitalize="characters"
            maxLength={10}
          />

          <View style={{ flexDirection: 'row', gap: Spacing.md }}>
            <View style={{ flex: 1 }}>
              <Input
                label="Quantity"
                placeholder="0.00"
                value={formData.quantity}
                onChangeText={(text) => {
                  setFormData({ ...formData, quantity: text });
                  if (errors.quantity) setErrors({ ...errors, quantity: undefined });
                }}
                error={errors.quantity}
                keyboardType="decimal-pad"
              />
            </View>
            <View style={{ flex: 1 }}>
              <Input
                label="Purchase Price"
                placeholder="0.00"
                value={formData.purchasePrice}
                onChangeText={(text) => {
                  setFormData({ ...formData, purchasePrice: text });
                  if (errors.purchasePrice) setErrors({ ...errors, purchasePrice: undefined });
                }}
                error={errors.purchasePrice}
                keyboardType="decimal-pad"
              />
            </View>
          </View>

          {formData.quantity && formData.purchasePrice && 
           parseFloat(formData.quantity) > 0 && parseFloat(formData.purchasePrice) > 0 && (
            <View
              style={{
                backgroundColor: Colors.neutral100,
                padding: Spacing.md,
                borderRadius: 8,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Text variant="body" color="muted">Total Value</Text>
              <Text variant="body" style={{ fontWeight: '600' }}>
                ${(parseFloat(formData.quantity) * parseFloat(formData.purchasePrice)).toFixed(2)}
              </Text>
            </View>
          )}

          <Input
            label="Notes (Optional)"
            placeholder="Add any additional notes..."
            value={formData.notes}
            onChangeText={(text) => setFormData({ ...formData, notes: text })}
            multiline
            numberOfLines={4}
            textAlignVertical="top"
          />

          <View style={{ gap: Spacing.sm, marginTop: Spacing.md }}>
            <Button
              variant="primary"
              size="lg"
              fullWidth
              onPress={handleSubmit}
              loading={isSubmitting}
            >
              Add Asset
            </Button>
            <Button
              variant="secondary"
              size="lg"
              fullWidth
              onPress={handleCancel}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
