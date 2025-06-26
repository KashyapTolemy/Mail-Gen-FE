import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  assetPrefix: "./",
  reactStrictMode: true,
  trailingSlash: true,
};

export default nextConfig;
