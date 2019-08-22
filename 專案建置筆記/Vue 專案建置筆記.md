## Vue 專案建置筆記
- [JSON Server 設定](https://ithelp.ithome.com.tw/articles/10212106)

## 大綱
- 系統管理員操作
- 建立 Vue 專案
- Git 配置
- Git Message (Commit模板)
- VUE CLI3 指令
- Global SCSS 檔案
- ESLint 設定
- .editorconfig 設定
- 使用他人的 VueCLI3 專案
- 推薦工具


## 系統管理員操作
- 開啟 cmd
```
  於開始選單 cmd 開啟 系統管理員
  cd desktop // 切至該目錄
  dir        // 列出當前目錄檔案
  Ctrl + C   // 停止當前動作
  mkdir      // 建立資料夾
  code .     // 開起當前專案
```

## 建立 Vue 專案
- Vue 專案名不可用駝峰命名
```
  vue create 專案名
  vue create . // 於當前專案建立 vue 專案
  Manually select features // 自行選擇插件(可儲存成`樣板)
```

## Git
- 建立 Vue 專案，會自帶 Git 不需要自行 git init
- 但 需要自行設定 remote 
```
  git status // 確認 Git 是否運行

  // 指定遠端 Repository
  git remote add origin ~.git
  git push -u origin master

  // 紀錄帳號
  git config credential.helper store
```

## Git Message (建立 Commit 模板)
- 自行建立 .gitmessage 檔案
- [如何寫一個 Git Commit Message](https://blog.louie.lu/2017/03/21/%E5%A6%82%E4%BD%95%E5%AF%AB%E4%B8%80%E5%80%8B-git-commit-message/)
```
  // 開啟 專案設定檔 --global 為 全域檔案
  git config --local -e 

  // 設置 commit 使用的編輯器
  git config --global core.editor vscode

  // local 設定檔 加入
  [commit]
	  template = C:\\Users\\RocMark\\Desktop\\專案名\\.gitmessage

  // 不帶 -m 會直接開啟模板，撰寫完畢，儲存關掉該檔案即 commit
  git commit 
```

## VueCLI3 指令
- 可於 package.json 自行新增 npm script
```
  npm run serve // 啟動專案
  npm run build // 產生輸出
  npm run test  // 執行你的測試
  npm run lint  // 執行 Linter
```

## Global SCSS 檔案
- Vue 專案全域 SCSS (reboot, var, mixin)
- 自行建立 vue.config.js
```js
  module.exports = {
    css: {
      loaderOptions: {
        sass: {
          data: `
            @import "@/scss/_variables.scss";
            @import "@/scss/_normalize.scss";
            @import "@/scss/_layout.scss";
          `,
        },
      },
    },
  }
```

## ESLint 設定
```js
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
      // 作業系統 LF & CRLF 差異 (使用 windows)
      'linebreak-style': ["error", "windows"],
      // airbnb 路徑問題 會將 @/ 報錯
      'import/no-unresolved': 0,
      // 將錯誤改成警告，無傷大雅的樣式(save on fix)
      'semi': ['error','never'],
      'max-len': 0,
      'no-trailing-spaces': 0,
      'space-before-blocks': 1,
      'no-multiple-empty-lines': 1,
      'no-trailing-spaces': 0,
    },
    parserOptions: {
      parser: 'babel-eslint',
    },
  };
```

## .editorconfig 設定
- 此檔案用於 統一 Coding Style 用
- [CheatSheet](https://devhints.io/editorconfig)
```
  [*.{js,jsx,ts,tsx,vue}]
  # 用於所有* 的 js,jsx....檔案5
  indent_style = space
  indent_size = 2
  # 看系統使用的換行為何 LF/CR/CRLF
  end_of_line = lf 
  charset = utf-8
  trim_trailing_whitespace = true
  insert_final_newline = true
  max_line_length = 100
```

## 使用他人的 VueCLI3 專案
```
  git clone ~.git . // 點代表下載該專案至當前目錄
  npm i // .gitignore 忽略 node_modules 需要裝回來
  npm run serve // 啟動專案
```

## 推薦工具
- VSCode Vetur
- VSCode Vue.js Extension
- Chrome Vue.js 插件

## 後續
- BluePrint
- FireBase