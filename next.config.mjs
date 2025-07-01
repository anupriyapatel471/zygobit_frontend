// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//       domains: ['images.unsplash.com', 'pbs.twimg.com', "assets.aceternity.com"],
//     },
//   };

//   export default nextConfig;

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
  // compress: true, // Enables gzip compression
  swcMinify: true, // Ensures JS minification using SWC (default true)
  // experimental: {
  //   optimizeCss: true, // Only if you're using Next 13+ with app directory
  // },
};

export default nextConfig;
