/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.NEXT_PRIVATE_BASE_API_URL}/:path*`,
      },
    ];
  },
  images: {
    domains: ['localhost:8081', 'media0.giphy.com',],
  },
}

module.exports = nextConfig
