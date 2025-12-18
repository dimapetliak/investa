import {
  Button,
  Card,
  ListItem,
  ScreenLayout,
  SectionHeader,
  Text,
  Select,
} from "@/components";
import { useTheme } from "@/contexts/theme-context";
import { Spacing } from "@/theme/spacing";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View, Switch } from "react-native";
import type { SettingsScreenProps } from "./settings.types";

const THEME_OPTIONS = [
  { label: "Light", value: "light" },
  { label: "Dark", value: "dark" },
  { label: "System", value: "system" },
];

const CURRENCY_OPTIONS = [
  { label: "USD - US Dollar", value: "USD" },
  { label: "EUR - Euro", value: "EUR" },
  { label: "GBP - British Pound", value: "GBP" },
  { label: "JPY - Japanese Yen", value: "JPY" },
  { label: "CAD - Canadian Dollar", value: "CAD" },
  { label: "AUD - Australian Dollar", value: "AUD" },
  { label: "CHF - Swiss Franc", value: "CHF" },
];

export const SettingsScreen = ({
  baseCurrency,
  onCurrencyChange,
  onExportData,
  onImportData,
  onClearAllData,
}: SettingsScreenProps) => {
  const { theme, setTheme, colors, colorScheme } = useTheme();
  const isDarkMode = colorScheme === "dark";

  return (
    <ScreenLayout showsVerticalScrollIndicator={false}>
      <View style={{ paddingHorizontal: Spacing.lg }}>
        {/* Appearance Settings */}
        <View style={{ marginBottom: Spacing.lg }}>
          <SectionHeader title="Appearance" />
          <Card>
            <View style={{ padding: Spacing.md }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: Spacing.lg,
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Ionicons
                    name="moon-outline"
                    size={24}
                    color={colors.foreground}
                    style={{ marginRight: Spacing.md }}
                  />
                  <View>
                    <Text variant="body">Dark Mode</Text>
                    <Text variant="caption" color="muted">
                      {theme === "system"
                        ? `System (${isDarkMode ? "Dark" : "Light"})`
                        : theme === "dark"
                        ? "Always dark"
                        : "Always light"}
                    </Text>
                  </View>
                </View>
                <Switch
                  value={theme === "dark" || (theme === "system" && isDarkMode)}
                  onValueChange={(value) => {
                    if (theme === "system") {
                      setTheme(value ? "dark" : "light");
                    } else {
                      setTheme(value ? "dark" : "light");
                    }
                  }}
                  trackColor={{
                    false: colors.neutral300,
                    true: colors.primary,
                  }}
                  thumbColor={colors.white}
                />
              </View>

              <Select
                label="Theme Preference"
                placeholder="Select theme"
                options={THEME_OPTIONS}
                value={theme}
                onChangeValue={(value) => setTheme(value as "light" | "dark" | "system")}
                leftIcon={
                  <Ionicons
                    name="color-palette-outline"
                    size={20}
                    color={colors.foreground}
                  />
                }
              />
            </View>
          </Card>
        </View>

        {/* General Settings */}
        <View style={{ marginBottom: Spacing.lg }}>
          <SectionHeader title="General" />
          <Card>
            <View style={{ padding: Spacing.md }}>
              <Select
                label="Base Currency"
                placeholder="Select currency"
                options={CURRENCY_OPTIONS}
                value={baseCurrency}
                onChangeValue={(value) => onCurrencyChange(value as string)}
                leftIcon={
                  <Ionicons
                    name="cash-outline"
                    size={20}
                    color={colors.foreground}
                  />
                }
              />
            </View>
          </Card>
        </View>

        {/* Data Management */}
        <View style={{ marginBottom: Spacing.lg }}>
          <SectionHeader title="Data Management" />
          <Card>
            <ListItem
              title="Import from CSV"
              subtitle="Import trades from IBKR or other brokers"
              leftIcon={<Ionicons name="cloud-upload-outline" size={24} />}
              onPress={onImportData}
            />
            <ListItem
              title="Export Data"
              subtitle="Download your portfolio data"
              leftIcon={<Ionicons name="cloud-download-outline" size={24} />}
              onPress={onExportData}
            />
          </Card>
        </View>

        {/* Danger Zone */}
        <View style={{ marginBottom: Spacing.lg }}>
          <SectionHeader title="Danger Zone" />
          <Button variant="destructive" onPress={onClearAllData}>
            Clear All Data
          </Button>
        </View>

        {/* About */}
        <View style={{ marginBottom: Spacing["3xl"] }}>
          <SectionHeader title="About" />
          <Card>
            <View style={{ alignItems: "center", padding: Spacing.lg }}>
              <Text variant="h3">Investment Tracker</Text>
              <Text variant="caption" color="muted" style={{ marginTop: 4 }}>
                v1.0.0
              </Text>
              <Text
                variant="caption"
                color="muted"
                style={{ marginTop: Spacing.md, textAlign: "center" }}
              >
                Personal investment portfolio manager
              </Text>
            </View>
          </Card>
        </View>
      </View>
    </ScreenLayout>
  );
};
