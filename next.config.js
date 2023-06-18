/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        // ...
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        // ...
      },
      {
        protocol: 'https',
        hostname: 'https://www.pexels.com/',
        // ...
      },
      {
        protocol: 'https',
        hostname: 'yt3.googleusercontent.com',
      },
    ],
  },
};

module.exports = nextConfig;
