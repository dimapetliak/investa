import { generateId, isValidId } from '@/lib/id';
import { persist } from '@/lib/persistence';
import { STORAGE_KEYS } from '@/lib/storage';
import type { CreateTradeInput, Trade, UpdateTradeInput } from '@/types';
import { create } from 'zustand';

interface TradesState {
  trades: Trade[];
  isHydrated: boolean;

  // Actions
  addTrade: (input: CreateTradeInput) => Trade;
  addTrades: (inputs: CreateTradeInput[]) => Trade[];
  updateTrade: (id: string, input: UpdateTradeInput) => void;
  deleteTrade: (id: string) => void;
  deleteTradesByAssetId: (assetId: string) => number; // Returns count of deleted trades
  
  // Selectors
  getTradeById: (id: string) => Trade | undefined;
  getTradesByAssetId: (assetId: string) => Trade[];
  
  // Utilities
  clearTrades: () => void;
  setHydrated: () => void;
}

/**
 * Validates trade input data.
 * @throws Error if validation fails
 */
const validateTradeInput = (input: CreateTradeInput): void => {
  if (!input.assetId || !isValidId(input.assetId)) {
    throw new Error('Valid asset ID is required');
  }
  if (!input.type || !['buy', 'sell'].includes(input.type)) {
    throw new Error('Trade type must be "buy" or "sell"');
  }
  if (typeof input.quantity !== 'number' || input.quantity <= 0) {
    throw new Error('Quantity must be a positive number');
  }
  if (typeof input.price !== 'number' || input.price < 0) {
    throw new Error('Price must be a non-negative number');
  }
  if (input.fee !== undefined && (typeof input.fee !== 'number' || input.fee < 0)) {
    throw new Error('Fee must be a non-negative number');
  }
  if (!input.timestamp) {
    throw new Error('Timestamp is required');
  }
  // Validate timestamp format
  const date = new Date(input.timestamp);
  if (isNaN(date.getTime())) {
    throw new Error('Invalid timestamp format');
  }
};

export const useTradesStore = create<TradesState>()(
  persist(
    (set, get) => ({
      trades: [],
      isHydrated: false,

      setHydrated: () => set({ isHydrated: true }),

      addTrade: (input: CreateTradeInput) => {
        validateTradeInput(input);

        const newTrade: Trade = {
          id: generateId(),
          assetId: input.assetId,
          type: input.type,
          quantity: input.quantity,
          price: input.price,
          fee: input.fee,
          timestamp: input.timestamp,
          comment: input.comment?.trim(),
        };

        set((state) => ({
          trades: [...state.trades, newTrade],
        }));

        return newTrade;
      },

      addTrades: (inputs: CreateTradeInput[]) => {
        const newTrades: Trade[] = [];

        for (const input of inputs) {
          validateTradeInput(input);
          newTrades.push({
            id: generateId(),
            assetId: input.assetId,
            type: input.type,
            quantity: input.quantity,
            price: input.price,
            fee: input.fee,
            timestamp: input.timestamp,
            comment: input.comment?.trim(),
          });
        }

        if (newTrades.length > 0) {
          set((state) => ({
            trades: [...state.trades, ...newTrades],
          }));
        }

        return newTrades;
      },

      updateTrade: (id: string, input: UpdateTradeInput) => {
        const trade = get().getTradeById(id);
        if (!trade) {
          throw new Error(`Trade with ID "${id}" not found`);
        }

        // Validate individual fields if provided
        if (input.type !== undefined && !['buy', 'sell'].includes(input.type)) {
          throw new Error('Trade type must be "buy" or "sell"');
        }
        if (input.quantity !== undefined && (typeof input.quantity !== 'number' || input.quantity <= 0)) {
          throw new Error('Quantity must be a positive number');
        }
        if (input.price !== undefined && (typeof input.price !== 'number' || input.price < 0)) {
          throw new Error('Price must be a non-negative number');
        }
        if (input.fee !== undefined && (typeof input.fee !== 'number' || input.fee < 0)) {
          throw new Error('Fee must be a non-negative number');
        }
        if (input.timestamp !== undefined) {
          const date = new Date(input.timestamp);
          if (isNaN(date.getTime())) {
            throw new Error('Invalid timestamp format');
          }
        }

        set((state) => ({
          trades: state.trades.map((trade) =>
            trade.id === id
              ? {
                  ...trade,
                  ...input,
                  comment: input.comment !== undefined ? input.comment?.trim() : trade.comment,
                }
              : trade
          ),
        }));
      },

      deleteTrade: (id: string) => {
        const trade = get().getTradeById(id);
        if (!trade) {
          console.warn(`Attempted to delete non-existent trade: ${id}`);
          return;
        }

        set((state) => ({
          trades: state.trades.filter((trade) => trade.id !== id),
        }));
      },

      deleteTradesByAssetId: (assetId: string) => {
        const tradesToDelete = get().getTradesByAssetId(assetId);
        const count = tradesToDelete.length;

        if (count > 0) {
          set((state) => ({
            trades: state.trades.filter((trade) => trade.assetId !== assetId),
          }));
        }

        return count;
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
      onRehydrateStorage: () => (state) => {
        state?.setHydrated();
      },
    }
  )
);

// Selector hooks for optimized subscriptions
export const useTrades = () => useTradesStore((state) => state.trades);
export const useTradesHydrated = () => useTradesStore((state) => state.isHydrated);
