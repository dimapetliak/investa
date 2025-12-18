import { EditAssetScreen } from '@/screens/edit-asset';
import { useAssetsStore } from '@/store';
import type { AssetType, CurrencyCode } from '@/types';
import { router, useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';

export default function EditAssetRoute() {
  const params = useLocalSearchParams();
  const assetId = params.id as string;

  const getAssetById = useAssetsStore((state) => state.getAssetById);
  const updateAsset = useAssetsStore((state) => state.updateAsset);
  const deleteAsset = useAssetsStore((state) => state.deleteAsset);

  const asset = getAssetById(assetId);

  const [formData, setFormData] = useState<{
    type: AssetType;
    ticker: string;
    name: string;
    currency: CurrencyCode;
  }>({
    type: 'stock',
    ticker: '',
    name: '',
    currency: 'USD',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  // Load asset data
  useEffect(() => {
    if (asset) {
      setFormData({
        type: asset.type,
        ticker: asset.ticker,
        name: asset.name,
        currency: asset.currency,
      });
    }
  }, [asset]);

  // If asset doesn't exist, go back
  if (!asset) {
    router.back();
    return null;
  }

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
      updateAsset(assetId, formData);
      router.back();
    } catch (error) {
      console.error('Error updating asset:', error);
      setErrors({ ticker: 'Failed to update asset' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    router.back();
  };

  const handleDelete = () => {
    Alert.alert('Delete Asset', 'Are you sure you want to delete this asset and all its trades?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: () => {
          deleteAsset(assetId);
          router.replace('/assets');
        },
      },
    ]);
  };

  return (
    <EditAssetScreen
      formData={formData}
      errors={errors}
      onFieldChange={handleFieldChange}
      onSave={handleSave}
      onCancel={handleCancel}
      onDelete={handleDelete}
      isLoading={isLoading}
    />
  );
}
