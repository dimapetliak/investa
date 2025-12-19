/**
 * Design Tokens
 * Personal Finance & Investment Tracker Design System
 */

// Border Radius Scale (Design Library spec)
export const Radius = {
  sm: 8,    // Inputs, buttons
  md: 12,   // Cards
  lg: 16,   // Large containers
  full: 9999, // Pills, badges
} as const;

// Border Width Scale
export const BorderWidth = {
  thin: 1,
  medium: 2,
} as const;

// Control Heights (for buttons, inputs, selects)
// Min 44px for proper tap targets (accessibility)
export const ControlHeight = {
  sm: 36,
  md: 44,
  lg: 52,
} as const;

// Typography Scale (Design Library spec)
export const Typography = {
  // Font Sizes
  fontSize: {
    xs: 12,
    sm: 14,     // Caption
    base: 16,   // Body
    lg: 18,     // H3
    xl: 20,
    '2xl': 24,  // H2
    '3xl': 28,
    '4xl': 32,  // H1
  },
  // Line Heights
  lineHeight: {
    xs: 16,
    sm: 20,
    base: 24,   // Body: 1.5 line-height
    lg: 24,
    xl: 28,
    '2xl': 32,
    '3xl': 36,
    '4xl': 40,
  },
  // Letter Spacing
  letterSpacing: {
    tight: -0.5, // H1
    normal: -0.3, // H2
    wide: 0,
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
  pressed: 0.9,
} as const;

// Shadow presets
export const Shadow = {
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  lg: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
} as const;
