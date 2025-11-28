import { Fonts } from "@/theme/fonts";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    h1: {
      fontSize: 32,
      fontFamily: Fonts.bold,
      lineHeight: 40,
    },
    h2: {
      fontSize: 24,
      fontFamily: Fonts.semiBold,
      lineHeight: 32,
    },
    h3: {
      fontSize: 20,
      fontFamily: Fonts.semiBold,
      lineHeight: 28,
    },
    body: {
      fontSize: 16,
      fontFamily: Fonts.regular,
      lineHeight: 24,
    },
    caption: {
      fontSize: 14,
      fontFamily: Fonts.regular,
      lineHeight: 20,
    },
  });