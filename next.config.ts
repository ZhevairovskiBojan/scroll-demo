import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/scroll-demo",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
