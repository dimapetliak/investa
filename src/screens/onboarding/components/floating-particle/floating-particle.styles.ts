import { StyleSheet } from 'react-native';

export const createParticleStyle = (size: number, startX: number, startY: number) => ({
  position: 'absolute' as const,
  left: startX,
  top: startY,
  width: size,
  height: size,
  borderRadius: size / 2,
  backgroundColor: 'rgba(255, 255, 255, 0.3)',
});


