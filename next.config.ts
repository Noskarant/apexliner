import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: isGitHubPages ? "export" : undefined,
  distDir: isGitHubPages ? ".next-github-pages" : ".next",
  basePath: isGitHubPages ? "/apexliner" : undefined,
  assetPrefix: isGitHubPages ? "/apexliner/" : undefined,
  trailingSlash: isGitHubPages,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
