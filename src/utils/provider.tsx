'use client';

import React from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ReactQueryStreamedHydration } from '@tanstack/react-query-next-experimental';

export const queryClient = new QueryClient();

function Providers({ children }: React.PropsWithChildren) {
  const [client] = React.useState(queryClient);

  return (
    <QueryClientProvider client={client}>
      {/* TODO: include later */}
      {/* <ReactQueryStreamedHydration> */}
      {children}
      {/* </ReactQueryStreamedHydration> */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default Providers;

