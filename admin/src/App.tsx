import Router from '@routes/Router';
import { queryClient } from '@utils/queryClient';
import React, { memo } from 'react';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Router />
    </QueryClientProvider>
  );
}

export default memo(App);
