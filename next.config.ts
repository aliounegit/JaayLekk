// next.config.ts
import type { NextConfig } from "next";

// PWA config
const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
});

const nextConfig: NextConfig = {
  // Désactiver Turbopack et forcer Webpack (plus stable)
  webpack: (config) => {
    return config;
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },

  experimental: {
    // Si jamais Turbopack est forcé, on le vide
    turbopack: false,
  },
};

// Export final avec PWA
export default withPWA(nextConfig);
