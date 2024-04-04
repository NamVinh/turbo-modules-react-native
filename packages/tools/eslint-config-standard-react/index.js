module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  extends: ["standard-with-typescript", "prettier"],
  plugins: ["react", "react-hooks", "prefer-arrow-functions"],
  rules: {
    "arrow-body-style": ["error", "always"],

    // eslint-plugin-prefer-arrow-functions
    "prefer-arrow-functions/prefer-arrow-functions": [
      "error",
      {
        classPropertiesAllowed: false,
        disallowPrototype: false,
        returnStyle: "unchanged",
        singleReturnOnly: false,
      },
    ],

    // eslint-plugin-react
    "react/jsx-boolean-value": "error",
    "react/jsx-curly-brace-presence": ["error", "never"],
    "react/function-component-definition": [
      "error",
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "react/self-closing-comp": [
      "error",
      {
        html: true,
        component: true,
      },
    ],

    // eslint-plugin-react-hooks
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
  },
};
