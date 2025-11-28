import { SettingsScreen } from '@/screens/settings';

function useSettings(): { state: any; actions: any; isLoading: any; } {
  return {
    state: {
      notificationsEnabled: true,
      darkModeEnabled: false,
      currency: 'USD',
      language: 'en',
    },
    actions: {
      toggleNotifications: () => {},
    },
    isLoading: false,
  }
}

export default function SettingsRoute() {
  const { state, actions, isLoading } = useSettings();

  return <SettingsScreen state={state} actions={actions} isLoading={isLoading} />;
}


