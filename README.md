# eslint-config-react-moonstone

ESLint config for React TypeScript projects.

This config extends [eslint-config-airbnb-typescript](https://www.npmjs.com/package/eslint-config-airbnb-typescript) and [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier).
It provides some useful plugins which will improve your code quality.

## Installation

```sh
npm install -D eslint-config-react-moonstone
# or with yarn
yarn add -D eslint-config-react-moonstone
```

### Install peer dependencies

```sh
npm install -D @typescript-eslint/eslint-plugin @typescript-eslint/parser
# or with yarn
yarn add -D @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

## Setup

### 1) Configure ESLint

Extend your `.eslintrc`, with `react-moonstone`.

```json
{
  "extends": ["react-moonstone"]
}
```

Or if you have another config, you can set it like this,

```json
{
  "extends": ["react-moonstone", "next/core-web-vitals"]
}
```

The order of the array items depends on your needs.

> Read more about [ESLint configuration file](https://eslint.org/docs/user-guide/configuring/configuration-files).

### 2) Configure the ESLint TypeScript parser

- Set [parser](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser#usage) to `@typescript-eslint/parser`.
- Set [parserOptions.project](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser#parseroptionsproject) to the path of your `tsconfig.json` or `tsconfig.eslint.json` (see [FAQ](#faq) below).

For example:

```diff
{
  "extends": ["react-moonstone"],
+ "parser": "@typescript-eslint/parser",
+ "parserOptions": {
+   "project": "./tsconfig.json"
+ }
}
```

### FAQ

If you got this error when running ESLint: _"The file must be included in at least one of the projects provided"_, this means you are attempting to lint a file that `tsconfig.json` doesn't include.

A common fix is to create a `tsconfig.eslint.json` file, which extends your `tsconfig.json` file and includes all files you are linting.

```json
{
  "extends": "./tsconfig.json",
  "include": ["**/*.ts", "**/*.tsx", "**/*.js", ".eslintrc.js"]
}
```

Then update your ESLint config file:

```diff
"parserOptions": {
-  "project": "./tsconfig.json"
+  "project": "./tsconfig.eslint.json"
}
```

---

## Note

**[eslint-config-react-moonstone](https://www.npmjs.com/package/eslint-config-react-moonstone)** will include these packages:

- ESLint Plugins/Resolver
  - [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)
  - [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)
  - [eslint-plugin-jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y)
  - [eslint-plugin-jest](https://www.npmjs.com/package/eslint-plugin-jest)
  - [eslint-plugin-testing-library](https://www.npmjs.com/package/eslint-plugin-testing-library)
  - [eslint-plugin-simple-import-sort](https://www.npmjs.com/package/eslint-plugin-simple-import-sort)
  - [eslint-plugin-sonarjs](https://www.npmjs.com/package/eslint-plugin-sonarjs)
  - [eslint-plugin-unicorn](https://www.npmjs.com/package/eslint-plugin-unicorn)
  - [eslint-import-resolver-typescript](https://www.npmjs.com/package/eslint-import-resolver-typescript)
- ESLint Configs
  - [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb)
  - [eslint-config-airbnb-typescript](https://www.npmjs.com/package/eslint-config-airbnb-typescript)
  - [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier)

👆 Therefore, you don't have to install them.
