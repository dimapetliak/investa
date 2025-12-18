import type { TradeType } from '@/types';

export type AddTradeFormData = {
  assetId: string;
  type: TradeType;
  quantity: string;
  price: string;
  fee: string;
  timestamp: Date;
  comment: string;
};

export type AddTradeFormErrors = {
  assetId?: string;
  type?: string;
  quantity?: string;
  price?: string;
  fee?: string;
  timestamp?: string;
  comment?: string;
};

export type AddTradeScreenProps = {
  formData: AddTradeFormData;
  errors: AddTradeFormErrors;
  assetTicker?: string;
  onFieldChange: (field: keyof AddTradeFormData, value: any) => void;
  onSave: () => void;
  onCancel: () => void;
  isLoading?: boolean;
};
