import type { StateCreator, StoreMutatorIdentifier } from 'zustand';
import { storageHelpers } from './storage';

type PersistOptions<T> = {
  name: string;
  version?: number;
  migrate?: (persistedState: unknown, version: number) => T;
  partialize?: (state: T) => Partial<T>;
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
  const { name, partialize } = options;

  // Hydrate state from storage on init
  const persistedState = storageHelpers.getItem<Partial<ReturnType<typeof get>>>(name);

  // Initialize store with persisted state
  const initialState = config(
    (args) => {
      set(args);
      // After each state change, persist to storage
      const state = get();
      const stateToPersist = partialize ? partialize(state) : state;
      storageHelpers.setItem(name, stateToPersist);
    },
    get,
    api
  );

  // Merge persisted state with initial state
  if (persistedState) {
    return {
      ...initialState,
      ...persistedState,
    };
  }

  return initialState;
};

export const persist = persistImpl as Persist;
