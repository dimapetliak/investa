import { Colors } from "@/src/theme/colors";
import type { TextStyle, ViewStyle } from "react-native";


export const ERROR_COLOR = "#EF4444";

export const inputContainerBaseStyle: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  borderWidth: 1,
  borderRadius: 10,
  paddingHorizontal: 12,
  paddingVertical: 8,
};

export const textInputBaseStyle: TextStyle = {
  flex: 1,
  fontSize: 15,
  color: Colors.neutral700,
};

export const iconWrapperStyle: ViewStyle = {
  justifyContent: "center",
  alignItems: "center",
  marginHorizontal: 4,
};
