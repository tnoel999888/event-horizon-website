module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
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
    quotes: ["warn", "double"],
    "linebreak-style": "off",
    indent: ["error", 2],
    "no-unused-vars": 1,
    "no-alert": "off",
    "jsx-a11y/mouse-events-have-key-events": 1,
    "max-len": "warn",
    "no-multi-spaces": ["error"],
    "import/no-named-as-default": 0,
    "import/no-named-as-default-member": 0,
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
