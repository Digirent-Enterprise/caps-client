const { i18n } = require("./next-i18next.config");
const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n,
  pageExtensions: ["ts", "tsx", "js", "jsx"],
  serverRuntimeConfig: {
    PROJECT_ROOT: __dirname,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'style')],
  },
};

module.exports = nextConfig;
