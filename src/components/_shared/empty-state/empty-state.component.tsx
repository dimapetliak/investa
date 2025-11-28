import React from "react";
import { View } from "react-native";
import { Text } from "../text/text.component";
import { emptyStateStyles } from "./empty-state.styles";
import type { EmptyStateProps } from "./empty-state.types";

export const EmptyState: React.FC<EmptyStateProps> = ({
  title,
  message,
  icon,
  action,
  style,
  ...rest
}) => {
  return (
    <View {...rest} style={[emptyStateStyles.container, style]}>
      {icon && <View>{icon}</View>}
      <View style={emptyStateStyles.content}>
        <Text variant="h3" align="center">
          {title}
        </Text>
        {message && (
          <Text variant="body" tone="muted" align="center">
            {message}
          </Text>
        )}
      </View>
      {action && <View>{action}</View>}
    </View>
  );
};


