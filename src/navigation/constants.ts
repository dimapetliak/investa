import { TabConfig } from "./navigation.types";

export const TAB_CONFIGS: TabConfig[] = [
  {
    name: "index",
    title: "Portfolio",
    iconName: "home-outline",
    iconNameOutline: "home-outline",
  },
  {
    name: "assets",
    title: "Assets",
    iconName: "trending-up",
    iconNameOutline: "trending-up-outline",
  },
  {
    name: "savings",
    title: "Savings",
    iconName: "wallet",
    iconNameOutline: "wallet-outline",
  },
  {
    name: "components",
    title: "Components",
    iconName: "document-text",
    iconNameOutline: "document-text-outline",
    hidden: true, // Hide components showcase in production
  },
  {
    name: "settings",
    title: "Settings",
    iconName: "settings-outline",
    iconNameOutline: "settings-outline",
  },
];
