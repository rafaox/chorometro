import React from 'react';

import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react';

import { SidebarDrawerProvider } from '../hooks/useSidebarDrawerHook';

import { theme } from '../styles/theme';
import { CryProvider } from '../hooks/useCry';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <CryProvider>
        <SidebarDrawerProvider>
          <Component {...pageProps} />
        </SidebarDrawerProvider>
      </CryProvider>
    </ChakraProvider>
  );
}
export default MyApp
