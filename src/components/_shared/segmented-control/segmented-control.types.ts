import { ViewStyle } from 'react-native';

export type SegmentedControlOption = {
  label: string;
  value: string | number;
};

export type SegmentedControlProps = {
  options: SegmentedControlOption[];
  selectedValue: string | number;
  onValueChange: (value: string | number) => void;
  style?: ViewStyle;
};

