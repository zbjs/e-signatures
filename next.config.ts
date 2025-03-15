import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  minify: true,
  removeConsole: true,
  experimental: {
    optimizeCss: true, // Minifies CSS
  },
};

export default nextConfig;
