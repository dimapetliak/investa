import { Spacing } from "@/theme/spacing";
import { ViewProps } from "react-native";

export type CardBackgroundVariant = 'info' | 'danger' | 'warning' | 'success' | 'subtle';

export type CardProps = ViewProps & {
  children: React.ReactNode;
  padding?: keyof typeof Spacing;
  backgroundVariant?: CardBackgroundVariant;
  shadow?: boolean;
};
