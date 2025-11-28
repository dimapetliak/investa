import React from "react";
import { View } from "react-native";
import { dividerStyles } from "./divider.styles";
import type { DividerProps } from "./divider.types";

export const Divider: React.FC<DividerProps> = ({
  style,
  variant = "solid",
  orientation = "horizontal",
  ...rest
}) => {
  return (
    <View
      {...rest}
      style={[
        dividerStyles[orientation],
        variant === "dashed" && { borderStyle: "dashed", borderWidth: 1, backgroundColor: "transparent", borderColor: dividerStyles[orientation].backgroundColor },
        style,
      ]}
    />
  );
};


