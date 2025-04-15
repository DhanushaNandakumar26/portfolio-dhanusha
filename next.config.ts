const isProduction = process.env.NODE_ENV === 'production';
const domainName = 'dhanushanandakumar.com'; // Replace with your actual domain

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // No basePath needed with custom domain
  assetPrefix: isProduction ? `https://${domainName}` : '',
}

module.exports = nextConfig