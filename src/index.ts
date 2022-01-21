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


