export interface SettingsState {
  notificationsEnabled: boolean;
  darkModeEnabled: boolean;
  currency: string;
  language: string;
}

export interface SettingsActions {
  toggleNotifications: () => void;
  toggleDarkMode: () => void;
  setCurrency: (currency: string) => void;
  setLanguage: (language: string) => void;
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


