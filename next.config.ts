import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output:"export",
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: ""
      }
    ]
  }
};

export default nextConfig;
