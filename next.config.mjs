/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['blob.v0.dev'],
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Uncomment for static export
  // output: 'export',
  // trailingSlash: true,
}

export default nextConfig
