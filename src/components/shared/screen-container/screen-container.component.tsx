import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { containerStyles } from "./screen-container.styles";
import type { ScreenContainerProps } from "./screen-container.types";

export const ScreenContainer: React.FC<ScreenContainerProps> = ({
  children,
  style,
  safeArea = true,
  ...rest
}) => {
  const Container = safeArea ? SafeAreaView : View;

  return (
    <Container
      {...rest}
      style={[containerStyles.base, style]}
    >
      {children}
    </Container>
  );
};

