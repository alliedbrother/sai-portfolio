/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export with <Image />
  },
  basePath: '/sai-portfolio',
  assetPrefix: '/sai-portfolio/',
}

export default nextConfig;