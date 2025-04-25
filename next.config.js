/** @type {import('next').NextConfig} */
module.exports = {
  eslint: {
    ignoreDuringBuilds: true
  },
  typescript: {
    ignoreBuildErrors: true
  },
  images: {
    remotePatterns: [
      new URL('https://placehold.co/**'), 
      new URL('https://i.scdn.co/**')
    ],
  },
};