'use client';

import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { type Session } from 'next-auth';

import { setAuthToken } from '../axios.factory';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      staleTime: 0,
      refetchOnWindowFocus: false,
    },
  },
});

interface ReactQueryProviderProps extends React.PropsWithChildren {
  session: Session | null;
}
export function ReactQueryProvider({
  session,
  children,
}: ReactQueryProviderProps) {
  const [_queryClient] = useState(queryClient);

  if (session?.user) {
    setAuthToken(session?.user);
  }

  return (
    <QueryClientProvider client={_queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
