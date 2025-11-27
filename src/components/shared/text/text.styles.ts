import { Colors } from "@/src/theme/colors";
import type { TextStyle } from "react-native";
import type { TextTone, TextVariant } from "./text.types";

export const variantStyles: Record<TextVariant, TextStyle> = {
  h1: {
    fontSize: 28,
    lineHeight: 34,
    fontWeight: "700",
  },
  h2: {
    fontSize: 22,
    lineHeight: 28,
    fontWeight: "700",
  },
  h3: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: "600",
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "500",
  },
  body: {
    fontSize: 15,
    lineHeight: 21,
    fontWeight: "400",
  },
  bodySmall: {
    fontSize: 13,
    lineHeight: 18,
    fontWeight: "400",
  },
  caption: {
    fontSize: 11,
    lineHeight: 14,
    fontWeight: "400",
    textTransform: "uppercase",
    letterSpacing: 0.4,
  },
};

export const toneStyles: Record<TextTone, TextStyle> = {
  default: {
    color: Colors.neutral700,
  },
  muted: {
    color: Colors.neutral500,
  },
  inverse: {
    color: Colors.white,
  },
  success: {
    color: Colors.success,
  },
};
