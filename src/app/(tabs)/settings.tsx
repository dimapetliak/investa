import { isValidIBKRCSV, parseIBKRCSV, SAMPLE_IBKR_POSITIONS } from '@/lib';
import { SettingsScreen } from '@/screens/settings';
import { useAssetsStore, useSettingsStore, useTradesStore } from '@/store';
import * as DocumentPicker from 'expo-document-picker';
import { File } from 'expo-file-system';
// import * as Sharing from 'expo-sharing';
import React, { useState } from 'react';
import { Alert } from 'react-native';

export default function SettingsRoute() {
  const [isExporting, setIsExporting] = useState(false);

  // Assets & Trades stores
  const clearAssets = useAssetsStore((state) => state.clearAssets);
  const clearTrades = useTradesStore((state) => state.clearTrades);
  const assets = useAssetsStore((state) => state.assets);
  const trades = useTradesStore((state) => state.trades);
  const addAsset = useAssetsStore((state) => state.addAsset);
  const getAssetByTicker = useAssetsStore((state) => state.getAssetByTicker);
  const addTrade = useTradesStore((state) => state.addTrade);

  // Settings store
  const baseCurrency = useSettingsStore((state) => state.baseCurrency);
  const setBaseCurrency = useSettingsStore((state) => state.setBaseCurrency);
  const priceRefreshInterval = useSettingsStore((state) => state.priceRefreshInterval);
  const setPriceRefreshInterval = useSettingsStore((state) => state.setPriceRefreshInterval);
  const stockPriceSource = useSettingsStore((state) => state.stockPriceSource);
  const setStockPriceSource = useSettingsStore((state) => state.setStockPriceSource);
  const cryptoPriceSource = useSettingsStore((state) => state.cryptoPriceSource);
  const setCryptoPriceSource = useSettingsStore((state) => state.setCryptoPriceSource);
  const security = useSettingsStore((state) => state.security);
  const setSecurity = useSettingsStore((state) => state.setSecurity);
  const resetToDefaults = useSettingsStore((state) => state.resetToDefaults);

  // const handleExportData = async () => {
  //   if (assets.length === 0 && trades.length === 0) {
  //     Alert.alert('No Data', 'There is no data to export.');
  //     return;
  //   }

  //   setIsExporting(true);

  //   try {
  //     const exportData = {
  //       version: '1.0.0',
  //       exportedAt: new Date().toISOString(),
  //       settings: {
  //         baseCurrency,
  //         priceRefreshInterval,
  //         stockPriceSource,
  //         cryptoPriceSource,
  //       },
  //       assets,
  //       trades,
  //     };

  //     const jsonString = JSON.stringify(exportData, null, 2);
  //     const fileName = `investa-export-${new Date().toISOString().split('T')[0]}.json`;

  //     // Create file using new expo-file-system API
  //     const exportFile = new File(Paths.cache, fileName);
  //     exportFile.create({ overwrite: true });
  //     exportFile.write(jsonString);

  //     // Check if sharing is available
  //     const isAvailable = await Sharing.isAvailableAsync();

  //     if (isAvailable) {
  //       await Sharing.shareAsync(exportFile.uri, {
  //         mimeType: 'application/json',
  //         dialogTitle: 'Export Portfolio Data',
  //         UTI: 'public.json',
  //       });
  //     } else {
  //       // Fallback for platforms where sharing isn't available
  //       Alert.alert(
  //         'Export Complete',
  //         `Data exported to: ${exportFile.uri}\n\nSharing is not available on this platform.`
  //       );
  //     }
  //   } catch (error) {
  //     console.error('Export error:', error);
  //     Alert.alert(
  //       'Export Failed',
  //       'An error occurred while exporting data. Please try again.'
  //     );
  //   } finally {
  //     setIsExporting(false);
  //   }
  // };

  const handleImportData = async () => {
    try {
      // Pick a file (CSV or JSON)
      const result = await DocumentPicker.getDocumentAsync({
        type: [
          'text/csv',
          'text/comma-separated-values',
          'application/csv',
          'application/json',
          '*/*',
        ],
        copyToCacheDirectory: true,
      });

      if (result.canceled || !result.assets || result.assets.length === 0) {
        return;
      }

      const pickedFile = result.assets[0];
      const importFile = new File(pickedFile.uri);
      const content = await importFile.text();

      // Check if it's a JSON file (our own export format)
      if (pickedFile.name?.endsWith('.json') || content.trim().startsWith('{')) {
        try {
          const importedData = JSON.parse(content);

          // Validate it's our export format
          if (importedData.assets && importedData.trades) {
            Alert.alert(
              'Import Portfolio',
              `Found ${importedData.assets.length} assets and ${importedData.trades.length} trades.\n\nHow would you like to import?`,
              [
                { text: 'Cancel', style: 'cancel' },
                {
                  text: 'Merge',
                  onPress: () => importJsonData(importedData, false),
                },
                {
                  text: 'Replace All',
                  style: 'destructive',
                  onPress: () => importJsonData(importedData, true),
                },
              ]
            );
            return;
          }
        } catch {
          // Not valid JSON, try as CSV
        }
      }

      // Try as IBKR CSV
      if (!isValidIBKRCSV(content)) {
        Alert.alert(
          'Invalid File',
          "This doesn't appear to be a valid IBKR CSV export or Investa JSON backup. Please make sure you're importing a supported file format."
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
        'Import Complete',
        `Successfully imported ${importedCount} new assets with trades.\n${
          skippedCount > 0 ? `${skippedCount} trades added to existing assets.` : ''
        }`
      );
    } catch (error) {
      console.error('Import error:', error);
      Alert.alert(
        'Import Failed',
        'An error occurred while importing the file. Please try again.'
      );
    }
  };

  const importJsonData = (
    data: { assets: typeof assets; trades: typeof trades },
    replaceAll: boolean
  ) => {
    try {
      if (replaceAll) {
        // Clear existing data first
        clearAssets();
        clearTrades();
      }

      // Import assets
      let assetsImported = 0;
      const assetIdMap: Record<string, string> = {};

      for (const asset of data.assets) {
        const existingAsset = getAssetByTicker(asset.ticker);

        if (existingAsset && !replaceAll) {
          // Map old ID to existing ID for trades
          assetIdMap[asset.id] = existingAsset.id;
        } else {
          const newAsset = addAsset({
            type: asset.type,
            ticker: asset.ticker,
            name: asset.name,
            currency: asset.currency,
          });
          assetIdMap[asset.id] = newAsset.id;
          assetsImported++;
        }
      }

      // Import trades with mapped asset IDs
      let tradesImported = 0;
      for (const trade of data.trades) {
        const mappedAssetId = assetIdMap[trade.assetId];
        if (mappedAssetId) {
          addTrade({
            assetId: mappedAssetId,
            type: trade.type,
            quantity: trade.quantity,
            price: trade.price,
            fee: trade.fee,
            timestamp: trade.timestamp,
            comment: trade.comment,
          });
          tradesImported++;
        }
      }

      Alert.alert(
        'Import Complete',
        `Successfully imported ${assetsImported} assets and ${tradesImported} trades.`
      );
    } catch (error) {
      console.error('JSON import error:', error);
      Alert.alert('Import Failed', 'An error occurred while importing the data.');
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
              `Successfully imported ${importedCount} new assets with trades.${
                skippedCount > 0
                  ? `\n${skippedCount} trades added to existing assets.`
                  : ''
              }`
            );
          },
        },
      ]
    );
  };

  const handleClearAllData = () => {
    Alert.alert(
      'Clear All Data',
      'This will permanently delete all your assets, trades, and settings. This action cannot be undone.',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete Everything',
          style: 'destructive',
          onPress: () => {
            clearAssets();
            clearTrades();
            resetToDefaults();
            Alert.alert('Success', 'All data has been cleared');
          },
        },
      ]
    );
  };

  const handleSecurityChange = (settings: { useFaceId?: boolean; usePin?: boolean }) => {
    // Show placeholder alert for MVP
    const feature = settings.useFaceId !== undefined ? 'Face ID/Touch ID' : 'PIN';
    const enabling = settings.useFaceId ?? settings.usePin;

    if (enabling) {
      Alert.alert(
        'Coming Soon',
        `${feature} security is not yet implemented in this version. This setting will be saved for future use.`,
        [
          { text: 'Cancel', style: 'cancel' },
          {
            text: 'Save Setting',
            onPress: () => setSecurity(settings),
          },
        ]
      );
    } else {
      setSecurity(settings);
    }
  };

  const stats = {
    assetsCount: assets.length,
    tradesCount: trades.length,
  };

  return (
    <SettingsScreen
      baseCurrency={baseCurrency}
      onCurrencyChange={setBaseCurrency}
      priceRefreshInterval={priceRefreshInterval}
      onPriceRefreshIntervalChange={setPriceRefreshInterval}
      stockPriceSource={stockPriceSource}
      onStockPriceSourceChange={setStockPriceSource}
      cryptoPriceSource={cryptoPriceSource}
      onCryptoPriceSourceChange={setCryptoPriceSource}
      security={security}
      onSecurityChange={handleSecurityChange}
      onExportData={() => {}}
      onImportData={handleImportData}
      onLoadSampleData={handleLoadSampleData}
      onClearAllData={handleClearAllData}
      stats={stats}
      isExporting={isExporting}
    />
  );
}
