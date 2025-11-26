import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  // Next.js nodemon
  reactStrictMode: false,
  eslint: {
    // ESLint
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
