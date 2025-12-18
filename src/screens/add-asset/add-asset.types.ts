import type { AssetType, CurrencyCode } from '@/types';

export type AddAssetFormData = {
  type: AssetType;
  ticker: string;
  name: string;
  currency: CurrencyCode;
};

export type AddAssetFormErrors = {
  type?: string;
  ticker?: string;
  name?: string;
  currency?: string;
};

export type AddAssetScreenProps = {
  formData: AddAssetFormData;
  errors: AddAssetFormErrors;
  onFieldChange: (field: keyof AddAssetFormData, value: any) => void;
  onSave: () => void;
  onCancel: () => void;
  isLoading?: boolean;
};

