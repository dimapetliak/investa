import { AssetType } from '@/components/_shared/asset-tag/asset-tag.types';

export type AddAssetFormData = {
  assetType: AssetType;
  ticker: string;
  quantity: string;
  purchasePrice: string;
  purchaseDate?: Date;
  notes?: string;
};

export type AddAssetFormErrors = {
  assetType?: string;
  ticker?: string;
  quantity?: string;
  purchasePrice?: string;
  purchaseDate?: string;
  notes?: string;
};

export type AddAssetScreenProps = {
  formData: AddAssetFormData;
  errors: AddAssetFormErrors;
  onFieldChange: (field: keyof AddAssetFormData, value: any) => void;
  onSave: () => void;
  onCancel: () => void;
  isLoading?: boolean;
};

