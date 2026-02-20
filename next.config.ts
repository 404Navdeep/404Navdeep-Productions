import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.navdeep.online",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
