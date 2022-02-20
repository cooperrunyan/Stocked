import React, { ReactChild } from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useCookies } from 'react-cookie';
import axios from 'axios';

import '../style/base.scss';

export default function ({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>Stocked</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, minimum-scale=1" />
        <meta name="description" content="DESCRIPTION" />
      </Head>
      <RouteGuard>
        <Component {...pageProps} />
      </RouteGuard>
    </>
  );
}

function RouteGuard({ children }: { children: ReactChild }) {
  const router = useRouter();
  const [cookie, setCookie] = useCookies(['jwt']);

  useEffect(() => {
    if (['/favicon.ico', '/manifest.json', '/sw.js'].includes(router.asPath)) return;
    if (['/login', '/signup'].includes(router.asPath)) return;

    (async () => {
      await axios.get('/api/login');
    })();
    console.log(cookie);
    // if (!req.cookies.jwt) location.href = '/login';
  }, []);

  return <>{children}</>;
}
