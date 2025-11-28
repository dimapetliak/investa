import { Colors } from "@/src/theme/colors";
import { StyleSheet, TextStyle, ViewStyle } from "react-native";

export const baseStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    width: 'auto',
  } as ViewStyle,

  content: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  } as ViewStyle,

  icon: {
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,

  label: {
    fontWeight: "600",
  } as TextStyle,
});

export const variantStyles = StyleSheet.create({
  primary: {
    backgroundColor: Colors.primary,
  },
  secondary: {
    backgroundColor: Colors.neutral100,
  },
  outline: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: Colors.primary,
  },
  text: {
    backgroundColor: "transparent",
  },
});

export const variantDisabledStyles = StyleSheet.create({
  primary: {
    backgroundColor: Colors.neutral300,
  },
  secondary: {
    backgroundColor: Colors.neutral200,
  },
  outline: {
    borderColor: Colors.neutral300,
  },
  text: {
    opacity: 0.5,
  },
});

export const labelStyles = StyleSheet.create({
  primary: {
    color: Colors.white,
  },
  secondary: {
    color: Colors.neutral700,
  },
  outline: {
    color: Colors.primary,
  },
  text: {
    color: Colors.primary,
  },
});

export const labelDisabledStyles = StyleSheet.create({
    primary: { color: Colors.white },
    secondary: { color: Colors.neutral500 },
    outline: { color: Colors.neutral400 },
    text: { color: Colors.neutral400 },
  });

export const sizeStyles = StyleSheet.create({
    sm: {
      paddingVertical: 6,
      paddingHorizontal: 12,
    },
    md: {
      paddingVertical: 10,
      paddingHorizontal: 16,
    },
    lg: {
      paddingVertical: 14,
      paddingHorizontal: 20,
    },
  });

export const sizeLabelStyles = StyleSheet.create({
    sm: { fontSize: 14 },
    md: { fontSize: 16 },
    lg: { fontSize: 18 },
});

export const pressedStyles = StyleSheet.create({
    primary: {
      opacity: 0.85,
    },
    secondary: {
      opacity: 0.7,
    },
    outline: {
      opacity: 0.7,
    },
    text: {
      opacity: 0.6,
    },
  });