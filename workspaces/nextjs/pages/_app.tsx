/* eslint-disable @typescript-eslint/no-var-requires */
import { ChakraProvider } from '@chakra-ui/react';

import type { AppProps } from 'next/app';

import '../styles/globals.css';

if (process.env.NODE_ENV === 'development') {
  if (typeof window === 'undefined') {
    const { server } = require('../mocks/server');
    server.listen();
  } else {
    const { worker } = require('../mocks/browser');
    worker.start();
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
