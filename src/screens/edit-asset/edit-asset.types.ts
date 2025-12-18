import type { AssetType, CurrencyCode } from '@/types';

export type EditAssetFormData = {
  type: AssetType;
  ticker: string;
  name: string;
  currency: CurrencyCode;
};

export type EditAssetFormErrors = {
  type?: string;
  ticker?: string;
  name?: string;
  currency?: string;
};

export type EditAssetScreenProps = {
  formData: EditAssetFormData;
  errors: EditAssetFormErrors;
  onFieldChange: (field: keyof EditAssetFormData, value: any) => void;
  onSave: () => void;
  onCancel: () => void;
  onDelete: () => void;
  isLoading?: boolean;
};
