import type { StyleProp, ViewProps, ViewStyle } from "react-native";

export interface PriceChipProps extends ViewProps {
  price: number;
  timestamp?: Date;
  style?: StyleProp<ViewStyle>;
}

