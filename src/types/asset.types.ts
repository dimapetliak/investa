export type AssetType = 'stock' | 'crypto';

// Extended currency support matching settings options
export type CurrencyCode = 
  | 'USD' 
  | 'EUR' 
  | 'GBP' 
  | 'JPY' 
  | 'CAD' 
  | 'AUD' 
  | 'CHF';

export interface Asset {
  id: string;
  type: AssetType;
  ticker: string;
  name: string;
  currency: CurrencyCode;
  createdAt?: string; // ISO timestamp
  updatedAt?: string; // ISO timestamp
}

export interface CreateAssetInput {
  type: AssetType;
  ticker: string;
  name: string;
  currency: CurrencyCode;
}

export interface UpdateAssetInput {
  ticker?: string;
  name?: string;
  currency?: CurrencyCode;
}
