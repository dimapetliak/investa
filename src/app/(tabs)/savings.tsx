import { SavingsScreen } from '@/screens/savings';
import React from 'react';
import { Alert } from 'react-native';

export default function SavingsRoute() {
  const handleAddGoal = () => {
    Alert.alert('Coming Soon', 'Goal creation will be available in a future update.');
  };

  const handleViewGoal = (id: string) => {
    Alert.alert('Coming Soon', 'Goal details will be available in a future update.');
  };

  const handleAddAccount = () => {
    Alert.alert('Coming Soon', 'Account creation will be available in a future update.');
  };

  const handleViewAccount = (id: string) => {
    Alert.alert('Coming Soon', 'Account details will be available in a future update.');
  };

  return (
    <SavingsScreen
      onAddGoal={handleAddGoal}
      onViewGoal={handleViewGoal}
      onAddAccount={handleAddAccount}
      onViewAccount={handleViewAccount}
    />
  );
}

