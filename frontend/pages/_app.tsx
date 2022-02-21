import React from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { AnimatePresence } from 'framer-motion';
import '../style/base.scss';
import { App } from 'src/components';
import { ThemeProvider } from 'src/context/Theme';

const themes = {
  light: {
    layer: '#000000',
    layer1: '#00000003',
    layer2: '#00000005',
    layer4: '#0000000a',
    layer8: '#00000014',
    layer12: '#0000001f',
    layer20: '#00000033',
    layer30: '#0000004d',
    background: '#ffffff',
  },
  dark: {
    layer: '#ffffff',
    layer1: '#ffffff05',
    layer2: '#ffffff0a',
    layer4: '#ffffff14',
    layer8: '#ffffff1f',
    layer12: '#ffffff33',
    layer20: '#ffffff4d',
    layer30: '#ffffff4d',
    background: '#000000',
  },
};

export default function ({ Component, pageProps, router }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>Stocked</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, minimum-scale=1" />
        <meta name="description" content="DESCRIPTION" />
      </Head>
      <ThemeProvider theme={themes.light}>
        <AnimatePresence exitBeforeEnter initial>
          <App>
            <AnimatePresence exitBeforeEnter initial={false}>
              <Component {...pageProps} key={router.route} canonical={router.route} />
            </AnimatePresence>
          </App>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}
