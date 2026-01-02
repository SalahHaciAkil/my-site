import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  // Static export configuration for GitHub Pages deployment
  // The GitHub Actions workflow will automatically handle basePath if needed
  output: "export",
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
