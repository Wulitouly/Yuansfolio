import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath,
  images: { unoptimized: true },
  // Cloudflare-only worker files are validated by the normal vinext build.
  // GitHub Pages exports only the browser portfolio and does not bundle them.
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
