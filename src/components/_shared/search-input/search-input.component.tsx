import { Colors } from '@/theme/colors';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable } from 'react-native';
import { Input } from '../input/input.component';
import { SearchInputProps } from './search-input.types';

export const SearchInput = ({
  onClear,
  ...props
}: SearchInputProps) => {
  return (
    <Input
      {...props}
      leftIcon={
        <Ionicons name="search-outline" size={20} color={Colors.neutral500} />
      }
      rightIcon={
        props.value ? (
          <Pressable onPress={onClear}>
            <Ionicons
              name="close-circle"
              size={20}
              color={Colors.neutral400}
            />
          </Pressable>
        ) : undefined
      }
      placeholder={props.placeholder || 'Search...'}
    />
  );
};

