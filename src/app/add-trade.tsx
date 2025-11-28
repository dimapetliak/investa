import { AddTradeScreen } from '@/screens/add-trade';
import { router } from 'expo-router';
import React, { useState } from 'react';

export default function AddTradeRoute() {
  const [formData, setFormData] = useState({
    type: 'buy' as const,
    assetType: 'stock' as const,
    ticker: '',
    price: '',
    quantity: '',
    date: undefined as Date | undefined,
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.type) {
      newErrors.type = 'Trade type is required';
    }

    if (!formData.assetType) {
      newErrors.assetType = 'Asset type is required';
    }

    if (!formData.ticker.trim()) {
      newErrors.ticker = 'Ticker symbol is required';
    }

    if (!formData.price || parseFloat(formData.price) <= 0) {
      newErrors.price = 'Price must be greater than 0';
    }

    if (!formData.quantity || parseFloat(formData.quantity) <= 0) {
      newErrors.quantity = 'Quantity must be greater than 0';
    }

    if (!formData.date) {
      newErrors.date = 'Trade date is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = async () => {
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    // TODO: Save trade to backend/storage
    console.log('Trade data:', formData);
    
    setIsLoading(false);
    router.back();
  };

  const handleCancel = () => {
    router.back();
  };

  return (
    <AddTradeScreen
      formData={formData}
      errors={errors}
      onFieldChange={handleFieldChange}
      onSave={handleSave}
      onCancel={handleCancel}
      isLoading={isLoading}
    />
  );
}

