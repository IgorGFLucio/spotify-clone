/** @type {import('next').NextConfig} */

const config =
  process.env.BUILD_STATIC === 'true'
    ? {
        basePath: `/jogo`,
        trailingSlash: true,
        exportPathMap: async function () {
          return {
            '/': { page: '/' },
            '/404': { page: '/404' },
          };
        },
      }
    : {};

const nextConfig = {
  images: {
    domains: [''],
    loader: 'custom',
    disableStaticImages: true,
  },
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
  ...config,
};

module.exports = nextConfig;
