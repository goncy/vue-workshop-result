// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: ['standard', "prettier", "eslint:recommended"],
  // required to lint *.vue files
  plugins: [
    'html',
    "prettier"
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // custom
    "no-console": 1,
    "prettier/prettier": [
      "error",
      {
        "semi": false
      }
    ]
  }
}