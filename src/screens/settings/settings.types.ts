import type {
  CryptoPriceSource,
  PriceRefreshInterval,
  SecuritySettings,
  StockPriceSource,
} from '@/store';

export interface SettingsScreenProps {
  baseCurrency: string;
  onCurrencyChange: (currency: string) => void;
  priceRefreshInterval: PriceRefreshInterval;
  onPriceRefreshIntervalChange: (interval: PriceRefreshInterval) => void;
  stockPriceSource: StockPriceSource;
  onStockPriceSourceChange: (source: StockPriceSource) => void;
  cryptoPriceSource: CryptoPriceSource;
  onCryptoPriceSourceChange: (source: CryptoPriceSource) => void;
  security: SecuritySettings;
  onSecurityChange: (settings: Partial<SecuritySettings>) => void;
  onExportData: () => void;
  onImportData: () => void;
  onLoadSampleData: () => void;
  onClearAllData: () => void;
  stats: {
    assetsCount: number;
    tradesCount: number;
  };
  isExporting?: boolean;
}
