/**
 * Price Store
 * 
 * Caches asset prices for offline access and quick lookups.
 * React Query is the source of truth for fresh data.
 * This store provides persistence and fallback for offline scenarios.
 */

import { persist } from '@/lib/persistence';
import { STORAGE_KEYS } from '@/lib/storage';
import { create } from 'zustand';

export interface CachedPrice {
  symbol: string;
  price: number;
  change: number;
  changePercent: number;
  lastUpdated: string;
  type: 'stock' | 'crypto';
}

interface PricesState {
  prices: Record<string, CachedPrice>;
  lastGlobalUpdate: string | null;
  
  // Actions
  setPrice: (symbol: string, price: CachedPrice) => void;
  setPrices: (prices: CachedPrice[]) => void;
  getPrice: (symbol: string) => CachedPrice | undefined;
  clearPrices: () => void;
}

export const usePricesStore = create<PricesState>()(
  persist(
    (set, get) => ({
      prices: {},
      lastGlobalUpdate: null,

      setPrice: (symbol: string, price: CachedPrice) => {
        set((state) => ({
          prices: {
            ...state.prices,
            [symbol.toUpperCase()]: price,
          },
          lastGlobalUpdate: new Date().toISOString(),
        }));
      },

      setPrices: (prices: CachedPrice[]) => {
        set((state) => {
          const newPrices = { ...state.prices };
          for (const price of prices) {
            newPrices[price.symbol.toUpperCase()] = price;
          }
          return {
            prices: newPrices,
            lastGlobalUpdate: new Date().toISOString(),
          };
        });
      },

      getPrice: (symbol: string) => {
        return get().prices[symbol.toUpperCase()];
      },

      clearPrices: () => {
        set({ prices: {}, lastGlobalUpdate: null });
      },
    }),
    {
      name: STORAGE_KEYS.PRICES || 'investa_prices',
      partialize: (state) => ({
        prices: state.prices,
        lastGlobalUpdate: state.lastGlobalUpdate,
      }),
    }
  )
);

// Selector hooks
export const useCachedPrice = (symbol: string) =>
  usePricesStore((state) => state.prices[symbol.toUpperCase()]);

export const useLastPriceUpdate = () =>
  usePricesStore((state) => state.lastGlobalUpdate);

