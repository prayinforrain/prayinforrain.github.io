/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
