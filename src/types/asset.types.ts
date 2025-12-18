export type AssetType = 'stock' | 'crypto';

export type CurrencyCode = 'USD' | 'EUR';

export interface Asset {
  id: string;
  type: AssetType;
  ticker: string;
  name: string;
  currency: CurrencyCode;
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
