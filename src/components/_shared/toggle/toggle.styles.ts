import { Colors } from "@/src/theme/colors";
import { StyleSheet, ViewStyle } from "react-native";

const TRACK_WIDTH_SM = 40;
const TRACK_WIDTH_MD = 50;
const THUMB_SIZE_SM = 16;
const THUMB_SIZE_MD = 20;

export const trackStyles = StyleSheet.create({
  sm: {
    width: TRACK_WIDTH_SM,
    height: 24,
    borderRadius: 12,
    backgroundColor: Colors.neutral300,
    justifyContent: "center",
    padding: 2,
  } as ViewStyle,
  md: {
    width: TRACK_WIDTH_MD,
    height: 28,
    borderRadius: 14,
    backgroundColor: Colors.neutral300,
    justifyContent: "center",
    padding: 2,
  } as ViewStyle,
  active: {
    backgroundColor: Colors.primary,
  } as ViewStyle,
  disabled: {
    opacity: 0.5,
  } as ViewStyle,
});

export const thumbStyles = StyleSheet.create({
  sm: {
    width: THUMB_SIZE_SM,
    height: THUMB_SIZE_SM,
    borderRadius: THUMB_SIZE_SM / 2,
    backgroundColor: Colors.white,
  } as ViewStyle,
  md: {
    width: THUMB_SIZE_MD,
    height: THUMB_SIZE_MD,
    borderRadius: THUMB_SIZE_MD / 2,
    backgroundColor: Colors.white,
  } as ViewStyle,
  active: {
    transform: [{ translateX: TRACK_WIDTH_SM - THUMB_SIZE_SM - 4 }],
  } as ViewStyle,
  activeMd: {
    transform: [{ translateX: TRACK_WIDTH_MD - THUMB_SIZE_MD - 4 }],
  } as ViewStyle,
});


