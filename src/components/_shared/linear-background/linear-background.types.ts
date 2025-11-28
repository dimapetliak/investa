import { ViewProps } from 'react-native';

export type LinearBackgroundDirection = 
  | 'horizontal' 
  | 'vertical' 
  | 'diagonal-top' 
  | 'diagonal-bottom'
  | 'radial';

export type LinearBackgroundVariant = 
  | 'primary'
  | 'success'
  | 'purple'
  | 'blue'
  | 'custom';

export type LinearBackgroundProps = ViewProps & {
  children?: React.ReactNode;
  
  // Variant (uses predefined color combinations)
  variant?: LinearBackgroundVariant;
  
  // Custom colors (overrides variant)
  colors?: string[];
  
  // Start and end colors (for simple gradients)
  startColor?: string;
  endColor?: string;
  
  // Direction
  direction?: LinearBackgroundDirection;
  
  // Color locations (0-1 array, same length as colors)
  locations?: number[];
  
  // Opacity
  opacity?: number;
};

