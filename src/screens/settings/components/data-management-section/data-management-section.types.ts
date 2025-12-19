export interface DataManagementSectionProps {
  stats: {
    assetsCount: number;
    tradesCount: number;
  };
  isExporting?: boolean;
  onImportData: () => void;
  onLoadSampleData: () => void;
  onExportData: () => void;
}

