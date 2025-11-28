import React from "react";
import { View } from "react-native";
import { Text } from "../text/text.component";
import { sectionHeaderStyles } from "./section-header.styles";
import type { SectionHeaderProps } from "./section-header.types";

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  action,
  style,
  ...rest
}) => {
  return (
    <View {...rest} style={[sectionHeaderStyles.container, style]}>
      <View style={sectionHeaderStyles.content}>
        <Text variant="h3">{title}</Text>
        {subtitle && (
          <Text variant="bodySmall" tone="muted" style={{ marginTop: 4 }}>
            {subtitle}
          </Text>
        )}
      </View>
      {action && <View>{action}</View>}
    </View>
  );
};


