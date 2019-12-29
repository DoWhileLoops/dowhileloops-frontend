module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'standard',
    'plugin:vue/recommended'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-mixed-spaces-and-tabs': 'off',
    'indent': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/attributes-order': 'off',
    'no-trailing-spaces': 'off',
    'vue/html-indent': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
