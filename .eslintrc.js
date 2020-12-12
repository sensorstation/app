module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],

  parserOptions: {
    parser: "babel-eslint",
  },

  rules: {
    "no-console": "off",
    "no-debugger": "off",
    "no-unused-vars": "warn",
    "prettier/prettier": [
      "warn",
      {
        printWidth: 80,
        tabWidth: 2,
        trailingComma: "es5",
        bracketSpacing: true,
        useTabs: false,
        proseWrap: "preserve",
        arrowParens: "always",
        overrides: [
          {
            files: "*.html",
            options: {
              parser: "html",
            },
          },
        ],
      },
    ],
  },

  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)",
      ],
      env: {
        jest: true,
      },
    },
  ],
};
