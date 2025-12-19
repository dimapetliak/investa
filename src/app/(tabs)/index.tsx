import { usePriceSync } from '@/hooks';
import { HomeScreen, useHomeData } from '@/screens/home';
import { useUserName } from '@/store';
import { router } from 'expo-router';
import React from 'react';
import { Alert } from 'react-native';

export default function HomeRoute() {
  const userName = useUserName();
  const homeData = useHomeData();
  
  // Fetch and sync prices - this also triggers portfolio recomputation
  usePriceSync();

  // Navigation handlers
  const handleNotificationPress = () => {
    Alert.alert('Notifications', 'Notifications feature coming soon!');
  };

  const handleViewInvestments = () => {
    router.push('/assets');
  };

  const handleViewSavings = () => {
    router.push('/savings');
  };

  const handleViewSavingsGoal = (goalId: string) => {
    // Future: navigate to goal details
    Alert.alert('Savings Goal', `Goal ${goalId} details coming soon!`);
  };

  const handleViewActivity = (activityId: string) => {
    // Navigate to trade/transaction details
    router.push(`/edit-trade?id=${activityId}`);
  };

  const handleAddSavingsGoal = () => {
    // Future: navigate to add savings goal
    Alert.alert('Add Goal', 'Savings goal feature coming soon!');
  };

  return (
    <HomeScreen
      userName={userName}
      notificationCount={0}
      data={homeData}
      onNotificationPress={handleNotificationPress}
      onViewInvestments={handleViewInvestments}
      onViewSavings={handleViewSavings}
      onViewSavingsGoal={handleViewSavingsGoal}
      onViewActivity={handleViewActivity}
      onAddSavingsGoal={handleAddSavingsGoal}
    />
  );
}
