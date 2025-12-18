import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';
import { Pressable, View } from 'react-native';
import { cn } from '@/lib/utils';

const cardVariants = cva(
  'rounded-xl border border-border active:opacity-80',
  {
    variants: {
      variant: {
        default: 'bg-card',
        secondary: 'bg-secondary',
        info: 'bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-900',
        error: 'bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-900',
        warning: 'bg-yellow-50 dark:bg-yellow-950/20 border-yellow-200 dark:border-yellow-900',
        success: 'bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-900',
      },
      padding: {
        none: 'p-0',
        sm: 'p-2',
        md: 'p-3',
        lg: 'p-4',
        xl: 'p-6',
        '2xl': 'p-8',
        '3xl': 'p-12',
      },
    },
    defaultVariants: {
      variant: 'default',
      padding: 'lg',
    },
  }
);

export interface CardProps
  extends React.ComponentPropsWithoutRef<typeof View>,
    VariantProps<typeof cardVariants> {
  onPress?: () => void;
}

const Card = React.forwardRef<React.ElementRef<typeof View>, CardProps>(
  ({ className, variant, padding, onPress, children, ...props }, ref) => {
    const cardClassName = cn(cardVariants({ variant, padding }), className);

    if (onPress) {
      return (
        <Pressable className={cardClassName} onPress={onPress} {...props}>
          {children}
        </Pressable>
      );
    }

    return (
      <View ref={ref} className={cardClassName} {...props}>
        {children}
      </View>
    );
  }
);

Card.displayName = 'Card';

export { Card, cardVariants };
