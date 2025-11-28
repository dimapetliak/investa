import React from "react";
import { Pressable, View } from "react-native";
import { Input } from "../Input/input.component";
import type { SearchInputProps } from "./search-input.types";

export const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onClear,
  ...rest
}) => {
  return (
    <Input
      {...rest}
      value={value}
      placeholder={rest.placeholder || "Search..."}
      leftIcon={
        // You can add a search icon here using @expo/vector-icons
        null
      }
      rightIcon={
        value && onClear ? (
          <Pressable onPress={onClear}>
            {/* You can add a close/x icon here using @expo/vector-icons */}
            <View />
          </Pressable>
        ) : null
      }
    />
  );
};


