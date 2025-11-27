import type { StyleProp, ViewProps, ViewStyle } from "react-native";

export type AssetType = "stock" | "crypto";

export interface AssetTagProps extends ViewProps {
  type: AssetType;
  style?: StyleProp<ViewStyle>;
}

