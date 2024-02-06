module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    'prettier'
  ],
  overrides: [
    {
      env: {
        node: true,
        'jest': true,
      },
      files: [
        '.eslintrc.{js,cjs}',
        'test/**/*',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  "ignorePatterns": ["webpack.*.js", "**/dist/*.js"],
  rules: {
    'no-unused-vars': 'warn',
  },
};
