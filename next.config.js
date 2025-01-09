/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  compiler: {
    emotion: true,
  },
  serverRuntimeConfig: {
    CRUD_PATH: process.env.CRUD_PATH ? process.env.CRUD_PATH : 'REPLACE_SERVER_ENV_CRUD_PATH'
  },
  publicRuntimeConfig: {
    PUBLIC_FILES_PATH: process.env.PUBLIC_FILES_PATH ? process.env.PUBLIC_FILES_PATH : 'REPLACE_SERVER_ENV_PUBLIC_FILES_PATH',
    WEBSITE_BASE_PATH: process.env.WEBSITE_BASE_PATH ? process.env.WEBSITE_BASE_PATH : 'REPLACE_SERVER_ENV_WEBSITE_BASE_PATH',
  },
  async headers() {
    return [
      {
        source: "/:path*.pdf",
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=604800, must-revalidate'
          },
        ]
      }
    ]
  },
  async redirects() {
    return [
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost'
      },
    ],
    minimumCacheTTL: 2629800
  }
}

module.exports = nextConfig
