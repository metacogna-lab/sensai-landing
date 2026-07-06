import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

/** Project root — avoids Turbopack picking a parent dir with pnpm-lock.yaml. */
const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  reactStrictMode: true,
  turbopack: {
    root: projectRoot,
  },
};

export default nextConfig;
