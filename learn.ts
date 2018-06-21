/* function sayHello(Person: string) {
  return 'hello, ' + Person;
}

let user = [1, 2, 3];

console.log(sayHello(user)); */

/* function alertName(): void {
  alert('My name is Tom');
}

let u: undefined = undefined;
let n: null = null; */

/* let myFavoriteNumber: string | number;
myFavoriteNumber = '111';
myFavoriteNumber = 123; */

/* function getLength(something: string | number): string {
  // return something.length;
  return something.toString();
} */

/* interface IPerson {
  name: string,
  age: number
}

let tom: IPerson = {
  name: 'Tom',
  age: 18
}; */

/* 需要注意的是，一旦定义了任意属性，那么确定属性和可选属性都必须是它的子属性： */
/* interface Person {
  // 只读属性定义了就无法再更改
  readonly id: number,
  name: string,
  age?: number,
  [propName: string]: any
}

let tom: Person = {
  id: 1,
  name: 'Tom',
  gender: 'male'
};

// 会报错
// 注意，只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候：
tom.id = 2; */

// let fibonacci: number[] = [1, 1, 2, 3, 5];
// let fibonacci: Array<number> = [1, 1, 2, 3, 5];

/* interface NumberArray {
  [index: number]: number;
}

let fibonacci: NumberArray = [1, 1, 2, 3, 5];

// 一个比较常见的做法是，用 any 表示数组中允许出现任意类型：
let list: any[] = ['Xcat Liu', 25, { website: 'http://xcatliu.com' }];

function sum() {
  // 类数组（Array-like Object）不是数组类型，比如 arguments：
  // 事实上常见的类数组都有自己的接口定义，如 IArguments, NodeList, HTMLCollection 等：
  let args: IArguments = arguments;
} */

/* function sum(x: number, y: number): number {
  return x + y;
} */

/* let mySum: (x: number, y: number) => number = function (x: number, y: number): number {
  return x + y;
}

mySum(1, 2); */

/* function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
  if (typeof x === 'number') {
    return Number(x.toString().split('').reverse().join(''));
  } else if (typeof x === 'string') {
    return x.split('').reverse().join('');
  }
} */

/* // 类型断言
function getLength(something: number | string): number {
  if ((something as string).length) {
    return (something as string).length;
  } else {
    return something.toString().length;
  }
} */

/* declare var jQuery: (string) => any;

jQuery('#foo'); */

/* let allDiv: NodeList = document.querySelectorAll('div');

type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;
function getName(n: NameOrResolver): Name {
  if (typeof n === 'string') {
    return n;
  }
  else {
    return n();
  }
} */

/* type EventNames = 'click' | 'scroll' | 'mousemove';
function handleEvent(ele: Element, event: EventNames) {
  // do something
}

handleEvent(document.getElementById('hello'), 'scroll');
handleEvent(document.getElementById('world'), 'dbclick'); */

// enum Color { Green, Blue, Red = "red".length };
// enum Color { Red = "red".length, Green, Blue };

/* const enum Directions {
  Up,
  Down,
  Left,
  Right
}

let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right]; */

// 在 "const" 枚举声明中，成员初始化表达式必须是常数表达式
// const enum Color { Red, Green, Blue = "blue".length };

interface person {
  name: string,
  age: number
}