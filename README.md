# Practice TypeScript


## TypeScript 指令集
- 安裝 typescript `npm install -g typescript`
- 確認版本 `tsc -v`
- 編譯指定檔案 `tsc DIR/FILE_NAME.ts`，會在同一層產生 FILE_NAME.js
- 使用 `tsc --init` 產生 `tsconfig.json` 
- 根據 tsconfig.json 的設定，編譯 ts 檔 => js 檔，請下指令 `tsc`
- 監聽檔案變化，自動編譯，請下指令 `tsc --watch`

### tsconfig
- `rootDir` ，指定要編譯的 ts 檔案的根目錄
- `outDir` 編譯後的 js 檔輸出位置
- `inlineSourceMap`，可以在 browser console 上查看原始的 ts 檔，否則預設為查看編譯後的 js 檔



## Reference
[1] [TypeScript 快速入門影片檔](https://www.youtube.com/watch?app=desktop&fbclid=IwAR01F3Pw93Kzilc9VJsxORzfXNfWd2CAkd16Nn_9-hDO9Mb1_RGHnWio02U&v=GinkGJZBHIY&feature=youtu.be)
