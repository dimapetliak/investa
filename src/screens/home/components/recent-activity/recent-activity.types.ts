import type { RecentActivityItem } from '../../hooks';

export interface RecentActivityProps {
  items: RecentActivityItem[];
  currency?: string;
  onViewItem?: (id: string) => void;
}

