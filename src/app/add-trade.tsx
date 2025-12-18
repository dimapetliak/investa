import { AddTradeScreen } from '@/screens/add-trade';
import { useAssetsStore, useTradesStore } from '@/store';
import { router, useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';

export default function AddTradeRoute() {
  const params = useLocalSearchParams();
  const assetId = params.assetId as string;

  const getAssetById = useAssetsStore((state) => state.getAssetById);
  const addTrade = useTradesStore((state) => state.addTrade);

  const asset = getAssetById(assetId);

  const [formData, setFormData] = useState({
    assetId: assetId || '',
    type: 'buy' as const,
    quantity: '',
    price: '',
    fee: '',
    timestamp: new Date(),
    comment: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  // If no asset, go back
  if (!asset) {
    router.back();
    return null;
  }

  const handleFieldChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.type) {
      newErrors.type = 'Trade type is required';
    }

    if (!formData.quantity || parseFloat(formData.quantity) <= 0) {
      newErrors.quantity = 'Quantity must be greater than 0';
    }

    if (!formData.price || parseFloat(formData.price) <= 0) {
      newErrors.price = 'Price must be greater than 0';
    }

    if (formData.fee && parseFloat(formData.fee) < 0) {
      newErrors.fee = 'Fee cannot be negative';
    }

    if (!formData.timestamp) {
      newErrors.timestamp = 'Trade date is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      addTrade({
        assetId: formData.assetId,
        type: formData.type,
        quantity: parseFloat(formData.quantity),
        price: parseFloat(formData.price),
        fee: formData.fee ? parseFloat(formData.fee) : undefined,
        timestamp: formData.timestamp.toISOString(),
        comment: formData.comment || undefined,
      });

      router.back();
    } catch (error) {
      console.error('Error adding trade:', error);
      setErrors({ type: 'Failed to add trade' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    router.back();
  };

  return (
    <AddTradeScreen
      formData={formData}
      errors={errors}
      assetTicker={asset.ticker}
      onFieldChange={handleFieldChange}
      onSave={handleSave}
      onCancel={handleCancel}
      isLoading={isLoading}
    />
  );
}
