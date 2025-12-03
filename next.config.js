/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // 优化图片加载
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // 移动端优化
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
}

module.exports = nextConfig

