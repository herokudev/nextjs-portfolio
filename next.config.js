/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'images.ctfassets.net',
            port: '',
            pathname: '/wqm6ay3wbd4n/**',
          },
        ],
      },
}

module.exports = nextConfig
