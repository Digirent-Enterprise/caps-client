module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  plugins: ["@typescript-eslint", "prettier"],
  extends: [
    "prettier",
    "plugin:tailwindcss/recommended",
    "next/core-web-vitals",
    "next",
  ],
  rules: {
    "comma-dangle": "off",
    "prettier/prettier": [
      "error",
      {
        htmlWhitespaceSensitivity: "css",
        semi: true,
        endOfLine: "auto",
        singleQuote: false,
      },
    ],
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "internal"],
        pathGroups: [
          {
            pattern: "react",
            group: "external",
            position: "before",
          },
        ],
        pathGroupsExcludedImportTypes: ["react"],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
    "@next/next/no-img-element": "off",
  },
};
