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


## Enum
### Number Enum
```ts
enum ResStatus {
  SUCCESS = 1,
  FAIL = 0,
  UNKNOWN_PARAMETER = -1,
}
```
=> 會轉譯成 js 檔如下
```js
var ResStatus;
(function (ResStatus) {
    ResStatus[ResStatus["SUCCESS"] = 1] = "SUCCESS";
    ResStatus[ResStatus["FAIL"] = 0] = "FAIL";
    ResStatus[ResStatus["UNKNOWN_PARAMETER"] = -1] = "UNKNOWN_PARAMETER";
})(ResStatus || (ResStatus = {}));
```
先只看 `ResStatus[ResStatus["SUCCESS"] = 1] = "SUCCESS"` 這段，可以拆解成
```js
ResStatus["SUCCESS"] = 1;
ResStatus[1] = "SUCCESS";
```
=> 此為數字列舉的重要特性 - 反向映射。

#### 其他延伸用法
```ts
enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat}
```
會自動從 0 算起
=> 
```ts
enum Days {
  Sun = 0,
  Mon = 1,
  Tue = 2,
  Wed = 3,
  Thu = 4,
  Fri = 5,
  Sat = 6,
}
```

```ts
enum Days {Sun, Mon, Tue = 5, Wed, Thu, Fri, Sat}
```
沒有指定的會自動從 0 算起，有指定的依序 +1
=> 
```ts
enum Days {
  Sun = 0,
  Mon = 1,
  Tue = 5,
  Wed = 6,
  Thu = 7,
  Fri = 8,
  Sat = 9,
}
```

=> 其他還有字串列舉(類別為 string)、異構列舉(多種類別)、常數列舉(enum 前面使用 `const`)、外部列舉(enum 前面使用 `declare`)，可以看文章查看更多 [2]


## Interface 可被擴充以及 implements

## Reference
[1] [TypeScript 快速入門影片檔](https://www.youtube.com/watch?app=desktop&fbclid=IwAR01F3Pw93Kzilc9VJsxORzfXNfWd2CAkd16Nn_9-hDO9Mb1_RGHnWio02U&v=GinkGJZBHIY&feature=youtu.be)
[2] [Tuple & Enum](https://ithelp.ithome.com.tw/articles/10221546)
