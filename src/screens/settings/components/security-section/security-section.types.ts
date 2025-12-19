import type { SecuritySettings } from '@/store';

export interface SecuritySectionProps {
  security: SecuritySettings;
  onSecurityChange: (settings: Partial<SecuritySettings>) => void;
}

