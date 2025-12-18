export type PortfolioSearchFilterProps = {
  searchValue: string;
  onSearchChange: (value: string) => void;
  onSearchClear: () => void;
  selectedFilters: (string | number)[];
  onFilterToggle: (value: string | number) => void;
};

