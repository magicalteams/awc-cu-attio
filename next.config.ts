import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: false,
  reactStrictMode: true,
  typedRoutes: true,
  // Pin the file-trace root to this project so a stray lockfile in the user's
  // home directory doesn't pull in unrelated files.
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
