import { useTheme } from "@/contexts/theme-context";
import { BorderWidth, Typography } from "@/theme";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { TAB_CONFIGS } from "../constants";

const createTabIcon = (
  iconName: keyof typeof Ionicons.glyphMap,
  iconNameOutline: keyof typeof Ionicons.glyphMap
) => {
  const TabIcon = ({
    focused,
    color,
    size,
  }: {
    focused: boolean;
    color: string;
    size?: number;
  }) => (
    <Ionicons
      name={focused ? iconName : iconNameOutline}
      size={size || 24}
      color={color}
    />
  );

  TabIcon.displayName = 'TabIcon';

  return TabIcon;
};

export const TabNavigator = () => {
  const { colors } = useTheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.foregroundMuted,
        tabBarStyle: {
          backgroundColor: colors.background,
          borderTopWidth: BorderWidth.thin,
          borderTopColor: colors.border,
          paddingTop: 4,
          paddingBottom: 4,
          height: 80,
        },
        tabBarLabelStyle: {
          fontSize: Typography.fontSize.xs,
          fontWeight: "500",
        },
      }}
    >
      {TAB_CONFIGS.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            title: tab.title,
            tabBarIcon: createTabIcon(tab.iconName, tab.iconNameOutline),
            href: tab.hidden ? null : undefined,
          }}
        />
      ))}
    </Tabs>
  );
};

TabNavigator.displayName = "TabNavigator";
