import { Spacing } from '@/theme/spacing';
import { StyleSheet } from 'react-native';
import { ContainerAlignment, ContainerPadding } from './container.types';

export const getPaddingValue = (padding: ContainerPadding | undefined): number => {
  if (!padding) return 0;
  if (typeof padding === 'number') return padding;
  return Spacing[padding];
};

export const getAlignmentStyle = (alignment: ContainerAlignment | undefined) => {
  if (!alignment) return {};
  
  const alignmentMap: Record<ContainerAlignment, any> = {
    'start': { justifyContent: 'flex-start' },
    'center': { justifyContent: 'center' },
    'end': { justifyContent: 'flex-end' },
    'stretch': { justifyContent: 'stretch' },
    'space-between': { justifyContent: 'space-between' },
    'space-around': { justifyContent: 'space-around' },
    'space-evenly': { justifyContent: 'space-evenly' },
  };
  
  return alignmentMap[alignment] || {};
};

export const getVerticalAlignmentStyle = (alignment: ContainerAlignment | undefined) => {
  if (!alignment) return {};
  
  const alignmentMap: Record<ContainerAlignment, any> = {
    'start': { alignItems: 'flex-start' },
    'center': { alignItems: 'center' },
    'end': { alignItems: 'flex-end' },
    'stretch': { alignItems: 'stretch' },
    'space-between': {},
    'space-around': {},
    'space-evenly': {},
  };
  
  return alignmentMap[alignment] || {};
};

export const containerStyles = StyleSheet.create({
  base: {
    // Base styles can be added here if needed
  },
});

