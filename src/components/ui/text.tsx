import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';
import { Text as RNText } from 'react-native';
import { cn } from '@/lib/utils';

const textVariants = cva('', {
  variants: {
    variant: {
      h1: 'text-4xl font-bold leading-10',
      h2: 'text-2xl font-semibold leading-8',
      h3: 'text-xl font-semibold leading-7',
      body: 'text-base font-normal leading-6',
      caption: 'text-sm font-normal leading-5',
      small: 'text-xs font-normal leading-4',
    },
    color: {
      default: 'text-foreground',
      muted: 'text-muted-foreground',
      primary: 'text-primary',
      error: 'text-destructive',
      success: 'text-green-600 dark:text-green-400',
      warning: 'text-yellow-600 dark:text-yellow-400',
    },
  },
  defaultVariants: {
    variant: 'body',
    color: 'default',
  },
});

export interface TextProps
  extends React.ComponentPropsWithoutRef<typeof RNText>,
    VariantProps<typeof textVariants> {}

const Text = React.forwardRef<React.ElementRef<typeof RNText>, TextProps>(
  ({ className, variant, color, ...props }, ref) => {
    return (
      <RNText
        ref={ref}
        className={cn(textVariants({ variant, color }), className)}
        {...props}
      />
    );
  }
);

Text.displayName = 'Text';

export { Text, textVariants };
