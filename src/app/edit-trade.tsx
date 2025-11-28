import { EditTradeScreen } from '@/screens/edit-trade';
import { router, useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';

export default function EditTradeRoute() {
  const params = useLocalSearchParams();
  const tradeId = params.id as string;

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

  // Load trade data when component mounts or tradeId changes
  useEffect(() => {
    if (tradeId) {
      // TODO: Load trade data from your state management/storage
      // For now, using placeholder data
      setFormData({
        type: 'buy',
        assetType: 'stock',
        ticker: 'AAPL',
        price: '150.00',
        quantity: '10',
        date: new Date('2024-01-15'),
        notes: '',
      });
    }
  }, [tradeId]);

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
    
    // TODO: Update trade in backend/storage
    console.log('Updated trade data:', formData);
    
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
    
    // TODO: Delete trade from backend/storage
    console.log('Deleting trade:', tradeId);
    
    setIsLoading(false);
    router.back();
  };

  return (
    <EditTradeScreen
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

