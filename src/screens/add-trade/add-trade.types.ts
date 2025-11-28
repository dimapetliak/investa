import { AssetType } from '@/components/_shared/asset-tag/asset-tag.types';
import { TradeType } from '@/components/_shared/trade-row/trade-row.types';

export type AddTradeFormData = {
  type: TradeType;
  assetType: AssetType;
  ticker: string;
  price: string;
  quantity: string;
  date?: Date;
  notes?: string;
};

export type AddTradeFormErrors = {
  type?: string;
  assetType?: string;
  ticker?: string;
  price?: string;
  quantity?: string;
  date?: string;
  notes?: string;
};

export type AddTradeScreenProps = {
  formData: AddTradeFormData;
  errors: AddTradeFormErrors;
  onFieldChange: (field: keyof AddTradeFormData, value: any) => void;
  onSave: () => void;
  onCancel: () => void;
  isLoading?: boolean;
};

