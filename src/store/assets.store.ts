import { generateId } from '@/lib/id';
import { persist } from '@/lib/persistence';
import { STORAGE_KEYS } from '@/lib/storage';
import type { Asset, CreateAssetInput, UpdateAssetInput } from '@/types';
import { create } from 'zustand';

interface AssetsState {
  assets: Asset[];
  isHydrated: boolean;
  
  // Actions
  addAsset: (input: CreateAssetInput) => Asset;
  addAssets: (inputs: CreateAssetInput[]) => Asset[];
  updateAsset: (id: string, input: UpdateAssetInput) => void;
  deleteAsset: (id: string) => void;
  
  // Selectors
  getAssetById: (id: string) => Asset | undefined;
  getAssetByTicker: (ticker: string) => Asset | undefined;
  
  // Utilities
  clearAssets: () => void;
  setHydrated: () => void;
}

/**
 * Validates asset input data.
 * @throws Error if validation fails
 */
const validateAssetInput = (input: CreateAssetInput): void => {
  if (!input.ticker || input.ticker.trim().length === 0) {
    throw new Error('Asset ticker is required');
  }
  if (!input.name || input.name.trim().length === 0) {
    throw new Error('Asset name is required');
  }
  if (!input.type || !['stock', 'crypto'].includes(input.type)) {
    throw new Error('Invalid asset type');
  }
};

export const useAssetsStore = create<AssetsState>()(
  persist(
    (set, get) => ({
      assets: [],
      isHydrated: false,

      setHydrated: () => set({ isHydrated: true }),

      addAsset: (input: CreateAssetInput) => {
        validateAssetInput(input);
        
        // Check for duplicate ticker
        const existing = get().getAssetByTicker(input.ticker);
        if (existing) {
          throw new Error(`Asset with ticker "${input.ticker}" already exists`);
        }

        const now = new Date().toISOString();
        const newAsset: Asset = {
          id: generateId(),
          ...input,
          ticker: input.ticker.toUpperCase().trim(),
          name: input.name.trim(),
          createdAt: now,
          updatedAt: now,
        };

        set((state) => ({
          assets: [...state.assets, newAsset],
        }));

        return newAsset;
      },

      addAssets: (inputs: CreateAssetInput[]) => {
        const now = new Date().toISOString();
        const existingTickers = new Set(get().assets.map(a => a.ticker.toUpperCase()));
        const newAssets: Asset[] = [];

        for (const input of inputs) {
          validateAssetInput(input);
          const ticker = input.ticker.toUpperCase().trim();
          
          // Skip duplicates
          if (existingTickers.has(ticker)) {
            continue;
          }

          existingTickers.add(ticker);
          newAssets.push({
            id: generateId(),
            ...input,
            ticker,
            name: input.name.trim(),
            createdAt: now,
            updatedAt: now,
          });
        }

        if (newAssets.length > 0) {
          set((state) => ({
            assets: [...state.assets, ...newAssets],
          }));
        }

        return newAssets;
      },

      updateAsset: (id: string, input: UpdateAssetInput) => {
        const asset = get().getAssetById(id);
        if (!asset) {
          throw new Error(`Asset with ID "${id}" not found`);
        }

        // Check ticker uniqueness if changing ticker
        if (input.ticker) {
          const existingWithTicker = get().getAssetByTicker(input.ticker);
          if (existingWithTicker && existingWithTicker.id !== id) {
            throw new Error(`Asset with ticker "${input.ticker}" already exists`);
          }
        }

        const now = new Date().toISOString();
        set((state) => ({
          assets: state.assets.map((asset) =>
            asset.id === id
              ? {
                  ...asset,
                  ...input,
                  ticker: input.ticker?.toUpperCase().trim() ?? asset.ticker,
                  name: input.name?.trim() ?? asset.name,
                  updatedAt: now,
                }
              : asset
          ),
        }));
      },

      deleteAsset: (id: string) => {
        const asset = get().getAssetById(id);
        if (!asset) {
          console.warn(`Attempted to delete non-existent asset: ${id}`);
          return;
        }

        set((state) => ({
          assets: state.assets.filter((asset) => asset.id !== id),
        }));

        // Note: Trades cleanup should be handled by the caller or via a combined action
        // to maintain data integrity. See deleteAssetWithTrades in a service layer.
      },

      getAssetById: (id: string) => {
        return get().assets.find((asset) => asset.id === id);
      },

      getAssetByTicker: (ticker: string) => {
        const normalizedTicker = ticker.toUpperCase().trim();
        return get().assets.find(
          (asset) => asset.ticker.toUpperCase() === normalizedTicker
        );
      },

      clearAssets: () => {
        set({ assets: [] });
      },
    }),
    {
      name: STORAGE_KEYS.ASSETS,
      partialize: (state) => ({ assets: state.assets }),
      onRehydrateStorage: () => (state) => {
        state?.setHydrated();
      },
    }
  )
);

// Selector hooks for optimized subscriptions
export const useAssets = () => useAssetsStore((state) => state.assets);
export const useAssetsHydrated = () => useAssetsStore((state) => state.isHydrated);
