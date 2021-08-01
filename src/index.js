// © Copyright 2021 KMG: Sudoku
import React from 'react';
import ReactDOM from 'react-dom';
import { Grommet } from 'grommet';
import { grommet } from 'grommet/themes';
import { deepMerge } from 'grommet/utils';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import Board from './Board';

const client = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      refetchInterval: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    },
  },
});

const theme = deepMerge(grommet, {
  global: {
    colors: {
      app: '#E7BEFF',
    },
    font: {
      family: 'Lato',
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <Grommet theme={theme} full={true}>
        <Board />
      </Grommet>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
