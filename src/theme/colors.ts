/**
 * Color Palette
 * Personal Finance & Investment Tracker Design System
 * Supports light and dark themes
 */

// Asset Type Colors - consistent across themes
export const AssetColors = {
  cash: '#10b981',
  bank: '#3b82f6',
  card: '#ec4899',
  savings: '#14b8a6',
  stock: '#8b5cf6',
  crypto: '#f59e0b',
} as const;

// Gradient Colors for cards
export type GradientPair = readonly [string, string];

export interface GradientColorSet {
  netWorthMain: GradientPair;
  investments: GradientPair;
  savings: GradientPair;
}

export const GradientColors: { light: GradientColorSet; dark: GradientColorSet } = {
  light: {
    netWorthMain: ['#4f46e5', '#7c3aed'],
    investments: ['#7c3aed', '#a855f7'],
    savings: ['#16a34a', '#22c55e'],
  },
  dark: {
    netWorthMain: ['#3730a3', '#5b21b6'],
    investments: ['#6d28d9', '#7c3aed'],
    savings: ['#15803d', '#16a34a'],
  },
};

export const LightColors = {
  // Base colors
  white: '#ffffff',
  black: '#1f2937',

  // Background colors
  background: '#f8f9fa',
  backgroundSecondary: '#ffffff', // Surface/Card backgrounds
  backgroundMuted: '#f3f4f6',

  // Foreground colors
  foreground: '#1f2937',
  foregroundMuted: '#6b7280',
  foregroundTertiary: '#9ca3af',

  // Border colors
  border: '#e5e7eb',
  borderStrong: '#d1d5db',

  // Neutral scale
  neutral50: '#f9fafb',
  neutral100: '#f3f4f6',
  neutral200: '#e5e7eb',
  neutral300: '#d1d5db',
  neutral400: '#9ca3af',
  neutral500: '#6b7280',
  neutral600: '#4b5563',
  neutral700: '#374151',
  neutral800: '#1f2937',
  neutral900: '#111827',

  // Primary colors
  primary: '#3b82f6',
  primaryHover: '#2563eb',
  primaryLight: '#dbeafe',
  primaryForeground: '#ffffff',

  // Semantic colors
  success: '#10b981',
  successLight: '#d1fae5',
  successForeground: '#065f46',

  error: '#ef4444',
  errorLight: '#fee2e2',
  errorForeground: '#991b1b',

  warning: '#f59e0b',
  warningLight: '#fef3c7',
  warningForeground: '#92400e',

  info: '#3b82f6',
  infoLight: '#dbeafe',
  infoForeground: '#1e40af',

  // Accent colors
  accentPurple: '#8b5cf6',

  // Asset colors
  ...AssetColors,
};

export const DarkColors = {
  // Base colors
  white: '#ffffff',
  black: '#111827',

  // Background colors
  background: '#111827',
  backgroundSecondary: '#1f2937', // Surface/Card backgrounds
  backgroundMuted: '#374151',

  // Foreground colors
  foreground: '#f9fafb',
  foregroundMuted: '#9ca3af',
  foregroundTertiary: '#6b7280',

  // Border colors
  border: '#374151',
  borderStrong: '#4b5563',

  // Neutral scale (inverted for dark mode)
  neutral50: '#111827',
  neutral100: '#1f2937',
  neutral200: '#374151',
  neutral300: '#4b5563',
  neutral400: '#6b7280',
  neutral500: '#9ca3af',
  neutral600: '#d1d5db',
  neutral700: '#e5e7eb',
  neutral800: '#f3f4f6',
  neutral900: '#f9fafb',

  // Primary colors
  primary: '#3b82f6',
  primaryHover: '#60a5fa',
  primaryLight: '#1e3a8a',
  primaryForeground: '#ffffff',

  // Semantic colors
  success: '#10b981',
  successLight: '#065f46',
  successForeground: '#d1fae5',

  error: '#ef4444',
  errorLight: '#991b1b',
  errorForeground: '#fee2e2',

  warning: '#f59e0b',
  warningLight: '#92400e',
  warningForeground: '#fef3c7',

  info: '#3b82f6',
  infoLight: '#1e40af',
  infoForeground: '#dbeafe',

  // Accent colors
  accentPurple: '#a78bfa',

  // Asset colors
  ...AssetColors,
};

// Default export for backwards compatibility
export const Colors = LightColors;
