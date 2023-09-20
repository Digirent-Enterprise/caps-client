const path = require("path");

const dotenv = require("dotenv");

const { i18n } = require("./next-i18next.config");
dotenv.config();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n,
  images: {
    domains: ["cdn.tuoitre.vn", "static.mediacdn.vn"],
  },
  pageExtensions: ["ts", "tsx", "js", "jsx"],
  serverRuntimeConfig: {
    PROJECT_ROOT: __dirname,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "style")],
  },
  env: {
    OPEN_WEATHER_API: process.env.OPEN_WEATHER_API,
    BACKEND_SERVER_URL: process.env.BACKEND_SERVER_URL,
    SOCKET_SERVER_URL: process.env.SOCKET_SERVER_URL,
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
    SSL_PASSPHRASE: process.env.SSL_PASSPHRASE,
  },
};

module.exports = nextConfig;
