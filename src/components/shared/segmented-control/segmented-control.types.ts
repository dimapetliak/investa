import type { StyleProp, ViewProps, ViewStyle } from "react-native";

export interface SegmentedControlProps extends ViewProps {
  options: string[];
  selectedIndex: number;
  onSelect: (index: number) => void;
  style?: StyleProp<ViewStyle>;
}

