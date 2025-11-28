import type { StyleProp, ViewProps, ViewStyle } from "react-native";

export type TradeType = "buy" | "sell";

export interface TradeRowProps extends ViewProps {
  ticker: string;
  type: TradeType;
  price: number;
  quantity: number;
  date: Date;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}


