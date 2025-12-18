import { EditTradeScreen } from '@/screens/edit-trade';
import { useAssetsStore, useTradesStore } from '@/store';
import type { TradeType } from '@/types';
import { router, useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';

export default function EditTradeRoute() {
  const params = useLocalSearchParams();
  const tradeId = params.id as string;

  const getTradeById = useTradesStore((state) => state.getTradeById);
  const updateTrade = useTradesStore((state) => state.updateTrade);
  const deleteTrade = useTradesStore((state) => state.deleteTrade);
  const getAssetById = useAssetsStore((state) => state.getAssetById);

  const trade = getTradeById(tradeId);
  const asset = trade ? getAssetById(trade.assetId) : null;

  const [formData, setFormData] = useState<{
    type: TradeType;
    quantity: string;
    price: string;
    fee: string;
    timestamp: Date;
    comment: string;
  }>({
    type: 'buy',
    quantity: '',
    price: '',
    fee: '',
    timestamp: new Date(),
    comment: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  // Load trade data
  useEffect(() => {
    if (trade) {
      setFormData({
        type: trade.type,
        quantity: trade.quantity.toString(),
        price: trade.price.toString(),
        fee: trade.fee ? trade.fee.toString() : '',
        timestamp: new Date(trade.timestamp),
        comment: trade.comment || '',
      });
    }
  }, [trade]);

  // If trade doesn't exist, go back
  if (!trade) {
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
      updateTrade(tradeId, {
        type: formData.type,
        quantity: parseFloat(formData.quantity),
        price: parseFloat(formData.price),
        fee: formData.fee ? parseFloat(formData.fee) : undefined,
        timestamp: formData.timestamp.toISOString(),
        comment: formData.comment || undefined,
      });

      router.back();
    } catch (error) {
      console.error('Error updating trade:', error);
      setErrors({ type: 'Failed to update trade' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    router.back();
  };

  const handleDelete = () => {
    // Delete is handled in asset details with confirmation
    deleteTrade(tradeId);
    router.back();
  };

  return (
    <EditTradeScreen
      formData={formData}
      errors={errors}
      assetTicker={asset?.ticker}
      onFieldChange={handleFieldChange}
      onSave={handleSave}
      onCancel={handleCancel}
      onDelete={handleDelete}
      isLoading={isLoading}
    />
  );
}
