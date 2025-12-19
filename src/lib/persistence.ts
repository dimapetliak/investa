import type { StateCreator, StoreMutatorIdentifier } from 'zustand';
import { storageHelpers } from './storage';

type PersistOptions<T> = {
  name: string;
  version?: number;
  migrate?: (persistedState: unknown, version: number) => T;
  partialize?: (state: T) => Partial<T>;
  onRehydrateStorage?: () => ((state: T | undefined) => void) | void;
};

type PersistImpl = <
  T,
  Mps extends [StoreMutatorIdentifier, unknown][] = [],
  Mcs extends [StoreMutatorIdentifier, unknown][] = []
>(
  storeInitializer: StateCreator<T, Mps, Mcs>,
  options: PersistOptions<T>
) => StateCreator<T, Mps, Mcs>;

type Persist = <
  T,
  Mps extends [StoreMutatorIdentifier, unknown][] = [],
  Mcs extends [StoreMutatorIdentifier, unknown][] = []
>(
  initializer: StateCreator<T, Mps, Mcs>,
  options: PersistOptions<T>
) => StateCreator<T, Mps, Mcs>;

const persistImpl: PersistImpl = (config, options) => (set, get, api) => {
  const { name, partialize, onRehydrateStorage } = options;

  // Get the rehydration callback if provided
  const onRehydrate = onRehydrateStorage?.();

  // Hydrate state from storage on init
  let persistedState: Partial<ReturnType<typeof get>> | null = null;
  try {
    persistedState = storageHelpers.getItem<Partial<ReturnType<typeof get>>>(name);
  } catch (error) {
    console.error(`[Persist] Error hydrating ${name}:`, error);
  }

  // Create a wrapper for set that persists state changes
  const persistingSet = ((args: unknown) => {
    (set as (args: unknown) => void)(args);
    // After each state change, persist to storage
    try {
      const state = get();
      const stateToPersist = partialize ? partialize(state) : state;
      storageHelpers.setItem(name, stateToPersist);
    } catch (error) {
      console.error(`[Persist] Error persisting ${name}:`, error);
    }
  }) as typeof set;

  // Initialize store with persisted state
  const initialState = config(persistingSet, get, api);

  // Merge persisted state with initial state
  let finalState = initialState;
  if (persistedState) {
    finalState = {
      ...initialState,
      ...persistedState,
    };
  }

  // Call rehydration callback after state is ready
  // Using setTimeout to ensure this runs after the store is fully initialized
  if (onRehydrate) {
    setTimeout(() => {
      onRehydrate(get() as ReturnType<typeof get>);
    }, 0);
  }

  return finalState;
};

export const persist = persistImpl as Persist;
