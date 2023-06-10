import React, { memo } from 'react';
import { ThemeProvider } from '@emotion/react';
import Router from '@routes/Router';
import { queryClient } from '@utils/queryClient';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import AppTheme from './theme';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <ThemeProvider theme={AppTheme}>
        <Router />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default memo(App);
