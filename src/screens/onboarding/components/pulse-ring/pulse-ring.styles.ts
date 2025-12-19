export const createRingStyle = (
  size: number, 
  borderRadius: number, 
  borderColor: string
) => ({
  position: 'absolute' as const,
  width: size,
  height: size,
  borderRadius,
  borderWidth: 2,
  borderColor,
});


