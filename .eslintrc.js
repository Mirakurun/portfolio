module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  env: {
    browser: true,
  },
  extends: [
    // https://eslint.vuejs.org/rules/#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/recommended',
    'eslint:recommended',
    'airbnb-base',
    'plugin:prettier/recommended',
    'prettier/vue',
  ],
  // required to lint *.vue files
  plugins: ['vue', 'prettier'],
  globals: {
    ga: true, // Google Analytics
    cordova: true,
    __statics: true,
    process: true,
    Capacitor: true,
    chrome: true,
    grecaptcha: true, // Google reCAPTCHA
    particlesJS: true,
  },
  // add your custom rules here
  rules: {
    'no-param-reassign': 'off',

    'import/first': 'off',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/default': 'error',
    'import/export': 'error',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'prefer-promise-reject-errors': 'off',

    'prettier/prettier': ['error', { singleQuote: true }],
    'no-console': 'off',

    // allow debugger during development only
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
};
