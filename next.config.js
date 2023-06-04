const { i18n } = require("./next-i18next.config");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n,
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  serverRuntimeConfig: {
    PROJECT_ROOT: __dirname,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i1-vnexpress.vnecdn.net",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
