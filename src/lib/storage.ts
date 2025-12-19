import { createMMKV } from 'react-native-mmkv';

// Initialize MMKV instance
export const storage = createMMKV({
  id: 'investa-storage',
});

// Storage keys - centralized for consistency
export const STORAGE_KEYS = {
  // Core data
  ASSETS: 'investa:assets',
  TRADES: 'investa:trades',
  
  // User
  USER_PROFILE: 'investa:user-profile',
  USER_PREFERENCES: 'investa:user-preferences',
  
  // App state
  ONBOARDING_COMPLETED: 'investa:onboarding-completed',
} as const;

export type StorageKey = typeof STORAGE_KEYS[keyof typeof STORAGE_KEYS];

// Generic helpers with improved error handling
export const storageHelpers = {
  /**
   * Save a value to storage.
   * @returns true if successful, false otherwise
   */
  setItem: <T>(key: string, value: T): boolean => {
    try {
      const jsonValue = JSON.stringify(value);
      storage.set(key, jsonValue);
      return true;
    } catch (error) {
      console.error(`[Storage] Error saving ${key}:`, error);
      return false;
    }
  },

  /**
   * Retrieve a value from storage.
   * @returns The parsed value or null if not found/error
   */
  getItem: <T>(key: string): T | null => {
    try {
      const jsonValue = storage.getString(key);
      if (jsonValue === undefined) {
        return null;
      }
      return JSON.parse(jsonValue) as T;
    } catch (error) {
      console.error(`[Storage] Error reading ${key}:`, error);
      return null;
    }
  },

  /**
   * Remove a value from storage.
   * @returns true if successful, false otherwise
   */
  removeItem: (key: string): boolean => {
    try {
      storage.remove(key);
      return true;
    } catch (error) {
      console.error(`[Storage] Error removing ${key}:`, error);
      return false;
    }
  },

  /**
   * Check if a key exists in storage.
   */
  hasItem: (key: string): boolean => {
    try {
      return storage.contains(key);
    } catch (error) {
      console.error(`[Storage] Error checking ${key}:`, error);
      return false;
    }
  },

  /**
   * Clear all app storage.
   * @returns true if successful, false otherwise
   */
  clearAll: (): boolean => {
    try {
      storage.clearAll();
      return true;
    } catch (error) {
      console.error('[Storage] Error clearing storage:', error);
      return false;
    }
  },

  /**
   * Get all storage keys.
   */
  getAllKeys: (): string[] => {
    try {
      return storage.getAllKeys();
    } catch (error) {
      console.error('[Storage] Error getting all keys:', error);
      return [];
    }
  },

  /**
   * Get storage size in bytes (approximate).
   */
  getStorageSize: (): number => {
    try {
      const keys = storage.getAllKeys();
      let size = 0;
      for (const key of keys) {
        const value = storage.getString(key);
        if (value) {
          size += key.length + value.length;
        }
      }
      return size;
    } catch (error) {
      console.error('[Storage] Error calculating size:', error);
      return 0;
    }
  },
};
