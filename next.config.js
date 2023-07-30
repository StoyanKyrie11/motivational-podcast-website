/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.com" || "**.org" || "**.net" || "**.bg" || "**.eu",
      },
    ],
  },
};

module.exports = nextConfig;
