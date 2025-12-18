/**
 * Design Tokens
 * shadcn/ui-inspired design system tokens for React Native
 */

// Border Radius Scale
export const Radius = {
  sm: 8,
  md: 10,
  lg: 12,
  xl: 16,
} as const;

// Border Width Scale
export const BorderWidth = {
  thin: 1,
  medium: 2,
} as const;

// Control Heights (for buttons, inputs, selects)
export const ControlHeight = {
  sm: 36,
  md: 44,
  lg: 52,
} as const;

// Typography Scale
export const Typography = {
  // Font Sizes
  fontSize: {
    xs: 12,
    sm: 14,
    base: 16,
    lg: 18,
    xl: 20,
    '2xl': 24,
    '3xl': 30,
    '4xl': 36,
  },
  // Line Heights
  lineHeight: {
    xs: 16,
    sm: 20,
    base: 24,
    lg: 28,
    xl: 28,
    '2xl': 32,
    '3xl': 36,
    '4xl': 40,
  },
  // Font Weights (mapped to Inter font family)
  fontWeight: {
    regular: 'Inter_400Regular',
    medium: 'Inter_500Medium',
    semiBold: 'Inter_600SemiBold',
    bold: 'Inter_700Bold',
  },
} as const;

// Icon Sizes
export const IconSize = {
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32,
} as const;

// Opacity Scale
export const Opacity = {
  disabled: 0.5,
  muted: 0.7,
  hover: 0.8,
} as const;
