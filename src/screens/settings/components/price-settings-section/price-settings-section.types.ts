import type {
  CryptoPriceSource,
  PriceRefreshInterval,
  StockPriceSource,
} from '@/store';

export interface PriceSettingsSectionProps {
  priceRefreshInterval: PriceRefreshInterval;
  onPriceRefreshIntervalChange: (interval: PriceRefreshInterval) => void;
  stockPriceSource: StockPriceSource;
  onStockPriceSourceChange: (source: StockPriceSource) => void;
  cryptoPriceSource: CryptoPriceSource;
  onCryptoPriceSourceChange: (source: CryptoPriceSource) => void;
}

