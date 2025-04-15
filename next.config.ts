/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Remove the basePath since you'll be using a custom domain
  basePath: '',
  // Required for GitHub Pages
  images: {
    unoptimized: true,
  },
  // Remove the assetPrefix or set it to your domain if needed
  assetPrefix: '',
  // Set this to true if you want cleaner URLs
  trailingSlash: false,
}

module.exports = nextConfig