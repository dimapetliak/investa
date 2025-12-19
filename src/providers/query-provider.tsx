/**
 * React Query Provider
 * 
 * Sets up React Query with optimal settings for a mobile offline-first app.
 */

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { ReactNode } from 'react';

// Create a client with mobile-optimized settings
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Retry failed requests up to 2 times
      retry: 2,
      retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
      
      // Keep data fresh for 30 seconds
      staleTime: 30 * 1000,
      
      // Keep unused data in cache for 5 minutes
      gcTime: 5 * 60 * 1000,
      
      // Refetch on mount if data is stale
      refetchOnMount: true,
      
      // Don't refetch on reconnect by default (manual control)
      refetchOnReconnect: false,
      
      // Don't refetch on window focus for mobile
      refetchOnWindowFocus: false,
    },
    mutations: {
      retry: 1,
    },
  },
});

interface QueryProviderProps {
  children: ReactNode;
}

export function QueryProvider({ children }: QueryProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}

// Export the client for use in hooks
export { queryClient };

