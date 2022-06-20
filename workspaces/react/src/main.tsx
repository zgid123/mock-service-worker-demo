import * as React from 'react';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import {
  QueryClient,
  ReactQueryDevtools,
  QueryClientProvider,
} from '@libs/rc-utils/queryHooks';

import App from 'App';

const queryClient = new QueryClient();

const container = document.getElementById('root');

if (!container) {
  throw 'Cannot find the root element';
}

const root = createRoot(container);

function renderRoot(): void {
  root.render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <ChakraProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ChakraProvider>
      </QueryClientProvider>
    </StrictMode>,
  );
}

if (process.env.NODE_ENV === 'development') {
  import('./mocks/browser').then(({ worker }) => {
    worker.start();

    renderRoot();
  });
} else {
  renderRoot();
}
