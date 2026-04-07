import type { NextConfig } from "next";

import { fileURLToPath } from "url";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
