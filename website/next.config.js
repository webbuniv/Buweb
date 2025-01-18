/** @type {import('next').NextConfig} **/
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.hashnode.com',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
            protocol: 'https',
            hostname: 'drive.google.com',
      },
      {
            protocol: 'https',
            hostname: 'cloud.appwrite.io',
      },
    ],
    domains: ['cloud.appwrite.io'],
  },
}

module.exports = nextConfig
