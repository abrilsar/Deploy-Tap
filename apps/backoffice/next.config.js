
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: 'standalone',
  transpilePackages: ['@avila-tek/ui', '@avila-tek/models'],
  experimental: {
    instrumentationHook: true,
  },
};

module.exports = nextConfig