"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _LiveJS_name;
const test = '123';
console.log('Hello World of my variable test: ', test);
/**
 * ==== 基本類型(Primitive Type) ===
 **/
/** string */
const str = 'Hello World!';
const str2 = 'Hello World 2'; // 直接給值, TypeScript 會自動將 str2 宣告為 string 類型，不需再特別指定類型
let str3; // 未來才會給值，先指定類型
/** number, boolean, null, undefined */
let num;
let bool;
let nu;
let ud;
/** any, 任何類型 */
let whatEver;
whatEver = true;
whatEver = 123;
whatEver = 'whatEver';
/**
 * ==== Object Type ===
 **/
/** Array, 陣列 */
const arr = ['a', 'b'];
const arrx2 = [[1, 2, 3], [4, 5, 6]];
let list; // ['a', 'b', 'c']
/**
 * 陣列的延伸： Tuple, 元組
 * 嚴格的陣列，陣列元素數量是固定的，且每個元素型別都是已知的，但個別型別不用相同。
 * The definition of "Tuple" from Cambridge Dictionary:
 * "a structure of data that has several parts"
 * */
const tuple = [1, 'a', true];
const tuple2 = [['a', 'b'], ['c', 'd']];
/**
 * ==== Enum (列舉 / 枚舉) ===
 * (ts 新增的語法)
 **/
/** 範例一：方案類型，字串列舉(String enum) */
var SubscriptionPlan;
(function (SubscriptionPlan) {
    SubscriptionPlan["ADVANCE"] = "advanced";
    SubscriptionPlan["PREMIER"] = "premier";
    SubscriptionPlan["ELITE"] = "elite";
})(SubscriptionPlan || (SubscriptionPlan = {}));
const selectedPlan = SubscriptionPlan.ADVANCE;
/** 範例二：API Response 狀態，數字列舉(Number enum) */
var ResStatus;
(function (ResStatus) {
    ResStatus[ResStatus["SUCCESS"] = 1] = "SUCCESS";
    ResStatus[ResStatus["FAIL"] = 0] = "FAIL";
    ResStatus[ResStatus["UNKNOWN_PARAMETER"] = -1] = "UNKNOWN_PARAMETER";
})(ResStatus || (ResStatus = {}));
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
let a0;
a0 = 1;
a0 = 'Hello a0';
function printId(id) {
    console.log('my id is: ', id);
}
printId(123);
printId('456');
let a1;
a1 = 10;
a1 = 'Hello a1';
let b1;
b1 = false;
b1 = 'Hello b1';
function printCoord(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 100, y: 100 });
const myCard = {
    name: 'Merchu',
    desc: 'Hello World!',
    age: 18
};
function anotherPrintCoord(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
anotherPrintCoord({ x: 100, y: 100 });
/**
 * ==== function ===
 */
function add(a, b) {
    return a + b;
}
function myConcat(a, b) {
    return a + b;
}
function getIntro(name, age) {
    return `My name is ${name}.`;
}
// Arrow Function
const func = () => { }; // void
const func2 = () => {
    return 3;
};
const c = func2(); // c: number
function getData() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = yield res.json();
    });
}
/**
 * Class
 */
// private 私有
// public 公開
// protected 受保護
class Live {
    constructor(roomName1, id1, name1) {
        console.log('建立直播中...');
        this.roomName = roomName1;
        this.id = id1;
        this.name = name1;
    }
}
class CarLive extends Live {
    constructor(roomName2, id2, name2) {
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
    constructor(name) {
        // # 代表私有變數
        _LiveJS_name.set(this, void 0);
        __classPrivateFieldSet(this, _LiveJS_name, name, "f");
    }
}
_LiveJS_name = new WeakMap();
class Car {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const bear1 = { name: 'Bear 1', honey: true };
bear1.name;
bear1.honey;
/** Generics */
function myToArray(arg) {
    return [arg];
}
myToArray(123); // return [123]
// myToArray<number>('123');  // Error!
myToArray('456'); // return ['456']
const myArray2 = (arg) => {
    return [arg];
};
let p1;
p1 = 'x';
p1 = 'y';
let aa1;
aa1 = {
    1: 'x',
    2: 'y',
    // 'x': 33,  // Error!
};
let m1;
m1 = {
    'x': true,
    'y': false,
    0: true,
    // 1: '1',  // Error!
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxNQUFNLElBQUksR0FBVSxLQUFLLENBQUM7QUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQ0FBbUMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUV2RDs7SUFFSTtBQUVKLGFBQWE7QUFDYixNQUFNLEdBQUcsR0FBVyxjQUFjLENBQUM7QUFDbkMsTUFBTSxJQUFJLEdBQUcsZUFBZSxDQUFDLENBQUUscURBQXFEO0FBQ3BGLElBQUksSUFBWSxDQUFDLENBQUUsZUFBZTtBQUVsQyx1Q0FBdUM7QUFDdkMsSUFBSSxHQUFXLENBQUM7QUFDaEIsSUFBSSxJQUFhLENBQUM7QUFDbEIsSUFBSSxFQUFRLENBQUM7QUFDYixJQUFJLEVBQWEsQ0FBQztBQUVsQixnQkFBZ0I7QUFDaEIsSUFBSSxRQUFhLENBQUM7QUFDbEIsUUFBUSxHQUFHLElBQUksQ0FBQztBQUNoQixRQUFRLEdBQUcsR0FBRyxDQUFDO0FBQ2YsUUFBUSxHQUFHLFVBQVUsQ0FBQztBQUV0Qjs7SUFFSTtBQUVKLGdCQUFnQjtBQUNoQixNQUFNLEdBQUcsR0FBYSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUNqQyxNQUFNLEtBQUssR0FBZSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUVsRCxJQUFJLElBQW1CLENBQUMsQ0FBRSxrQkFBa0I7QUFFNUM7Ozs7O0tBS0s7QUFDTCxNQUFNLEtBQUssR0FBOEIsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ3hELE1BQU0sTUFBTSxHQUF1QixDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFF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