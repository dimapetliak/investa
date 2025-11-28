export interface SettingsState {
  notificationsEnabled: boolean;
  themeModeSelected: string;
  currency: string;
  language: string;
  autoRefreshPrices: string;
}

export interface SettingsActions {
  toggleNotifications: () => void;
  onSelectThemeMode: (value: string) => void;
  onCurrencyChange: (value: string | number) => void;
  onAutoRefreshPricesChange: (value: string | number) => void;
  resetSettings: () => void;
}

export interface UseSettingsReturn {
  state: SettingsState;
  actions: SettingsActions;
  isLoading: boolean;
}

export type SettingsScreenProps = {
  state: SettingsState;
  actions: SettingsActions;
  isLoading: boolean;
}


