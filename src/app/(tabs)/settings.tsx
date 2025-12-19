import { SettingsScreen } from '@/screens/settings';
import { useAssetsStore, useTradesStore } from '@/store';
import { storageHelpers } from '@/lib/storage';
import { parseIBKRCSV, isValidIBKRCSV, SAMPLE_IBKR_POSITIONS } from '@/lib';
import { router } from 'expo-router';
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';
import React, { useState } from 'react';
import { Alert } from 'react-native';

export default function SettingsRoute() {
  const clearAssets = useAssetsStore((state) => state.clearAssets);
  const clearTrades = useTradesStore((state) => state.clearTrades);
  const assets = useAssetsStore((state) => state.assets);
  const trades = useTradesStore((state) => state.trades);
  const addAsset = useAssetsStore((state) => state.addAsset);
  const getAssetByTicker = useAssetsStore((state) => state.getAssetByTicker);
  const addTrade = useTradesStore((state) => state.addTrade);

  const [baseCurrency, setBaseCurrency] = useState('USD');

  const handleCurrencyChange = (currency: string) => {
    setBaseCurrency(currency);
    // TODO: Implement currency conversion logic
  };

  const handleExportData = () => {
    const data = {
      assets,
      trades,
      exportedAt: new Date().toISOString(),
    };

    // TODO: Implement actual file export (CSV/JSON)
    console.log('Export data:', JSON.stringify(data, null, 2));
    Alert.alert('Export', 'Data export functionality will be implemented soon');
  };

  const handleImportData = async () => {
    try {
      // Pick a CSV file
      const result = await DocumentPicker.getDocumentAsync({
        type: ['text/csv', 'text/comma-separated-values', 'application/csv', '*/*'],
        copyToCacheDirectory: true,
      });

      if (result.canceled || !result.assets || result.assets.length === 0) {
        return;
      }

      const file = result.assets[0];
      
      // Read file content
      const content = await FileSystem.readAsStringAsync(file.uri);

      // Validate CSV format
      if (!isValidIBKRCSV(content)) {
        Alert.alert(
          'Invalid File',
          'This doesn\'t appear to be a valid IBKR CSV export. Please make sure you\'re importing an Open Positions report from Interactive Brokers.'
        );
        return;
      }

      // Parse CSV
      const parseResult = parseIBKRCSV(content);

      if (parseResult.positions.length === 0) {
        Alert.alert(
          'No Positions Found',
          parseResult.errors.length > 0
            ? `Errors: ${parseResult.errors.join(', ')}`
            : 'No valid positions were found in the CSV file.'
        );
        return;
      }

      // Import positions
      let importedCount = 0;
      let skippedCount = 0;

      for (const position of parseResult.positions) {
        // Check if asset already exists
        const existingAsset = getAssetByTicker(position.asset.ticker);

        if (existingAsset) {
          // Add trade to existing asset
          addTrade({
            ...position.trade,
            assetId: existingAsset.id,
          });
          skippedCount++;
        } else {
          // Create new asset and trade
          const newAsset = addAsset(position.asset);
          addTrade({
            ...position.trade,
            assetId: newAsset.id,
          });
          importedCount++;
        }
      }

      Alert.alert(
        'Import Complete',
        `Successfully imported ${importedCount} new assets with trades.\n${skippedCount > 0 ? `${skippedCount} trades added to existing assets.` : ''}`
      );
    } catch (error) {
      console.error('Import error:', error);
      Alert.alert(
        'Import Failed',
        'An error occurred while importing the CSV file. Please try again.'
      );
    }
  };

  const handleLoadSampleData = () => {
    Alert.alert(
      'Load Sample Data',
      'This will import 8 sample stock positions (AMD, AMZN, GOOGL, HIMS, IBKR, NVDA, SCHD, UBER) from IBKR format.',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Load Data',
          onPress: () => {
            let importedCount = 0;
            let skippedCount = 0;

            for (const position of SAMPLE_IBKR_POSITIONS) {
              const existingAsset = getAssetByTicker(position.asset.ticker);

              if (existingAsset) {
                addTrade({
                  ...position.trade,
                  assetId: existingAsset.id,
                });
                skippedCount++;
              } else {
                const newAsset = addAsset(position.asset);
                addTrade({
                  ...position.trade,
                  assetId: newAsset.id,
                });
                importedCount++;
              }
            }

            Alert.alert(
              'Sample Data Loaded',
              `Successfully imported ${importedCount} new assets with trades.${skippedCount > 0 ? `\n${skippedCount} trades added to existing assets.` : ''}`
            );
          },
        },
      ]
    );
  };

  const handleClearAllData = () => {
    Alert.alert(
      'Clear All Data',
      'This will permanently delete all your assets and trades. This action cannot be undone.',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete Everything',
          style: 'destructive',
          onPress: () => {
            clearAssets();
            clearTrades();
            storageHelpers.clearAll();
            Alert.alert('Success', 'All data has been cleared');
          },
        },
      ]
    );
  };

  const stats = {
    assetsCount: assets.length,
    tradesCount: trades.length,
  };

  return (
    <SettingsScreen
      baseCurrency={baseCurrency}
      onCurrencyChange={handleCurrencyChange}
      onExportData={handleExportData}
      onImportData={handleImportData}
      onLoadSampleData={handleLoadSampleData}
      onClearAllData={handleClearAllData}
      stats={stats}
    />
  );
}
