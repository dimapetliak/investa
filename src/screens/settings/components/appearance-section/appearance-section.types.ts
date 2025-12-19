export interface AppearanceSectionProps {
  theme: 'light' | 'dark' | 'system';
  darkModeLabel: string;
  isDarkModeEnabled: boolean;
  onDarkModeToggle: (value: boolean) => void;
  onThemeChange: (value: string | number) => void;
}

