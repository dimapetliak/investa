import { ViewProps } from 'react-native';

export type FilterOption = {
  label: string;
  value: string | number;
  quantity?: number;
};

export type SearchFilterWidgetProps = ViewProps & {
  searchValue: string;
  onSearchChange: (value: string) => void;
  onSearchClear?: () => void;
  filters?: FilterOption[];
  selectedFilters?: (string | number)[];
  onFilterToggle?: (value: string | number) => void;
  placeholder?: string;
};

