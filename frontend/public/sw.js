if (!self.define) {
  let e,
    s = {};
  const n = (n, t) => (
    (n = new URL(n + '.js', t).href),
    s[n] ||
      new Promise((s) => {
        if ('document' in self) {
          const e = document.createElement('script');
          (e.src = n), (e.onload = s), document.head.appendChild(e);
        } else (e = n), importScripts(n), s();
      }).then(() => {
        let e = s[n];
        if (!e) throw new Error(`Module ${n} didn’t register its module`);
        return e;
      })
  );
  self.define = (t, i) => {
    const a = e || ('document' in self ? document.currentScript.src : '') || location.href;
    if (s[a]) return;
    let c = {};
    const o = (e) => n(e, a),
      r = { module: { uri: a }, exports: c, require: o };
    s[a] = Promise.all(t.map((e) => r[e] || o(e))).then((e) => (i(...e), c));
  };
}
define(['./workbox-1846d813'], function (e) {
  'use strict';
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        { url: '/_next/server/pages/_middleware.js', revision: 'qyDVdilVftjCmon3IPbUs' },
        { url: '/_next/static/chunks/framework-91d7f78b5b4003c8.js', revision: 'qyDVdilVftjCmon3IPbUs' },
        { url: '/_next/static/chunks/main-8acdf038c9c76025.js', revision: 'qyDVdilVftjCmon3IPbUs' },
        { url: '/_next/static/chunks/pages/_app-da25f9018dde3eab.js', revision: 'qyDVdilVftjCmon3IPbUs' },
        { url: '/_next/static/chunks/pages/_error-2280fa386d040b66.js', revision: 'qyDVdilVftjCmon3IPbUs' },
        { url: '/_next/static/chunks/pages/dashboard-a9da017945a63d2e.js', revision: 'qyDVdilVftjCmon3IPbUs' },
        { url: '/_next/static/chunks/pages/lists/%5Bid%5D-97e0ee9db02ff8a1.js', revision: 'qyDVdilVftjCmon3IPbUs' },
        { url: '/_next/static/chunks/pages/login-948334ac963e4b68.js', revision: 'qyDVdilVftjCmon3IPbUs' },
        { url: '/_next/static/chunks/pages/search-00532aec80e7ce59.js', revision: 'qyDVdilVftjCmon3IPbUs' },
        { url: '/_next/static/chunks/pages/search/%5Bid%5D-87b2ab23d298bb3a.js', revision: 'qyDVdilVftjCmon3IPbUs' },
        { url: '/_next/static/chunks/pages/settings-5dec8634ba0aee70.js', revision: 'qyDVdilVftjCmon3IPbUs' },
        { url: '/_next/static/chunks/pages/signup-938851e3c24b4280.js', revision: 'qyDVdilVftjCmon3IPbUs' },
        { url: '/_next/static/chunks/polyfills-5cd94c89d3acac5f.js', revision: 'qyDVdilVftjCmon3IPbUs' },
        { url: '/_next/static/chunks/webpack-514908bffb652963.js', revision: 'qyDVdilVftjCmon3IPbUs' },
        { url: '/_next/static/chunks/webpack-middleware-514908bffb652963.js', revision: 'qyDVdilVftjCmon3IPbUs' },
        { url: '/_next/static/css/2c62e2d13cc27598.css', revision: 'qyDVdilVftjCmon3IPbUs' },
        { url: '/_next/static/css/359638875f028393.css', revision: 'qyDVdilVftjCmon3IPbUs' },
        { url: '/_next/static/css/576c7f451bd4c177.css', revision: 'qyDVdilVftjCmon3IPbUs' },
        { url: '/_next/static/css/dae2a92a30669ecd.css', revision: 'qyDVdilVftjCmon3IPbUs' },
        { url: '/_next/static/css/f6ea15280fe0ba14.css', revision: 'qyDVdilVftjCmon3IPbUs' },
        { url: '/_next/static/css/fe255c26c2482799.css', revision: 'qyDVdilVftjCmon3IPbUs' },
        { url: '/_next/static/qyDVdilVftjCmon3IPbUs/_buildManifest.js', revision: 'qyDVdilVftjCmon3IPbUs' },
        { url: '/_next/static/qyDVdilVftjCmon3IPbUs/_middlewareManifest.js', revision: 'qyDVdilVftjCmon3IPbUs' },
        { url: '/_next/static/qyDVdilVftjCmon3IPbUs/_ssgManifest.js', revision: 'qyDVdilVftjCmon3IPbUs' },
        { url: '/favicon.ico', revision: '8b5111dcbf52de51a834b8e9c2e8824b' },
        { url: '/logo.svg', revision: '10adf68a05002f37f025dd45c7462c42' },
        { url: '/manifest.json', revision: '87ffd3998ece1b12b2b78eb65bed7607' },
        { url: '/robots.txt', revision: 'fa1ded1ed7c11438a9b0385b1e112850' },
      ],
      { ignoreURLParametersMatching: [] },
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({ request: e, response: s, event: n, state: t }) =>
              s && 'opaqueredirect' === s.type ? new Response(s.body, { status: 200, statusText: 'OK', headers: s.headers }) : s,
          },
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({ cacheName: 'google-fonts-webfonts', plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 })] }),
      'GET',
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({ cacheName: 'google-fonts-stylesheets', plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })] }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({ cacheName: 'static-font-assets', plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })] }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({ cacheName: 'static-image-assets', plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })] }),
      'GET',
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({ cacheName: 'next-image', plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })] }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [new e.RangeRequestsPlugin(), new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [new e.RangeRequestsPlugin(), new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({ cacheName: 'static-js-assets', plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })] }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({ cacheName: 'static-style-assets', plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })] }),
      'GET',
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({ cacheName: 'next-data', plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })] }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({ cacheName: 'static-data-assets', plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })] }),
      'GET',
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith('/api/auth/') && !!s.startsWith('/api/');
      },
      new e.NetworkFirst({ cacheName: 'apis', networkTimeoutSeconds: 10, plugins: [new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 })] }),
      'GET',
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith('/api/');
      },
      new e.NetworkFirst({ cacheName: 'others', networkTimeoutSeconds: 10, plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })] }),
      'GET',
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({ cacheName: 'cross-origin', networkTimeoutSeconds: 10, plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 })] }),
      'GET',
    );
});
