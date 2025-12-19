import { persist } from '@/lib/persistence';
import { STORAGE_KEYS } from '@/lib/storage';
import { create } from 'zustand';

interface UserProfile {
  name: string;
  avatarUrl?: string;
}

interface UserState {
  profile: UserProfile;
  isHydrated: boolean;

  // Actions
  setProfile: (profile: Partial<UserProfile>) => void;
  setName: (name: string) => void;
  
  // Utilities
  resetProfile: () => void;
  setHydrated: () => void;
}

const DEFAULT_PROFILE: UserProfile = {
  name: 'Investor',
  avatarUrl: undefined,
};

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      profile: DEFAULT_PROFILE,
      isHydrated: false,

      setHydrated: () => set({ isHydrated: true }),

      setProfile: (updates: Partial<UserProfile>) => {
        set((state) => ({
          profile: {
            ...state.profile,
            ...updates,
            name: updates.name?.trim() || state.profile.name,
          },
        }));
      },

      setName: (name: string) => {
        const trimmedName = name.trim();
        if (trimmedName.length === 0) {
          console.warn('Attempted to set empty name');
          return;
        }
        set((state) => ({
          profile: { ...state.profile, name: trimmedName },
        }));
      },

      resetProfile: () => {
        set({ profile: DEFAULT_PROFILE });
      },
    }),
    {
      name: STORAGE_KEYS.USER_PROFILE,
      partialize: (state) => ({ profile: state.profile }),
      onRehydrateStorage: () => (state) => {
        state?.setHydrated();
      },
    }
  )
);

// Selector hooks
export const useUserProfile = () => useUserStore((state) => state.profile);
export const useUserName = () => useUserStore((state) => state.profile.name);
export const useUserHydrated = () => useUserStore((state) => state.isHydrated);

