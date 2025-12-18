/**
 * Color Palette
 * shadcn/ui-inspired neutral colors with semantic variants
 * Supports light and dark themes
 */

export const LightColors = {
  // Base colors
  white: "#FFFFFF",
  black: "#09090B",

  // Background colors
  background: "#FFFFFF",
  backgroundSecondary: "#F9FAFB",

  // Foreground colors
  foreground: "#09090B",
  foregroundMuted: "#71717A",

  // Border colors
  border: "#E4E4E7",
  borderStrong: "#D4D4D8",

  // Neutral scale (shadcn/ui zinc palette)
  neutral50: "#FAFAFA",
  neutral100: "#F4F4F5",
  neutral200: "#E4E4E7",
  neutral300: "#D4D4D8",
  neutral400: "#A1A1AA",
  neutral500: "#71717A",
  neutral600: "#52525B",
  neutral700: "#3F3F46",
  neutral800: "#27272A",
  neutral900: "#18181B",

  // Primary colors
  primary: "#155DFC",
  primaryHover: "#1249D6",
  primaryLight: "#DBEAFE",
  primaryForeground: "#FFFFFF",

  // Semantic colors
  success: "#22C55E",
  successLight: "#DCFCE7",
  successForeground: "#14532D",

  error: "#EF4444",
  errorLight: "#FEE2E2",
  errorForeground: "#7F1D1D",

  warning: "#F59E0B",
  warningLight: "#FEF3C7",
  warningForeground: "#78350F",

  info: "#3B82F6",
  infoLight: "#DBEAFE",
  infoForeground: "#1E3A8A",

  // Accent colors (keep for gradients)
  accentPurple: "#9810FA",
};

export const DarkColors = {
  // Base colors
  white: "#FFFFFF",
  black: "#09090B",

  // Background colors
  background: "#09090B",
  backgroundSecondary: "#18181B",

  // Foreground colors
  foreground: "#FAFAFA",
  foregroundMuted: "#A1A1AA",

  // Border colors
  border: "#27272A",
  borderStrong: "#3F3F46",

  // Neutral scale (inverted for dark mode)
  neutral50: "#18181B",
  neutral100: "#27272A",
  neutral200: "#3F3F46",
  neutral300: "#52525B",
  neutral400: "#71717A",
  neutral500: "#A1A1AA",
  neutral600: "#D4D4D8",
  neutral700: "#E4E4E7",
  neutral800: "#F4F4F5",
  neutral900: "#FAFAFA",

  // Primary colors
  primary: "#3B82F6",
  primaryHover: "#2563EB",
  primaryLight: "#1E3A8A",
  primaryForeground: "#FFFFFF",

  // Semantic colors
  success: "#22C55E",
  successLight: "#14532D",
  successForeground: "#DCFCE7",

  error: "#EF4444",
  errorLight: "#7F1D1D",
  errorForeground: "#FEE2E2",

  warning: "#F59E0B",
  warningLight: "#78350F",
  warningForeground: "#FEF3C7",

  info: "#3B82F6",
  infoLight: "#1E3A8A",
  infoForeground: "#DBEAFE",

  // Accent colors
  accentPurple: "#A855F7",
};

// Default export for backwards compatibility
export const Colors = LightColors;
  