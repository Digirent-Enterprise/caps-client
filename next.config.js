const path = require("path");

const dotenv = require("dotenv");

const { i18n } = require("./next-i18next.config");
dotenv.config();
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  i18n,
  pageExtensions: ["ts", "tsx", "js", "jsx"],
  serverRuntimeConfig: {
    PROJECT_ROOT: __dirname,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "style")],
  },
  env: {
    BACKEND_URL: process.env.BACKEND_URL,
    SOCKET_SERVER_URL: process.env.SOCKET_SERVER_URL,
    OPEN_AI_API: process.env.OPENAI_API_KEY,
  },
};

module.exports = nextConfig;
