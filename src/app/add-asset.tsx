import { AddAssetScreen } from '@/screens/add-asset';
import { useAssetsStore } from '@/store';
import { router } from 'expo-router';
import React, { useState } from 'react';

export default function AddAssetRoute() {
  const addAsset = useAssetsStore((state) => state.addAsset);

  const [formData, setFormData] = useState({
    type: 'stock' as const,
    ticker: '',
    name: '',
    currency: 'USD' as const,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when field changes
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
      newErrors.type = 'Asset type is required';
    }

    if (!formData.ticker.trim()) {
      newErrors.ticker = 'Ticker symbol is required';
    }

    if (!formData.name.trim()) {
      newErrors.name = 'Asset name is required';
    }

    if (!formData.currency) {
      newErrors.currency = 'Currency is required';
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
      // Add asset to store
      const asset = addAsset(formData);

      // Navigate to asset details to add first trade
      router.replace(`/asset-details?id=${asset.id}`);
    } catch (error) {
      console.error('Error adding asset:', error);
      setErrors({ ticker: 'Failed to add asset' });
    } finally {
      setIsLoading(false);
    }
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
