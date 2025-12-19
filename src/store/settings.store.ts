import { persist } from '@/lib/persistence';
import { STORAGE_KEYS } from '@/lib/storage';
import { create } from 'zustand';

export type PriceRefreshInterval = 'manual' | '1min' | '5min' | '15min' | '1hour';

export type StockPriceSource = 'yahoo' | 'alphavantage';
export type CryptoPriceSource = 'coingecko' | 'binance';

export interface SecuritySettings {
  useFaceId: boolean;
  usePin: boolean;
}

interface SettingsState {
  baseCurrency: string;
  setBaseCurrency: (currency: string) => void;
  priceRefreshInterval: PriceRefreshInterval;
  setPriceRefreshInterval: (interval: PriceRefreshInterval) => void;
  stockPriceSource: StockPriceSource;
  setStockPriceSource: (source: StockPriceSource) => void;
  cryptoPriceSource: CryptoPriceSource;
  setCryptoPriceSource: (source: CryptoPriceSource) => void;
  security: SecuritySettings;
  setSecurity: (settings: Partial<SecuritySettings>) => void;
  resetToDefaults: () => void;
}

const DEFAULT_SETTINGS = {
  baseCurrency: 'USD',
  priceRefreshInterval: 'manual' as PriceRefreshInterval,
  stockPriceSource: 'yahoo' as StockPriceSource,
  cryptoPriceSource: 'coingecko' as CryptoPriceSource,
  security: {
    useFaceId: false,
    usePin: false,
  },
};

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      ...DEFAULT_SETTINGS,

      setBaseCurrency: (currency: string) => {
        set({ baseCurrency: currency });
      },

      setPriceRefreshInterval: (interval: PriceRefreshInterval) => {
        set({ priceRefreshInterval: interval });
      },

      setStockPriceSource: (source: StockPriceSource) => {
        set({ stockPriceSource: source });
      },

      setCryptoPriceSource: (source: CryptoPriceSource) => {
        set({ cryptoPriceSource: source });
      },

      setSecurity: (settings: Partial<SecuritySettings>) => {
        set((state) => ({
          security: { ...state.security, ...settings },
        }));
      },

      resetToDefaults: () => {
        set(DEFAULT_SETTINGS);
      },
    }),
    {
      name: STORAGE_KEYS.USER_PREFERENCES,
      partialize: (state) => ({
        baseCurrency: state.baseCurrency,
        priceRefreshInterval: state.priceRefreshInterval,
        stockPriceSource: state.stockPriceSource,
        cryptoPriceSource: state.cryptoPriceSource,
        security: state.security,
      }),
    }
  )
);

