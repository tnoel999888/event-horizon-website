module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: [
    "react",
  ],
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    semi: ["error", "always"],
    quotes: ["error", "double"],
    indent: ["error", 2],
    "max-len": "warn",
    "no-multi-spaces": ["error"],
    "jsx-a11y/label-has-associated-control": ["error", {
      required: {
        some: ["nesting", "id"],
      },
    }],
    "jsx-a11y/label-has-for": ["error", {
      required: {
        some: ["nesting", "id"],
      },
    }],
  },
  overrides: [
    {
      files: ["*.js"],
      rules: {
        "no-alert": "off",
        "no-useless-escape": "off",
      },
    },
  ],
};
