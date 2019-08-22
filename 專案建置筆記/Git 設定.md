# Git 設定

# 設定 remote
```
  // 刪除原來源
  git remote remove origin

  // 新增新來源
  git remote add origin  ~url/~.git
```

# 記憶帳號
```
  // 打開 config 檔案
  git config -e 
  // 記憶帳號設定(自行新增)
  [credential]	
	  helper = store
```

# 設定 git 模板
```
  // 打開 config 檔案
  git config -e 

  // 新增 模板路徑
  [commit]
	  template = C:\\Users\\RocMark\\Desktop\\vue-template\\.gitmessage
  
  // 打開本地 config 確認是否更改成功
  git config --local -l
```

# 設置 Commit Editor
> 原文 http://t.cn/RmnzKQG
```md
  1. vscode 終端機  code --help
  > 若無出現提示，見原文 
  2. git config --global core.editor "code --wait"
  3. git config --global -e  (此為全域設定)
  //? 此會自動打開 .gitconfig 檔 設定在裡面
  4. git config --local -e (此為本專案設定)
  可查看 remote & 是否儲存帳號
  5. git commit 不加 -m 會自動打開
```