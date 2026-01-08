import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  async rewrites() {
    return [
      {
        source: "/sala/:roomId",
        destination: "/room/:roomId",
      },
    ];
  },
};

export default nextConfig;
