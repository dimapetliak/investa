/**
 * Centralized ID generation utility.
 * Uses timestamp + random string for uniqueness without external dependencies.
 * For production, consider using `uuid` package if collision-resistance is critical.
 */

let counter = 0;

/**
 * Generates a unique ID string.
 * Format: {timestamp}-{counter}-{random}
 * 
 * @returns A unique identifier string
 */
export const generateId = (): string => {
  counter = (counter + 1) % 1000;
  const timestamp = Date.now().toString(36);
  const random = Math.random().toString(36).substring(2, 9);
  return `${timestamp}-${counter.toString().padStart(3, '0')}-${random}`;
};

/**
 * Validates if a string looks like a valid ID from our generator.
 * 
 * @param id - The ID string to validate
 * @returns True if the ID format is valid
 */
export const isValidId = (id: string): boolean => {
  if (!id || typeof id !== 'string') return false;
  // Basic format check: should have hyphens and reasonable length
  const parts = id.split('-');
  return parts.length >= 3 && id.length >= 10;
};

