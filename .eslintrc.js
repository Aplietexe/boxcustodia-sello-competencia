"use strict"

const generalRules = {
  complexity: "off",
  "func-style": ["error", "expression"],
  "id-length": ["error", { exceptionPatterns: ["^_$"] }],
  "import/no-unused-modules": "off",
  "import/prefer-default-export": "off",
  "max-statements": "off",
  "no-underscore-dangle": "off",
  "prettier/prettier": "error",
  "putout/putout": "off",
  "sonarjs/cognitive-complexity": "off",
  "sort-keys-fix/sort-keys-fix": ["error", "asc", { natural: true }],

  "unicorn/prevent-abbreviations": [
    "error",
    {
      replacements: {
        props: false,
        ref: false,
        req: false,
        res: false,
      },
    },
  ],
}

const typescriptRules = {
  "@typescript-eslint/ban-types": [
    "error",
    {
      types: {
        Function: false,
      },
    },
  ],

  "@typescript-eslint/explicit-member-accessibility": "off",

  "@typescript-eslint/init-declarations": "off",

  "@typescript-eslint/naming-convention": [
    "error",
    {
      format: ["strictCamelCase", "StrictPascalCase"],
      leadingUnderscore: "allow",
      selector: ["default"],
    },
    {
      format: ["StrictPascalCase"],
      selector: ["typeLike", "enumMember"],
    },
    {
      format: ["PascalCase"],
      prefix: ["is", "has", "are", "can", "should", "did", "will"],
      selector: ["variable", "parameter", "property", "accessor"],
      types: ["boolean"],
    },
  ],

  "@typescript-eslint/no-magic-numbers": "off",

  "@typescript-eslint/no-shadow": [
    "error",
    {
      allow: [
        "defaultStatus",
        "Document",
        "event",
        "find",
        "length",
        "Image",
        "name",
        "status",
      ],

      builtinGlobals: true,
    },
  ],

  "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_$" }],
  "@typescript-eslint/non-nullable-type-assertion-style": "off",
  "@typescript-eslint/prefer-function-type": "off",
  "@typescript-eslint/prefer-readonly-parameter-types": "off",

  "@typescript-eslint/require-array-sort-compare": [
    "error",
    { ignoreStringArrays: true },
  ],

  "@typescript-eslint/strict-boolean-expressions": [
    "error",
    {
      allowNullableBoolean: true,
      allowNullableString: true,
    },
  ],

  "etc/no-misused-generics": "off",
  "etc/no-t": "off",
  "typescript-sort-keys/interface": "error",
  "typescript-sort-keys/string-enum": "error",
}

const componentRules = {
  "@shopify/jsx-prefer-fragment-wrappers": "off",
  "react/forbid-component-props": "off",

  "react/function-component-definition": [
    "error",
    {
      namedComponents: "arrow-function",
      unnamedComponents: "arrow-function",
    },
  ],

  "react/jsx-no-bind": [
    "error",
    {
      allowArrowFunctions: true,
    },
  ],

  "react/jsx-no-leaked-render": "off",
  "react/jsx-props-no-spreading": "off",
  "react/require-default-props": "off",
  "react-perf/jsx-no-jsx-as-prop": "off",
  "react-perf/jsx-no-new-array-as-prop": "off",
  "react-perf/jsx-no-new-object-as-prop": "off",
}

module.exports = {
  env: {
    es2022: true,
    node: true,
  },

  ignorePatterns: ["node_modules", "next-env.d.ts"],

  overrides: [
    {
      env: {
        browser: true,
      },

      extends: [
        "hardcore",
        "hardcore/react",
        "hardcore/ts",
        "next/core-web-vitals",
        "prettier",
      ],

      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",

      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },

        project: "./tsconfig.json",
        sourceType: "module",
      },

      rules: { ...generalRules, ...typescriptRules, ...componentRules },
    },
    {
      extends: ["hardcore", "next/core-web-vitals", "prettier"],

      files: ["next.config.js", ".eslintrc.js"],

      parserOptions: {
        sourceType: "script",
      },

      rules: {
        ...generalRules,
        "import/no-commonjs": "off",

        "import/no-extraneous-dependencies": [
          "error",
          { devDependencies: true },
        ],

        "unicorn/prefer-module": "off",
      },
    },
  ],

  parserOptions: {
    ecmaVersion: "latest",
  },

  plugins: ["prettier", "sort-keys-fix", "typescript-sort-keys"],
}
