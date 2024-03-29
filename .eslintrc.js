module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // v-for 推薦使用 v-bind:key 提升效能
    'vue/require-v-for-key': 1,
    // 作業系統 LF & CRLF 差異
    'linebreak-style': 0,
    // 插件路徑問題
    // 'import/no-unresolved': 0,
    // 'import/extensions': 0,
    // 將錯誤改成警告，無傷大雅的樣式(save on fix)
    'semi': 0,
    'comma-spacing': 1,
    'max-len': 0,
    'object-curly-newline': 0,
    'no-unused-vars': 1,
    'no-trailing-spaces': 0,
    'space-before-blocks': 1,
    'no-multiple-empty-lines': 1,
    'no-irregular-whitespace': 0,
    'no-trailing-spaces': 0,
    'no-multi-spaces': 0,
    'spaced-comment': 1,
    quotes: [ "error", "single" ],
    "vue/no-unused-components": 1,
    "comma-dangle": [
      "warn",
      {
        arrays: "never",
        objects: "always",
        imports: "never",
        exports: "never",
        functions: "never"
      }
    ]
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
