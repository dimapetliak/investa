export type TradeType = 'buy' | 'sell';

export interface Trade {
  id: string;
  assetId: string;
  type: TradeType;
  quantity: number;
  price: number;
  fee?: number;
  timestamp: string; // ISO 8601 format
  comment?: string;
}

export interface CreateTradeInput {
  assetId: string;
  type: TradeType;
  quantity: number;
  price: number;
  fee?: number;
  timestamp: string;
  comment?: string;
}

export interface UpdateTradeInput {
  type?: TradeType;
  quantity?: number;
  price?: number;
  fee?: number;
  timestamp?: string;
  comment?: string;
}
