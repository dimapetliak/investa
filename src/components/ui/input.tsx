import { cn } from '@/lib/utils';
import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import { Text } from './text';

export interface InputProps
  extends React.ComponentPropsWithoutRef<typeof TextInput> {
  label?: string;
  error?: string;
  hint?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  containerClassName?: string;
  inputClassName?: string;
}

const Input = React.forwardRef<React.ElementRef<typeof TextInput>, InputProps>(
  (
    {
      label,
      error,
      hint,
      leftIcon,
      rightIcon,
      containerClassName,
      inputClassName,
      className,
      onFocus,
      onBlur,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = (e: any) => {
      setIsFocused(true);
      onFocus?.(e);
    };

    const handleBlur = (e: any) => {
      setIsFocused(false);
      onBlur?.(e);
    };

    return (
      <View className={cn('mb-4', containerClassName)}>
        {label && (
          <Text variant="caption" color="muted" className="mb-1">
            {label}
          </Text>
        )}
        <View
          className={cn(
            'flex-row items-center border border-border rounded-lg bg-background h-11',
            isFocused && 'border-ring border-2',
            error && 'border-destructive border-2',
            className
          )}
        >
          {leftIcon && <View className="pl-3">{leftIcon}</View>}
          <TextInput
            ref={ref}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholderTextColor="#71717A"
            className={cn(
              'flex-1 px-3 text-base text-foreground font-normal',
              leftIcon && 'pl-2',
              rightIcon && 'pr-2',
              inputClassName
            )}
            {...props}
          />
          {rightIcon && <View className="pr-3">{rightIcon}</View>}
        </View>
        {hint && !error && (
          <Text variant="caption" color="muted" className="mt-1">
            {hint}
          </Text>
        )}
        {error && (
          <Text variant="caption" color="error" className="mt-1">
            {error}
          </Text>
        )}
      </View>
    );
  }
);

Input.displayName = 'Input';

export { Input };
