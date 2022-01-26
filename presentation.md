ts

```typescript
const str: string = 'Hello World!';

// 直接給值, TypeScript 會自動將 str2 宣告為 string 類型，不需再特別指定類型
const str2 = 'Hello World 2';  

// 未來才會給值，先指定類型
let str3: string;
```

```typescript
/** number, boolean, null, undefined */
const num2 = 123;
let num3: number;

const bool2 = true;
let bool3: boolean;

let nu: null;
let ud: undefined;
```

```typescript
/** any, 任何類型 */
let whatEver: any;
whatEver = true;
whatEver = 123;
whatEver = 'whatEver';
whatEver = undefined;
```

```typescript
const arr: string[] = ['a', 'b'];
const arrx2: number[][] = [[1, 2, 3], [4, 5 , 6]];

let list: Array<string>;  // ['a', 'b', 'c']
```

```typescript
const tuple: [number, string, boolean] = [1, 'a', true];
const tuple2: [string, string][] = [['a', 'b'], ['c', 'd']];
```

```typescript
function add(a: number, b: number): number {
  return a + b;
}

function myConcat(a: string, b: string): string {
  return a + b;
}
```

```typescript
// name is a string, age can be number or undefined
function getIntro(name: string, age?: number): string {
  return `My name is ${name}.`
}
```

```typescript
let a0: number | string;
a0 = 1;
a0 = 'Hello a0';
```

```typescript
function printId(id: number | string) {
  console.log('my id is: ', id);
}

printId(123);
printId('456');
```

```typescript
type A = number | string;

let a1: A;
a1 = 10;
a1 = 'Hello a1';
```

```typescript
type Point = {
  x: number;
  y: number;
};
 
function printCoord(pt: Point) {
  console.log('The coordinate is ', pt.x, pt.y);
}
printCoord({ x: 100, y: 100 });
```

```typescript
interface IPoint {
  x: number;
  y: number;
  z?: number;
}

function anotherPrintCoord(pt: IPoint) {
  console.log('The coordinate is ', pt.x, pt.y);
}
anotherPrintCoord({ x: 100, y: 100 });
```





js

```javascript
const str = 'Hello World!';
```

```javascript
// 等同於 TypeScript 裡的 any 類型
let num;
let bool;
let nu;
let ud;
let whatEver;
```

```js
function add(a, b) {
  return a + b;
}
// add(1, 2) => 3
// add('Hello', 'World!') => 'Hello World!'
```



// enum

```javascript
const SubscriptionPlan = {
  ADVANCE = 'advanced',
  PREMIER = 'premier',
  ELITE = 'elite',
};
Object.freeze(SubscriptionPlan);

const selectedPlan = SubscriptionPlan.ADVANCE;
```







## Differences Between Type Alias and Interface

### extendable

```typescript
type Diff = {
  title: string
}

type Diff = {
  extendable: boolean
}
// Error: Duplicate identifier 'Diff'.
```

```typescript
interface IDiff {
  title: string
}

interface IDiff {
  extendable: boolean
}
// Workable!
```



#### 

```typescript
type Animal = {
  name: string
}

type Bear = Animal & { 
  honey: boolean 
}

const bear1: Bear = { name: 'Bear1', honey: true };
```

```typescript
interface IAnimal {
  name: string
}

interface IBear extends IAnimal {
  honey: boolean
}

const bear2: IBear = { name: 'Bear2', honey: false };
```







// Generics

```typescript
function myToArray<Type>(arg: Type): Array<Type> {
  return [arg];
}

myToArray<number>(123);    // return [123]
myToArray<number>('123');  // Error!
myToArray<string>('456')   // return ['456']
```

```typescript
function myToArray<T>(arg: T): Array<T> {
  return [arg];
}
```

```typescript
const myArray2 = <T>(arg: T): Array<T> => {
  return [arg];
}
```

```typescript
interface TitleProps<T> {
	name: T;
}

const getTitlePropsName<TitleProps<T>>(args: TitleProps<T>): T {
  return args.name;
}
```



// Type Operators

```typescript
type PointObj = { x: number; y: number };
type P1 = keyof PointObj;  // type P1 = 'x' | 'y'

let p1: P1;
p1 = 'x';
p1 = 'y'
p1 = 'z';  // Error!
```


