import { createMMKV } from 'react-native-mmkv';

// Initialize MMKV instance
export const storage = createMMKV({
  id: 'investa-storage',
});

// Storage keys
export const STORAGE_KEYS = {
  ASSETS: 'assets',
  TRADES: 'trades',
  ONBOARDING_COMPLETED: 'onboarding_completed',
  USER_PREFERENCES: 'user_preferences',
} as const;

// Generic helpers
export const storageHelpers = {
  setItem: <T>(key: string, value: T): void => {
    try {
      const jsonValue = JSON.stringify(value);
      storage.set(key, jsonValue);
    } catch (error) {
      console.error(`Error saving ${key} to storage:`, error);
    }
  },

  getItem: <T>(key: string): T | null => {
    try {
      const jsonValue = storage.getString(key);
      return jsonValue ? JSON.parse(jsonValue) : null;
    } catch (error) {
      console.error(`Error reading ${key} from storage:`, error);
      return null;
    }
  },

  removeItem: (key: string): void => {
    try {
      storage.remove(key);
    } catch (error) {
      console.error(`Error removing ${key} from storage:`, error);
    }
  },

  clearAll: (): void => {
    try {
      storage.clearAll();
    } catch (error) {
      console.error('Error clearing storage:', error);
    }
  },

  getAllKeys: (): string[] => {
    try {
      return storage.getAllKeys();
    } catch (error) {
      console.error('Error getting all keys from storage:', error);
      return [];
    }
  },
};
