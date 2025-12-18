import { Spacing } from "@/theme";
import { ViewProps } from "react-native";

export type CardVariant = 'default' | 'secondary' | 'info' | 'error' | 'warning' | 'success';

export type CardProps = ViewProps & {
  children: React.ReactNode;
  padding?: keyof typeof Spacing;
  variant?: CardVariant;
  onPress?: () => void;
};
