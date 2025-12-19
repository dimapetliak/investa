import type { ReactNode } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';

export type ExpandableListProps = {
  /** Section title displayed in the header */
  title: string;
  /** Optional icon name from Ionicons */
  icon?: string;
  /** Items count to display as badge (if not provided, counts children) */
  count?: number;
  /** Whether the list is initially expanded */
  defaultExpanded?: boolean;
  /** Controlled expanded state */
  expanded?: boolean;
  /** Callback when expanded state changes */
  onExpandedChange?: (expanded: boolean) => void;
  /** Action element to render on the right side of header (e.g., Add button) */
  headerAction?: ReactNode;
  /** Children to render inside the expandable content */
  children: ReactNode;
  /** Custom style for the container */
  style?: StyleProp<ViewStyle>;
  /** Custom style for the content container */
  contentStyle?: StyleProp<ViewStyle>;
  /** Empty state to show when there are no children */
  emptyState?: ReactNode;
  /** Whether to show the count badge */
  showCount?: boolean;
};

