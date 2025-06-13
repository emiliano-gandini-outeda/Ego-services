/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['blob.v0.dev'],
    unoptimized: process.env.NODE_ENV === 'development',
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Allow both /app and /pages directories to coexist
  experimental: {
    appDir: true,
  }
}

export default nextConfig
