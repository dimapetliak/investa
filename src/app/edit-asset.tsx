import { EditAssetScreen } from '@/screens/edit-asset';
import { router, useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';

export default function EditAssetRoute() {
  const params = useLocalSearchParams();
  const ticker = params.ticker as string;

  const [formData, setFormData] = useState({
    assetType: 'stock' as const,
    ticker: ticker || '',
    quantity: '',
    purchasePrice: '',
    purchaseDate: undefined as Date | undefined,
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  // Load asset data when component mounts or ticker changes
  useEffect(() => {
    if (ticker) {
      // TODO: Load asset data from your state management/storage
      // For now, using placeholder data
      setFormData({
        assetType: 'stock',
        ticker: ticker,
        quantity: '10',
        purchasePrice: '150.00',
        purchaseDate: new Date(),
        notes: '',
      });
    }
  }, [ticker]);

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
    
    // TODO: Update asset in backend/storage
    console.log('Updated asset data:', formData);
    
    setIsLoading(false);
    router.back();
  };

  const handleCancel = () => {
    router.back();
  };

  const handleDelete = async () => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    // TODO: Delete asset from backend/storage
    console.log('Deleting asset:', ticker);
    
    setIsLoading(false);
    router.back();
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

