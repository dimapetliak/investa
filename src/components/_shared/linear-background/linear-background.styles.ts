import { Colors } from '@/theme/colors';
import { LinearBackgroundDirection, LinearBackgroundVariant } from './linear-background.types';

export const getVariantColors = (variant: LinearBackgroundVariant): string[] => {
  switch (variant) {
    case 'primary':
      return [Colors.primaryGradientStart, Colors.primaryGradientEnd];
    case 'success':
      return [Colors.success, Colors.primary];
    case 'purple':
      return [Colors.accentPurple, Colors.primary];
    case 'blue':
      return [Colors.primary, Colors.primaryLight];
    case 'custom':
      return [];
    default:
      return [Colors.primaryGradientStart, Colors.primaryGradientEnd];
  }
};

export const getDirectionPoints = (direction: LinearBackgroundDirection): { start: [number, number]; end: [number, number] } => {
  switch (direction) {
    case 'horizontal':
      return { start: [0, 0], end: [1, 0] };
    case 'vertical':
      return { start: [0, 0], end: [0, 1] };
    case 'diagonal-top':
      return { start: [0, 0], end: [1, 1] };
    case 'diagonal-bottom':
      return { start: [0, 1], end: [1, 0] };
    case 'radial':
      return { start: [0.5, 0.5], end: [1, 1] };
    default:
      return { start: [0, 0], end: [1, 1] };
  }
};

