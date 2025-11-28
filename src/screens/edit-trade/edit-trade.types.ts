import { AssetType } from '@/components/_shared/asset-tag/asset-tag.types';
import { TradeType } from '@/components/_shared/trade-row/trade-row.types';

export type EditTradeFormData = {
  type: TradeType;
  assetType: AssetType;
  ticker: string;
  price: string;
  quantity: string;
  date?: Date;
  notes?: string;
};

export type EditTradeFormErrors = {
  type?: string;
  assetType?: string;
  ticker?: string;
  price?: string;
  quantity?: string;
  date?: string;
  notes?: string;
};

export type EditTradeScreenProps = {
  formData: EditTradeFormData;
  errors: EditTradeFormErrors;
  onFieldChange: (field: keyof EditTradeFormData, value: any) => void;
  onSave: () => void;
  onCancel: () => void;
  onDelete: () => void;
  isLoading?: boolean;
};

