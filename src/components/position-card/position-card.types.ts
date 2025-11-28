import type { StyleProp, ViewProps, ViewStyle } from "react-native";

export interface PositionCardProps extends ViewProps {
  ticker: string;
  assetType: "stock" | "crypto";
  quantity: number;
  averagePrice: number;
  currentPrice: number;
  currentValue: number;
  pnl: number;
  pnlPercent: number;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}


