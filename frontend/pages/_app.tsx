import React from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';

import '../style/base.scss';

export default function ({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>Stocked</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, minimum-scale=1" />
        <meta name="description" content="DESCRIPTION" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
