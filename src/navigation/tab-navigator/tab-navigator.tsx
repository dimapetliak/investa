import { Colors } from "@/theme/colors";
import { Ionicons } from "@expo/vector-icons";
import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { Tabs } from "expo-router";
import React from "react";
import { TAB_CONFIGS } from "../constants";

const TAB_BAR_OPTIONS: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarActiveTintColor: Colors.primary,
  tabBarInactiveTintColor: Colors.neutral500,
  tabBarStyle: {
    borderTopWidth: 1,
    borderTopColor: Colors.neutral200,
    paddingTop: 4,
    paddingBottom: 4,
    height: 80,
  },
  tabBarLabelStyle: {
    fontSize: 12,
    fontWeight: "500",
  },
};

const createTabIcon = (
  iconName: keyof typeof Ionicons.glyphMap,
  iconNameOutline: keyof typeof Ionicons.glyphMap
) => {
  return ({
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
};

export const TabNavigator = () => {
  return (
    <Tabs screenOptions={TAB_BAR_OPTIONS}>
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
