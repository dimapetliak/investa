import { Typography } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    h1: {
      fontSize: Typography.fontSize['4xl'],
      fontFamily: Typography.fontWeight.bold,
      lineHeight: Typography.lineHeight['4xl'],
    },
    h2: {
      fontSize: Typography.fontSize['2xl'],
      fontFamily: Typography.fontWeight.semiBold,
      lineHeight: Typography.lineHeight['2xl'],
    },
    h3: {
      fontSize: Typography.fontSize.xl,
      fontFamily: Typography.fontWeight.semiBold,
      lineHeight: Typography.lineHeight.xl,
    },
    body: {
      fontSize: Typography.fontSize.base,
      fontFamily: Typography.fontWeight.regular,
      lineHeight: Typography.lineHeight.base,
    },
    caption: {
      fontSize: Typography.fontSize.sm,
      fontFamily: Typography.fontWeight.regular,
      lineHeight: Typography.lineHeight.sm,
    },
    small: {
      fontSize: Typography.fontSize.xs,
      fontFamily: Typography.fontWeight.regular,
      lineHeight: Typography.lineHeight.xs,
    },
  });