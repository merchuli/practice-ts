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

/** 
 * ==== Union & Type ===
 * (ts)
 **/

/** Union */
let a0: number | string;
a0 = 1;
a0 = 'Hello a0';


/** type */
type A = number | string;
type B = boolean | string;

let a1: A;
a1 = 10;
a1 = 'Hello a1';

let b1: B;
b1 = false;
b1 = 'Hello b1';


/** 
 * ==== Interface ===
 * (ts)
 **/
interface User {
  name: string;
  age: number;
}

/** 
 * ==== object ===
 * NOTE: What is the difference between type and interface?
 * Type 是不能擴充的，Interface 可以擴充，且 Interface 可以被 Class 繼承
 **/
type Card = {
  name: string,
  desc: string,
}

// Error: Duplicate Identifier
// type Card = {
//   age: number,
// }

interface ICard {
  name: string;
  desc: string;
}

// 兩個 Interface 名稱一樣可以 work！
interface ICard {
  age?: number;
}

const myCard: ICard = {
  name: 'Merchu',
  desc: 'Hello World!',
  age: 18
}

/** 
 * ==== function ===
 */
function add(a: number, b: number): number {
  return a + b;
}

function myConcat(a: string, b: string): string {
  return a + b;
}

function getIntro(name: string, age?: number): string {
  return `My name is ${name}.`
}

// Arrow Function
const func = () => {}

const func2 = () => {
  return 3;
}

/**
 * 斷言 unknown，語法 `as`
 * 情境： fetch API，ts 無法得知回傳的資料格式長怎樣
 * */

type TodoItem = {
  userId: number,
  id: number,
  title: string,
  completed: boolean,
}

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await res.json() as TodoItem;
}


/** 
 * Class
 */

// private 私有
// public 公開
// protected 受保護

class Live {
  roomName: string;  // 預設沒有指定就是 public
  private id: string;
  protected name: string;  // 與 private 的區別為 protected 可以透過繼承被訪問到

  constructor(roomName1: string, id1: string, name1: string) {
    console.log('建立直播中...');
    this.roomName = roomName1;
    this.id = id1;
    this.name = name1;
  }
}

class CarLive extends Live {
  constructor(roomName2: string, id2: string, name2: string) {
    super(roomName2, id2, name2);
  }

  start() {
    console.log(super.name);
  }
}

const myLive = new Live('No. 1', '0001', 'Merchu');
console.log('live', myLive);
console.log('room name', myLive.roomName);
// 在 ts 中只有 public 可以訪問到，但實際上 js 中  myLive 還是有三個變數


const carLive = new CarLive('No. 2', '0002', 'Merchu 2');
console.log('car live', carLive);

class LiveJS {
  // # 代表私有變數
  #name
  constructor(name: string) {
    this.#name = name;
  }
}
