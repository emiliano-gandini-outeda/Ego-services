/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['blob.v0.dev'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
}

export default nextConfig
