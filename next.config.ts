import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  // Standalone output for Docker deployment
  output: "standalone",
};

export default nextConfig;
