# Blueprint
- [Alex宅幹嘛 40:15](https://youtu.be/QV0Yt279fgc?t=2405)

# 建立 藍圖資料夾
- 新增 blueprint-templates 資料夾 (此名要改須更動 settings)
- .vscode / settings.json 為 本地的 settings
```json
  // settings.json 中 藍圖的資料路徑
  "blueprint.templatesPath": [
    "./blueprint-templates",
    "../path-one-level-up-from-workspace",
    "~/path-from-home-folder",
    "/path-from-root
  ]
```

# 建立 藍圖
- 於 blueprint-templates 資料夾下建立資料夾
- 該資料夾之下，創建一包檔案 ([命名方式對應表格](https://github.com/reesemclean/blueprint))
```
blueprint-templates
├── vue-components
    ├── __pascalCase_name__.html
    ├── __pascalCase_name__.scss
    └── __pascalCase_name__.js
```

# 建立 藍圖實體 & 命名方式
- 於 側邊欄 右鍵 New file from template，輸入名稱即可
- [BluePrint 命名方式對應表格](https://github.com/reesemclean/blueprint)
```
  // 資料夾 / 檔名
  1. 檔案: ./ vue-components / __pascalCase_name__.vue
  2. 內文: <div class="{{kebabCase name}}">
  3. 內文: name: '{{pascalCase name}}',

  // 內文 結果
  1. 產出檔案: BaseButton.vue
  2. 產出內文: <div class="base-button"></div>
  3. 產出內文: name: 'BaseButton',
```