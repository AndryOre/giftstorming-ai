module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb-base", "prettier"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": ["error"],
    "import/no-extraneous-dependencies": [
      "error",
      { devDependencies: ["**/*.config.js"] },
    ],
    "no-param-reassign": ["error", { props: false }],
  },
};
