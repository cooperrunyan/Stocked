const withPWA = require('next-pwa');

/** @type {import('next').NextConfig} */
module.exports = withPWA({
  reactStrictMode: true,
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development',
    buildExcludes: [/middleware-manifest.json$/],
    scope: '/',
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },

  async redirects() {
    return [
      {
        source: '/',
        destination: '/dashboard',
        permanent: true,
      },
      {
        source: '/lists',
        destination: '/lists/0',
        permanent: true,
      },
    ];
  },

  typescript: {
    ignoreBuildErrors: true,
  },
});
