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


