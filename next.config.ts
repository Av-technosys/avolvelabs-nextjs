import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: "/managed-services",
        destination: "/services/managed-services",
        permanent: true, 
      },
      {
        source: "/2025/12/22/large-hi-tech-customer",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
