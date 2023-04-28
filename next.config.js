const bundleAnalyzer = require('@next/bundle-analyzer');

const withAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZER == 1,
});

const IS_DEV_MODE = process.env.NODE_ENV !== 'production';
const ASSET_PREFIX = process.env.ASSET_PREFIX || '';

const config = {
  experimental: { scss: true },
  assetPrefix: ASSET_PREFIX,
  webpack: function (config) {
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
          name: '[name].[ext]',
        },
      },
    });

    return config;
  },
  publicRuntimeConfig: {
    API_URL: process.env.CLIENT_API_URL,
  },
  serverRuntimeConfig: {
    API_URL: process.env.SSR_API_URL,
  },
  env: {
    serverRuntimeConfig: {
      API_URL: process.env.SSR_API_URL,
    },
    publicRuntimeConfig: {
      IS_PROD: !IS_DEV_MODE,
      HOST_URL: process.env.HOST_URL,
      API_URL: process.env.CLIENT_API_URL,
      ASSET_PREFIX: ASSET_PREFIX,
      NODE_ENV: process.env.NODE_ENV,
    },
  },
};

module.exports = withAnalyzer(config);
