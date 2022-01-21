const test:string = '123';
console.log('Hello World of my variable test: ', test);

/** 
 * ==== 基本類型(Primitive Type) ===
 **/ 

/** string */
const str: string = 'Hello World!';
const str2 = 'Hello World 2';  // 直接給值, TypeScript 會自動將 str2 宣告為 string 類型，不需再特別指定類型
let str3: string;  // 未來才會給值，先指定類型

/** number, boolean, null, undefined */
let num: number;
let bool: boolean;
let nu: null;
let ud: undefined;

/** any, 任何類型 */
let whatEver: any;
whatEver = true;
whatEver = 123;
whatEver = 'whatEver';

/** 
 * ==== Object Type ===
 **/

/** Array, 陣列 */
const arr: string[] = ['a', 'b'];
const arrx2: number[][] = [[1, 2, 3], [4, 5 , 6]];

/**
 * 陣列的延伸： Tuple, 元祖
 * 嚴格的陣列，陣列元素數量是固定的，且每個元素型別都是已知的，但個別型別不用相同。
 * The definition of "Tuple" from Cambridge Dictionary:
 * "a structure of data that has several parts"
 * */
const tuple: [number, string, boolean] = [1, 'a', true];
const tuple2: [string, string][] = [['a', 'b'], ['c', 'd']];


/** 
 * ==== Enum (列舉 / 枚舉) ===
 * (ts 新增的語法)
 **/

/** 範例一：方案類型，字串列舉(String enum) */
enum SubscriptionPlan {
  ADVANCE = 'advanced',
  PREMIER = 'premier',
  ELITE = 'elite',
}

const selectedPlan = SubscriptionPlan.ADVANCE;

/** 範例二：API Response 狀態，數字列舉(Number enum) */
enum ResStatus {
  SUCCESS = 1,
  FAIL = 0,
  UNKNOWN_PARAMETER = -1,
}

const apiStatus = ResStatus.SUCCESS;
console.log('api status', apiStatus);

/** NOTE:
 * typescript 的 enum 轉譯成 javascript 是用 IIFE 去表示，
 * 而且會使用 `var` 做宣告，也就是會變成全域物件(window.variable)
 * 物件最後的呈現如下：
 * 範例一：
 * SubscriptionPlan = {
 *   ADVANCE = 'advanced',
 *   PREMIER = 'premier',
 *   ELITE = 'elite',
 * }
 * 
 * 範例二：
 * ResStatus = {
 *   0: 'FAIL',
 *   1: 'SUCCESS'
 *   -1: 'UNKNOWN_PARAMETER',
 *   FAIL: 0,
 *   SUCCESS: 1,
 *   UNKNOWN_PARAMETER: -1,
 * }
 * 
 */