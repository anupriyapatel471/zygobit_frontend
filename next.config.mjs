/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images.unsplash.com",
      "assets.aceternity.com",
      "pbs.twimg.com",
      "aceternity.com",
      "zygobit-images.s3.ap-south-1.amazonaws.com",
    ],
  },
  compress: true,
  swcMinify: true,
  experimental: {
    optimizeCss: true,
  },
  async redirects() {
    return [
      {
        source: "/aboutus",
        destination: "/about-us",
        permanent: true,
      },
      {
        source: "/services",
        destination: "/services/mobile-app-development",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
