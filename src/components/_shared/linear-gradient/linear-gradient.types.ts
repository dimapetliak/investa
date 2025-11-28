import { ViewStyle } from 'react-native';

export interface LinearGradientProps {
  /**
   * Starting color of the gradient
   * @default Colors.primaryGradientStart
   */
  startColor?: string;
  
  /**
   * Ending color of the gradient
   * @default Colors.primaryGradientEnd
   */
  endColor?: string;
  
  /**
   * Starting point of the gradient (x, y) where 0-1 represents percentage
   * @default [0, 0]
   */
  start?: [number, number];
  
  /**
   * Ending point of the gradient (x, y) where 0-1 represents percentage
   * @default [1, 1]
   */
  end?: [number, number];
  
  /**
   * Array of colors for multi-color gradients
   * If provided, overrides startColor and endColor
   */
  colors?: string[];
  
  /**
   * Array of locations for each color (0-1)
   * Must match the length of colors array
   */
  locations?: number[];
  
  /**
   * Additional style for the container
   */
  style?: ViewStyle;
  
  /**
   * Children to render inside the gradient
   */
  children?: React.ReactNode;
  
  /**
   * Predefined gradient variants
   */
  variant?: 'primary' | 'success' | 'purple' | 'blue' | 'custom';
}


