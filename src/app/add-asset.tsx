import { AddAssetScreen } from '@/screens/add-asset';
import { router } from 'expo-router';
import React, { useState } from 'react';

export default function AddAssetRoute() {
  const [formData, setFormData] = useState({
    assetType: 'stock' as const,
    ticker: '',
    quantity: '',
    purchasePrice: '',
    purchaseDate: undefined as Date | undefined,
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when field changes
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.assetType) {
      newErrors.assetType = 'Asset type is required';
    }

    if (!formData.ticker.trim()) {
      newErrors.ticker = 'Ticker symbol is required';
    }

    if (!formData.quantity || parseFloat(formData.quantity) <= 0) {
      newErrors.quantity = 'Quantity must be greater than 0';
    }

    if (!formData.purchasePrice || parseFloat(formData.purchasePrice) <= 0) {
      newErrors.purchasePrice = 'Purchase price must be greater than 0';
    }

    if (!formData.purchaseDate) {
      newErrors.purchaseDate = 'Purchase date is required';
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
    
    // TODO: Save asset to backend/storage
    console.log('Asset data:', formData);
    
    setIsLoading(false);
    router.back();
  };

  const handleCancel = () => {
    router.back();
  };

  return (
    <AddAssetScreen
      formData={formData}
      errors={errors}
      onFieldChange={handleFieldChange}
      onSave={handleSave}
      onCancel={handleCancel}
      isLoading={isLoading}
    />
  );
}
