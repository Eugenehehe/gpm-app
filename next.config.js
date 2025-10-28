/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Ensures it builds to a static site for Vercel
  output: 'export',

  // Ignore API routes during static export
  // (we’ll simulate them as JSON files)
  trailingSlash: true,
};

module.exports = nextConfig;
