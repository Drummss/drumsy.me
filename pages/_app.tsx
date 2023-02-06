import React from 'react';
import Head from 'next/head';

import theme from '../theme';

// import { AppProps } from 'next/dist/next-server/lib/router/router';
import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';

type DrumsyMeProps = AppProps & {
  Component: {
    layout: any;
  };
};

const App = ({ Component, pageProps }: DrumsyMeProps) => {
  const layout = Component.layout || ((page: any) => page);

  return (
    <>
      <Head>
        <title>Drumsy.Me</title>
        <link rel='icon' href='/favicon.png' />
      </Head>
      <ChakraProvider theme={theme}>
        {layout(<Component {...pageProps} />)}
      </ChakraProvider>
    </>
  );
};

export default App;
