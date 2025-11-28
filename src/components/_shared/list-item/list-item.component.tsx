import React from "react";
import { Pressable, View } from "react-native";
import { listItemStyles } from "./list-item.styles";
import type { ListItemProps } from "./list-item.types";

export const ListItem: React.FC<ListItemProps> = ({
  children,
  leftContent,
  rightContent,
  style,
  onPress,
  ...rest
}) => {
  const Component = onPress ? Pressable : View;

  return (
    <Component
      {...rest}
      onPress={onPress}
      style={({ pressed }) => [
        listItemStyles.container,
        pressed && { opacity: 0.7 },
        style,
      ]}
    >
      {leftContent && <View>{leftContent}</View>}
      <View style={listItemStyles.content}>{children}</View>
      {rightContent && <View style={listItemStyles.rightContent}>{rightContent}</View>}
    </Component>
  );
};

