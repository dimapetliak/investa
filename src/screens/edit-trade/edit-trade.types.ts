import type { TradeType } from '@/types';

export type EditTradeFormData = {
  type: TradeType;
  quantity: string;
  price: string;
  fee: string;
  timestamp: Date;
  comment: string;
};

export type EditTradeFormErrors = {
  type?: string;
  quantity?: string;
  price?: string;
  fee?: string;
  timestamp?: string;
  comment?: string;
};

export type EditTradeScreenProps = {
  formData: EditTradeFormData;
  errors: EditTradeFormErrors;
  assetTicker?: string;
  onFieldChange: (field: keyof EditTradeFormData, value: any) => void;
  onSave: () => void;
  onCancel: () => void;
  onDelete: () => void;
  isLoading?: boolean;
};
