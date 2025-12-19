import { persist } from '@/lib/persistence';
import { STORAGE_KEYS } from '@/lib/storage';
import type { CreateTradeInput, Trade, UpdateTradeInput } from '@/types';
import { create } from 'zustand';

interface TradesState {
  trades: Trade[];

  // Actions
  addTrade: (input: CreateTradeInput) => Trade;
  addTrades: (inputs: CreateTradeInput[]) => Trade[];
  updateTrade: (id: string, input: UpdateTradeInput) => void;
  deleteTrade: (id: string) => void;
  getTradeById: (id: string) => Trade | undefined;
  getTradesByAssetId: (assetId: string) => Trade[];
  clearTrades: () => void;
}

const generateId = (): string => {
  return `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
};

export const useTradesStore = create<TradesState>()(
  persist(
    (set, get) => ({
  trades: [],

  addTrade: (input: CreateTradeInput) => {
    const newTrade: Trade = {
      id: generateId(),
      ...input,
    };

    set((state) => ({
      trades: [...state.trades, newTrade],
    }));

    return newTrade;
  },

  addTrades: (inputs: CreateTradeInput[]) => {
    const newTrades: Trade[] = inputs.map((input) => ({
      id: generateId(),
      ...input,
    }));

    set((state) => ({
      trades: [...state.trades, ...newTrades],
    }));

    return newTrades;
  },

  updateTrade: (id: string, input: UpdateTradeInput) => {
    set((state) => ({
      trades: state.trades.map((trade) =>
        trade.id === id ? { ...trade, ...input } : trade
      ),
    }));
  },

  deleteTrade: (id: string) => {
    set((state) => ({
      trades: state.trades.filter((trade) => trade.id !== id),
    }));
  },

  getTradeById: (id: string) => {
    return get().trades.find((trade) => trade.id === id);
  },

  getTradesByAssetId: (assetId: string) => {
    return get().trades.filter((trade) => trade.assetId === assetId);
  },

  clearTrades: () => {
    set({ trades: [] });
  },
    }),
    {
      name: STORAGE_KEYS.TRADES,
      partialize: (state) => ({ trades: state.trades }),
    }
  )
);
