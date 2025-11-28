import { AssetType } from '@/components/_shared/asset-tag/asset-tag.types';

export type EditAssetFormData = {
  assetType: AssetType;
  ticker: string;
  quantity: string;
  purchasePrice: string;
  purchaseDate?: Date;
  notes?: string;
};

export type EditAssetFormErrors = {
  assetType?: string;
  ticker?: string;
  quantity?: string;
  purchasePrice?: string;
  purchaseDate?: string;
  notes?: string;
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

