/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  output: 'export',
  basePath: '/OmConstruction', // IMPORTANT: Change 'OmConstruction' to your actual GitHub repository name
  images: {
    unoptimized: true,
  },
}

export default nextConfig
