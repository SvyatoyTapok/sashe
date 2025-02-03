/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '4300',
        pathname: '/**', // Разрешить все изображения
      },
    ],
  },
};

module.exports = nextConfig;
