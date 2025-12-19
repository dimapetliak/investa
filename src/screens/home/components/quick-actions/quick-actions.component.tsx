import { Button, SectionHeader } from '@/components';
import { Spacing } from '@/theme/spacing';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import type { QuickActionsProps } from './quick-actions.types';

export const QuickActions = ({
  onAddTransaction,
  onAddTrade,
}: QuickActionsProps) => {
  return (
    <View style={styles.container}>
      <SectionHeader title="Quick Actions" />
      
      <View style={styles.actions}>
        <Button
          variant="outline"
          size="md"
          onPress={onAddTransaction}
          style={styles.button}
        >
          <View style={styles.buttonContent}>
            <Ionicons name="receipt-outline" size={20} style={styles.buttonIcon} />
            Add Transaction
          </View>
        </Button>
        
        <Button
          variant="outline"
          size="md"
          onPress={onAddTrade}
          style={styles.button}
        >
          <View style={styles.buttonContent}>
            <Ionicons name="swap-horizontal-outline" size={20} style={styles.buttonIcon} />
            Add Trade
          </View>
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: Spacing.lg,
  },
  actions: {
    flexDirection: 'row',
    gap: Spacing.sm,
  },
  button: {
    flex: 1,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonIcon: {
    marginRight: Spacing.xs,
  },
});

