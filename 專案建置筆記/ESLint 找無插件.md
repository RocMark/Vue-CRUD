# 解決 ESLint Missing Extension
- [原文解法](https://github.com/zqinmiao/blog/issues/5)

# vue.config.js
- 只改了這個就解了..
- ESLint 規則似乎也免調整
```js
  // ESLint 規則
  // 'import/no-unresolved': 0,
  // 'import/extensions': 0,

  const path = require('path')

  function resolve(dir) { return path.join(__dirname, dir) }
  module.exports = {
    configureWebpack: {
      resolve: {
        alias: {
          '@': resolve('src'),
        },
      },
    },
  }
```