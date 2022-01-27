// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  extends: ['plugin:vue/recommended'],
  rules: {
    'arrow-parens': 0,
    'semi': ['warn', 'never'],
    'generator-star-spacing': 0,
    'no-debugger': 1,
    'no-console': [1, {
      allow: ['warn', 'error'],
    }],
    'no-tabs': 1,
    'max-len': [1, {
      'code': 120,
      'comments': 120,
      'ignoreUrls': true,
      'ignoreStrings': true,
      'ignoreTemplateLiterals': true,
      'ignoreRegExpLiterals': true,
    }],
    'vue/max-attributes-per-line': [1, {
      'singleline': {
        "max": 1,
      },
      'multiline': {
        'max': 1,
      },
    }],
    "vue/component-name-in-template-casing": ["error", "PascalCase", {
      "registeredComponentsOnly": true,
    }],
    "vue/new-line-between-multi-line-property": ["error", {
      "minLineOfMultilineProperty": 2,
    }],
    "vue/custom-event-name-casing": [
      "error",
      "camelCase",
      {
        "ignores": ["/^[a-z]*:[a-z]*$/u"],
      },
    ],
    "vue/no-static-inline-styles": ["error", {
      "allowBinding": false,
    }],
    "vue/no-template-target-blank": ["error", {
      "allowReferrer": true,
      "enforceDynamicLinks": "always",
    }],
    "vue/match-component-file-name": ["error", {
      "shouldMatchCase": true,
    }],
    "vue/require-name-property": ['error'],
    'no-unused-vars': 1,
    'comma-dangle': [1, 'always-multiline'],
    'linebreak-style': ['error', 'unix'],
  },
}
