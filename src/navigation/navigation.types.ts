import { Ionicons } from "@expo/vector-icons";

export type TabConfig = {
  name: string;
  title: string;
  iconName: keyof typeof Ionicons.glyphMap;
  iconNameOutline: keyof typeof Ionicons.glyphMap;
  hidden?: boolean;
};