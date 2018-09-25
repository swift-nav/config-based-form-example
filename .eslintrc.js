module.exports = {
  "parserOptions": {
    "ecma-version": "2017",
    "sourceType": "module",
    "ecmaFeatures": {
      "impliedStrict": true,
      "jsx": true
    }
  },
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "es6": true
  },
  "plugins": [
    "import",
    "react"
  ],
  "settings": {
    "import/extensions": [".js", ".jsx"],
    "import/resolve": { "extensions": [".js", ".jsx"] },
    "import/resolver": { "webpack": { "extensions": [".js", ".jsx"] } }
  },
  "extends": "airbnb",
  "rules": {
    "array-bracket-newline": ["error", "consistent"],
    "callback-return": "error",
    "comma-dangle": ["error", "never"],
    "consistent-this": "error",
    "func-name-matching": "error",
    "handle-callback-err": "error",
    "func-style": ["error", "expression"],
    "import/default": "error",
    "import/exports-last": "error",
    "import/namespace": ["error", { "allowComputed": true }],
    "import/no-anonymous-default-export": "error",
    "import/no-deprecated": "error",
    "import/no-nodejs-modules": "error",
    "import/no-self-import": "error",
    "jsx-a11y/anchor-is-valid": ["error", { "components": [ "Link" ], "specialLink": [ "to" ], aspects: ["noHref", "invalidHref", "preferButton"]}],
    "jsx-a11y/no-onchange": "error",
    "lines-between-class-members": ["error", "always"],
    "multiline-ternary": ["error", "always-multiline"],
    "new-cap": "off",
    "no-alert": "error",
    "no-console": "off",
    "no-eq-null": "error",
    "no-extra-parens": "error",
    "no-implicit-globals": "error",
    "no-mixed-requires": "error",
    "no-multi-spaces": "off",
    "no-negated-condition": "error",
    "no-underscore-dangle": ["error", { "allow": ["_error"]}],
    "no-useless-call": "error",
    "no-useless-escape": "off",
    "no-warning-comments": "warn",
    "react/forbid-prop-types": ["error", { "forbid": ["any", "array"], "checkContextTypes": true, "checkChildContextTypes": true }],
    "react/forbid-foreign-prop-types": "error",
    "react/jsx-key": "error",
    "react/jsx-no-bind": "error",
    "react/jsx-no-target-blank": "off",
    "react/jsx-sort-default-props": "error",
    "react/sort-prop-types": "error",
    "react/no-array-index-key": "off",
    "react/no-did-mount-set-state": "off",
    "react/no-direct-mutation-state": "error",
    "react/no-typos": "error",
    "react/prefer-stateless-function": "off",
    "react/require-optimization": "error",
    "sort-keys": "error",
    "sort-vars": "error"
  }
};
