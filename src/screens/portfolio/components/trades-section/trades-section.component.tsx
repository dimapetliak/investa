import { Card, EmptyState, TradeRow } from '@/components/_shared';
import React, { memo, useCallback } from 'react';
import { ListRenderItem, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Trade } from '../../portfolio.types';
import { TradesSectionProps } from './trades-section.types';

export const TradesSection = memo(({
  trades,
  onViewTrade,
}: TradesSectionProps) => {
  const renderItem: ListRenderItem<Trade> = useCallback(({ item }) => {
    return (
      <Card shadow>
        <TradeRow
          key={item.id}
          ticker={item.ticker}
          assetType={item.assetType}
          type={item.type}
          price={item.price}
          quantity={item.quantity}
          date={item.date}
          onPress={() => onViewTrade(item.id)}
        />
      </Card>
    )
  }, [])

  const keyExtractor = (item: any) => item.id

  if (trades) {
    return (
      <View style={{ height: '100%', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <EmptyState
          icon="trending-up"
          title="No trades yet"
          message="Start tracking your investments by adding your first trade"
        />
      </View>

    )
  }

  return (
    <FlatList data={trades} renderItem={renderItem} keyExtractor={keyExtractor} />
  );
});

