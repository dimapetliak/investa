import { LightColors, Radius, BorderWidth } from "@/theme";
import { StyleSheet } from "react-native";

export const getCardStyles = (colors: typeof LightColors) => StyleSheet.create({
    card: {
      borderRadius: Radius.lg,
      borderWidth: BorderWidth.thin,
    },
    default: {
      backgroundColor: colors.background,
      borderColor: colors.border,
    },
    secondary: {
      backgroundColor: colors.backgroundSecondary,
      borderColor: colors.border,
    },
    info: {
      backgroundColor: colors.infoLight,
      borderColor: colors.info,
    },
    error: {
      backgroundColor: colors.errorLight,
      borderColor: colors.error,
    },
    warning: {
      backgroundColor: colors.warningLight,
      borderColor: colors.warning,
    },
    success: {
      backgroundColor: colors.successLight,
      borderColor: colors.success,
    },
  });
