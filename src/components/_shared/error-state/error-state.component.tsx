import React from "react";
import { View } from "react-native";
import { Text } from "../text/text.component";
import { errorStateStyles } from "./error-state.styles";
import type { ErrorStateProps } from "./error-state.types";

export const ErrorState: React.FC<ErrorStateProps> = ({
  title = "Something went wrong",
  message,
  icon,
  action,
  style,
  ...rest
}) => {
  return (
    <View {...rest} style={[errorStateStyles.container, style]}>
      {icon && <View>{icon}</View>}
      <View style={errorStateStyles.content}>
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


