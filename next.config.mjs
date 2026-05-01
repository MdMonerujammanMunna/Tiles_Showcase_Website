/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    // https://i.ibb.co.com/zHTJvNCs/4.jpg
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
