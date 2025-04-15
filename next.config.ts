/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Avoid using trailing slashes in routes
  trailingSlash: false,
  // Configure the base path - use your actual repository name
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio-dhanusha' : '',
  // Required for GitHub Pages
  images: {
    unoptimized: true,
  },
  // This will tell Next.js where assets will be served from
  assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio-dhanusha' : '',
}

module.exports = nextConfig