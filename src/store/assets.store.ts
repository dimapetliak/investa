import { persist } from '@/lib/persistence';
import { STORAGE_KEYS } from '@/lib/storage';
import type { Asset, CreateAssetInput, UpdateAssetInput } from '@/types';
import { create } from 'zustand';

interface AssetsState {
  assets: Asset[];
  addAsset: (input: CreateAssetInput) => Asset;
  updateAsset: (id: string, input: UpdateAssetInput) => void;
  deleteAsset: (id: string) => void;
  getAssetById: (id: string) => Asset | undefined;
  clearAssets: () => void;
}

const generateId = (): string => {
  return `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
};

export const useAssetsStore = create<AssetsState>()(
  persist(
    (set, get) => ({
  assets: [],

  addAsset: (input: CreateAssetInput) => {
    const newAsset: Asset = {
      id: generateId(),
      ...input,
    };

    set((state) => ({
      assets: [...state.assets, newAsset],
    }));

    return newAsset;
  },

  updateAsset: (id: string, input: UpdateAssetInput) => {
    set((state) => ({
      assets: state.assets.map((asset) =>
        asset.id === id ? { ...asset, ...input } : asset
      ),
    }));
  },

  deleteAsset: (id: string) => {
    set((state) => ({
      assets: state.assets.filter((asset) => asset.id !== id),
    }));
  },

  getAssetById: (id: string) => {
    return get().assets.find((asset) => asset.id === id);
  },

  clearAssets: () => {
    set({ assets: [] });
  },
    }),
    {
      name: STORAGE_KEYS.ASSETS,
      partialize: (state) => ({ assets: state.assets }),
    }
  )
);
