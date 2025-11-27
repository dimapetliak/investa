import React from "react";
import { View } from "react-native";
import { Text } from "../text/text.component";
import { rowStyles } from "./key-value-row.styles";
import type { KeyValueRowProps } from "./key-value-row.types";

export const KeyValueRow: React.FC<KeyValueRowProps> = ({
  label,
  value,
  style,
  labelStyle,
  valueStyle,
  ...rest
}) => {
  return (
    <View {...rest} style={[rowStyles.container, style]}>
      <View style={[rowStyles.label, labelStyle]}>
        <Text variant="body" tone="muted">
          {label}
        </Text>
      </View>
      <View style={[rowStyles.value, valueStyle]}>
        {typeof value === "string" || typeof value === "number" ? (
          <Text variant="body" style={{ fontWeight: "500" }}>
            {value}
          </Text>
        ) : (
          value
        )}
      </View>
    </View>
  );
};

