/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",        // Uncomment for static export
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: "out",
  images: {
    unoptimized: true,
  },
  basePath: "",
  // eslint config moved to .eslintrc or eslint.config.js
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  turbopack: {
    root: process.cwd()
  },
}

module.exports = nextConfig