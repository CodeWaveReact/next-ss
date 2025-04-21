import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.imgur.com",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        protocol: "https",
        hostname: "m.media-amazon.com/images",
      },
      {
        protocol: "https",
        hostname: "api.escuelajs.co",
      },
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
      },
      {
        protocol: "https",
        hostname: "redux-toolkit.js.org",
      },
      {
        protocol: "https",
        hostname: "emprendedores.es",
      },
    ],
  },
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/products",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
