/** @type {import('next').NextConfig} */
module.exports = {
  swcMinify: true,
  reactStrictMode: true,
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(ts)x?$/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
            experimentalWatchApi: true,
            onlyCompileBundledFiles: true,
          },
        },
      ],
    });

    return config;
  },
};
