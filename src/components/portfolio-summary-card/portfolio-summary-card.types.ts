import type { StyleProp, ViewProps, ViewStyle } from "react-native";

export interface PortfolioSummaryCardProps extends ViewProps {
  totalValue: number;
  totalCost: number;
  totalPnl: number;
  totalPnlPercent: number;
  style?: StyleProp<ViewStyle>;
}


