import { Colors } from "./colors";

export const Theme = {
  background: {
    primary: Colors.white,
    secondary: Colors.neutral50,
    tertiary: Colors.neutral100,
    card: Colors.white,
    subtle: Colors.neutral50,
  },

  text: {
    primary: Colors.neutral700,
    secondary: Colors.neutral500,
    tertiary: Colors.neutral400,
    inverse: Colors.white,
  },

  border: {
    light: Colors.neutral200,
    medium: Colors.neutral300,
    dark: Colors.neutral500,
  },

  brand: {
    primary: Colors.primary,
    primaryLight: Colors.primaryLight,
    gradient: [Colors.primaryGradientStart, Colors.primaryGradientEnd],
  },

  status: {
    success: Colors.success,
    error: Colors.error,
    danger: Colors.danger,
    warning: Colors.warning,
  },
  
  button: {
    primaryBackground: Colors.primary,
    primaryText: Colors.white,
    secondaryBackground: Colors.neutral100,
    secondaryText: Colors.neutral700,
  },

  input: {
    background: Colors.white,
    border: Colors.neutral300,
    placeholder: Colors.neutral400,
    text: Colors.neutral700,
  },

  card: {
    background: Colors.white,
    border: Colors.neutral200,
  },
};
