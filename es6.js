//1.let命令所在的代码块内有效
// if(true){
//   let a = 10;
//   var b = 1;
// }
// console.log('a:',a,'\n','b:',b);

//2.for循环中,let i只在本轮循环有效,var i只全局有效
// var a = [];
// for (let i = 0; i < 10; i++) {
//   a[i] = function () {
//     console.log(i);
//   };
// }
// a[6]();

//3.let不像var会“变量提升”,一定要在声明后使用，否则报错
// console.log(foo); // 变量提升,foo存在但是没有值,输出undefined
// console.log(bar); // 变量bar是不存在的,报错ReferenceError
// var foo = 2;
// let bar = 2;

//4.暂时性死区,作用域内存在let,const命令，不再受外部的影响,typeof不再是安全的操作。
// var tmp = 123;
// if (true) {
//   typeof tmp;
//   // tmp = 'abc'; // tmp不存在，ReferenceError
//   let tmp;
// }

//5.let不允许在相同作用域内，重复声明同一个变量。
// function () {
//   let a = 10;
//   let a = 1;
// }

// function func(arg) {
//   let arg; // 报错
// }

// function func(arg) {
//   {
//     let arg; // 不报错
//   }
// }

// var tmp = new Date();
// function f() {
//   console.log(tmp);
//   if (false) {
//     var tmp = "hello world"; //变量提升
//   }
// }
// f(); // undefined


//6.ES6块级作用域中函数声明类似于let，在块级作用域之外不可引用。
//浏览器有自己的行为方式。应该避免在块级作用域内声明函数。
// function f() { console.log('I am outside!'); }
// (function () {
//   if (false) {
//     // 重复声明一次函数f
//     function f() { console.log('I am inside!'); }
//   }

//   f();
// }());

//7.ES6中let命令、const命令、class命令声明的全局变量，不属于顶层对象的属性。
// let b = 1;
// console.log(window.b); // undefined

//8.解构赋值允许指定默认值。严格相等undefined生效,null不生效
// var [x = 1] = [undefined];
// console.log(x);
// var [x = 1] = [null];
// console.log(x);

//9.默认值可以引用解构赋值的其他变量，但该变量必须已经声明。
// let [x = 1, y = x] = [];     // x=1; y=1

//10.对象的解构赋值是下面形式的简写,真正被赋值的是后者，前者是模式。
// var { foo: abc, bar: bar } = { foo: "aaa", bar: "bbb" };
// console.log(abc,foo);

//11.let命令下面一行的圆括号是必须的，否则会报错。
//因为解析器会将起首的大括号，理解成一个代码块，而不是赋值语句。
// let foo;
// let {foo} = {foo: 1}; // SyntaxError: Duplicate declaration "foo"
// let foo;
// ({foo} = {foo: 1}); // 成功

//12.字符串可以被for...of循环遍历。
// for (let codePoint of 'foo') {
//   console.log(codePoint)
// }
// "f"
// "o"
// "o"

//13.
// var s = 'Hello world!';
// console.log(s.startsWith('Hello')) // true
// console.log(s.endsWith('!')) // true
// console.log(s.includes('o')) // true

//14.
// 'hello'.repeat(2) // "hellohello"
// 'na'.repeat(0) // ""
// 'na'.repeat(2.9) // 取整"nana"
// 'na'.repeat('na') // 转数字 ""
// 'na'.repeat(NaN) // ""
// 'na'.repeat(-1) //报错

//15.
// 'x'.padStart(5, 'ab') // 'ababx'
// 'x'.padEnd(4, 'ab') // 'xaba'

// 16.模板字符串用反引号（`）标识。变量名写在${}之中
// var x = 1;
// var y = 2;
// console.log(`${x} + ${y} = ${x + y}`);

//17.标签模板 
// alert`123`

// 18.先行断言
// console.log(/\d+(?=%)/.exec('100% of US presidents have been male') );  // ["100"]
// console.log(/\d+(?!%)/.exec('that’s all 44 of them') ); // ["44"]

// 19. 后行断言            
// console.log(/(?<=\$)\d+/.exec('Benjamin Franklin is on the $100 bill'));  // ["100"]
// console.log(/(?<!\$)\d+/.exec('it’s is worth about €90')); // ["90"]

// 20.Number.isFinite()和Number.isNaN()与传统的全局方法isFinite()和isNaN()的区别在于非数值一律返回false

// 21.Number.isInteger()是否为整数3和3.0被视为同一个值

// 22.极小的常量Number.EPSILON
// console.log(0.1 + 0.2 - 0.3 < Number.EPSILON);

/*
Math.trunc方法用于去除一个数的小数部分，返回整数部分。
Math.sign方法用来判断一个数到底是正数、负数、还是零。
ES7新增了一个指数运算符（**）
*/

// 23.任何有length属性的对象，都可以通过Array.from方法转为数组，而此时扩展运算符就无法转换。扩展运算符（...）也可以将某些数据结构转为数组,要遍历器接口,Array.from还可以接受第二个参数，作用类似于数组的map方法
// let arrayLike = {
//     '0': 'a',
//     '1': 'b',
//     '2': 'c',
//     length: 3
// };
// ES5的写法
// var arr1 = [].slice.call(arrayLike); // ['a', 'b', 'c']
// ES6的写法
// let arr1 = Array.from(arrayLike); // ['a', 'b', 'c']
// console.log(arr1);

// 24.Array.of方法用于将一组值，转换为数组是弥补数组构造函数Array()的不足
// console.log(Array.of(3)) // [3]
// console.log(Array()) // []
// console.log(Array(3)) // [, , ,]

// 25.Array.prototype.copyWithin(target, start = 0, end = this.length)
// [1, 2, 3, 4, 5].copyWithin(0, 3)
// [4, 5, 3, 4, 5]

// 26.find方法，用于找出第一个符合条件的数组成员,无返回undefined。
// findIndex方法返回第一个符合条件的数组成员的位置，无则返回-1
// 可以接受三个参数，依次为当前的值、当前的位置和原数组。
// [1, 5, 10, 15].find(function(value, index, arr) {
//   return value > 9;
// }) // 10

// 27.fill方法参数 给定值 填充的起始位置和结束位置
// ['a', 'b', 'c'].fill(7, 1, 2)
// ['a', 7, 'c']

// 28.keys()是对键名的遍历、values()是对键值的遍历，entries()是对键值对的遍历
// for (let index of ['a', 'b'].keys()) {
//   console.log(index);
// }
// // 0
// // 1

// for (let elem of ['a', 'b'].values()) {
//   console.log(elem);
// }
// // 'a'
// // 'b'

// for (let [index, elem] of ['a', 'b'].entries()) {
//   console.log(index, elem);
// }
// // 0 "a"
// // 1 "b"

// 29.includes方法返回一个布尔值，表示某个数组是否包含给定的值,
// 第二个参数表示搜索的起始位置,大于数组长度则会重置为从0开始。
// [1, 2, 3].includes(3, 3);  // false
// [1, 2, 3].includes(3, -1); // true

// 30.指定了默认值以后，函数的length属性，将返回没有指定默认值的参数个数。也就是说，指定了默认值后，length属性将失真。这是因为length属性的含义是，该函数预期传入的参数个数。

// 31.ES6引入rest参数（形式为“...变量名”），用于获取函数的多余参数，这样就不需要使用arguments对象了。

// function add(...values) {
//   let sum = 0;
//   for (var val of values) {
//     sum += val;
//   }
//   return sum;
// }
// add(2, 5, 3) // 10

// 32.扩展运算符（spread）是三个点（...）,将一个数组转为用逗号分隔的参数序列。
// console.log(...[1, 2, 3])
// 1 2 3

// 33.函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
// 除了this，以下三个变量在箭头函数之中也是不存在的，指向外层函数的对应变量：arguments、super、new.target。
// var s2=0;
// function Timer() {
//   this.s1 = 0;
//   this.s2 = 0;
//   // 箭头函数
//   setInterval(() => this.s1++, 1000);
//   // 普通函数
//   setInterval(function () {
//     this.s2++;
//   }, 1000);
// }
// let timer = new Timer();

// setTimeout(() => console.log('s1: ', timer.s1), 3100);
// setTimeout(() => console.log('s2: ', timer.s2), 3100);
// setTimeout(() => console.log('s2: ', s2), 3100);

// s1: 3
// s2: 0
// s2: 3

// 34.ES6允许在对象之中，只写属性名，不写属性值。这时，属性值等于属性名所代表的变量。方法也可以简写。
// function f(x, y) {
//   return {x, y};
// }
// 等同于
// function f(x, y) {
//   return {x: x, y: y};
// }
// console.log(f(1, 2)); // Object {x: 1, y: 2}

// 35.ES6允许字面量定义对象时，用表达式作为属性名,即把表达式放在方括号内。表达式还可以用于定义方法名。
// 属性名表达式与简洁表示法，不能同时使用，会报错。
// let propKey = 'foo';
// let obj = {
//   [propKey]: true,
//   ['a' + 'bc']: 123
// };
// console.log(obj);

// 报错
// var foo = 'bar';
// var bar = 'abc';
// var baz = { [foo] };

// 36.Object.is用来比较两个值是否严格相等，与严格比较运算符（===）的行为基本一致,不同只有两个：一是+0不等于-0，二是NaN等于自身。
// +0 === -0 //true
// NaN === NaN // false
// Object.is(+0, -0) // false
// Object.is(NaN, NaN) // true

// 37.Object.assign方法用于对象的合并，将源对象的所有可枚举属性，复制到目标对象（第一个参数），同名属性后面的会覆盖前面的属性。
// 字符串会以数组形式拷贝入目标对象,如果无法转成对象，就会跳过。如果undefined和null、数值、布尔值不在首参数，就不会报错。
// var v1 = 'abc';
// var v2 = true;
// var v3 = 10;
// var obj = Object.assign({}, v1, v2, v3);
// console.log(obj); // { "0": "a", "1": "b", "2": "c" }

// 38.对象属性的遍历 
/*
38.1 for...in循环遍历对象自身的和继承的可枚举属性（不含Symbol属性）
38.2 Object.getOwnPropertyNames返回一个数组，包含对象自身的所有属性（不含Symbol属性，但是包括不可枚举属性）。
38.3 Object.getOwnPropertySymbols返回一个数组，包含对象自身的所有Symbol属性。
38.4 Reflect.ownKeys返回一个数组，包含对象自身的所有属性，不管是属性名是Symbol或字符串，也不管是否可枚举。
38.5 Object.keys返回一个数组，包括对象自身的（不含继承的）所有可枚举属性（不含Symbol属性）。
38.6 Object.values方法返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键值。
38.7 Object.entries方法返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键值对数组。
*/

// 39.相同参数的Symbol函数的返回值是不相等的,表示对Symbol实例的描述
// var s1 = Symbol("foo");
// var s2 = Symbol("foo");
// s1 === s2 // false

// 40.Symbol不能与其他类型的值进行运算,可以显式转为字符串,不能转为数值。
// var sym = Symbol('My symbol');
// String(sym) // 'Symbol(My symbol)'
// sym.toString() // 'Symbol(My symbol)'

// 41.Symbol值作为对象属性名时，不能用点运算符,要用方括号，相当于表达式属性。

// 42.Symbol作为属性名，该属性不会出现在for...in、for...of循环中，也不会被Object.keys()、Object.getOwnPropertyNames()返回。
// 但是，它也不是私有属性，有一个Object.getOwnPropertySymbols方法，可以获取指定对象的所有Symbol属性名。
// var obj = {};
// var a = Symbol('a');
// var b = Symbol('b');
// obj[a] = 'Hello';
// obj[b] = 'World';
// var objectSymbols = Object.getOwnPropertySymbols(obj);
// console.log(objectSymbols); // [Symbol(a), Symbol(b)]

// 43.Symbol.for()重新使用同一个Symbol值
// Symbol.keyFor方法返回一个已登记的Symbol类型值的key。
// var s1 = Symbol.for("foo");
// Symbol.keyFor(s1) // "foo"
// var s2 = Symbol("foo"); //Symbol()写法没有登记机制
// Symbol.keyFor(s2) // undefined

// 44.Set类似于数组，但是成员的值都是唯一的不会发生类型转换，所以5和"5"是两个不同的值,两个对象总是不相等的。
// var set = new Set([1, 2, 3, 4, 4]);
// console.log(set);

// 45.WeakSet的成员只能是对象，不可遍历,没有size属性
// 46.Map数据结构是键值对的集合，“键”是各种类型的值

// 47.
// var obj = {
//   get val() {
//     return this.val;
//   },
//   set val(x) {
//     this.val = x;
//   }
// }

// var obj = new Proxy({}, {
//   get: function(target, key, receiver) {
//     console.log(`getting ${key}!`);
//     return Reflect.get(target, key, receiver);
//   },
//   set: function(target, key, value, receiver) {
//     console.log(`setting ${key}!`);
//     return Reflect.set(target, key, value, receiver);
//   }
// });
// obj.count = 1;
// ++obj.count

// 如果name属性部署了读取函数（getter），则读取函数的this绑定receiver
// var myObject = {
//   foo: 1,
//   bar: 2,
//   get baz() {
//     return this.foo + this.bar;
//   },
// };
// var myReceiverObject = {
//   foo: 4,
//   bar: 4,
// };
// Reflect.get(myObject, 'baz', myReceiverObject) // 8

// 48 Promise
// function timeout(ms) {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, ms, 'done');
//   });
// }

// timeout(100).then((value) => {
//   console.log(value);
// });

// 49.Iterator 的概念
// 当使用for...of循环遍历某种数据结构时，该循环会自动去寻找Iterator接口。 
// for...of中的变量值为value的值
// class RangeIterator {
//   constructor(start, stop) {
//     this.value = start;
//     this.stop = stop;
//   }
//   [Symbol.iterator]() { return this; }
//   next() {
//     var value = this.value;
//     if (value < this.stop) {
//       this.value++;
//       return {done: false, value: value};
//     }
//     return {done: true, value: undefined};
//   }
// }
// function range(start, stop) {
//   return new RangeIterator(start, stop);
// }
// for (var value of range(0, 3)) {
//   console.log(value);
// }

// 50.Generator函数
// function* helloWorldGenerator() {
//   yield 'hello';
//   yield 'world';
//   return 'ending';
// }
// var hw = helloWorldGenerator();
// console.log(hw.next());
// console.log(hw.next());
// console.log(hw.next());
// console.log(hw.next());

// 51.yield语句如果用在一个表达式之中，必须放在圆括号里面。yield语句用作函数参数或赋值表达式的右边，可以不加括号。
// console.log('Hello' + yield 123); // SyntaxError
// console.log('Hello' + (yield 123)); // OK

// 52.next方法可以带一个参数，该参数就会被当作上一个yield语句的返回值。
// function* f() {
//   for(var i=0; true; i++) {
//     var reset = yield i;
//     if(reset) { i = -1; }
//   }
// }
// var g = f();
// console.log(g.next()); // { value: 0, done: false }
// console.log(g.next()); // { value: 1, done: false }
// console.log(g.next()); // { value: 2, done: false }
// console.log(g.next(true));// { value: 0, done: false }

// 第一次调用next方法时，就能够输入值
// function wrapper(generatorFunction) {
//   return function () {
//     let generatorObject = generatorFunction();
//     generatorObject.next();
//     return generatorObject;
//   };
// }
// const wrapped = wrapper(function* () {
//   console.log(`First input: ${yield}`);
//   return 'DONE';
// });
// wrapped().next('hello!') // First input: hello!

// 53.for...of循环可以自动遍历Generator函数时生成的Iterator对象，且此时不再需要调用next方法。
// function *foo() {
//   yield 1;
//   yield 2;
//   yield 3;
//   yield 4;
//   yield 5;
//   return 6;
// }
// for (let v of foo()) {
//   console.log(v);
// }
// // 1 2 3 4 5

// 54.Generator return返回给定的值，并且终结遍历Generator函数。
// function* gen() {
//   yield 1;
//   yield 2;
//   yield 3;
// }
// var g = gen();
// g.next()        // { value: 1, done: false }
// g.return('foo') // { value: "foo", done: true }
// g.next()        // { value: undefined, done: true }

// 55.yield*语句，用来在一个Generator函数里面执行另一个Generator函数。
// function* foo() {
//   yield 'a';
//   yield 'b';
// }
// function* bar() {
//   yield 'x';
//   yield* foo();
//   yield 'y';
// }
// // 等同于
// function* bar() {
//   yield 'x';
//   yield 'a';
//   yield 'b';
//   yield 'y';
// }
// 56.因为g返回的总是遍历器对象，而不是this对象。
// function* g() {
//   this.a = 11;
// }
// let obj = g();
// console.log(obj.a); // undefined

// 57.Promise新建后就会立即执行,首先输出的是“Promise”。然后，then方法指定的回调函数，将在当前脚本所有同步任务执行完才会执行，所以“Resolved”最后输出。
// let promise = new Promise(function(resolve, reject) {
//   console.log('Promise');
//   resolve();
// });
// promise.then(function() {
//   console.log('Resolved.');
// });
// console.log('Hi!');
// Promise
// Hi!
// Resolved

// 58.如果调用resolve函数和reject函数时带有参数，那么它们的参数会被传递给回调函数,then方法返回的是一个新的Promise实例（注意，不是原来那个Promise实例）。Promise.prototype.catch方法是.then(null, rejection)的别名，用于指定发生错误时的回调函数。Promise对象的错误具有“冒泡”性质，会一直向后传递，直到被捕获为止。也就是说，错误总是会被下一个catch语句捕获。一般来说，不要在then方法里面定义Reject状态的回调函数（即then的第二个参数），总是使用catch方法。如果没有使用catch方法指定错误处理的回调函数，Promise对象抛出的错误不会传递到外层代码，即不会有任何反应。
// var someAsyncThing = function() {
//   return new Promise(function(resolve, reject) {
//     // 下面一行会报错，因为x没有声明
//     resolve(x + 2);
//   });
// };
// someAsyncThing().then(function() {
//   console.log('everything is great');
// });

// 59.ES7提供了async函数
// var fs = require('fs');
// var readFile = function (fileName) {
//   return new Promise(function (resolve, reject) {
//     fs.readFile(fileName, function(error, data) {
//       if (error) reject(error);
//       resolve(data);
//     });
//   });
// };
// var asyncReadFile = async function (){
//   var f1 = await readFile('/etc/fstab');
//   var f2 = await readFile('/etc/shells');
//   console.log(f1.toString());
//   console.log(f2.toString());
// };

// var result = asyncReadFile(); //自动执行，输出最后结果。
// return语句返回的值，会成为then方法回调函数的参数。返回值是Promise
// async函数内部抛出错误，会导致返回的Promise对象变为reject状态。抛出的错误对象会被catch方法回调函数接收到。

// 60.class中的constructor方法就是构造方法，对应ES5的构造函数，里面的this关键字则代表实例对象。类的所有方法都定义在类的prototype属性上面。类的内部所有定义的方法，都是不可枚举的
// class Point {
// }
// console.log(typeof Point); // "function"
// console.log(Point === Point.prototype.constructor) // true

// class Point {
//   constructor(){
//   }

//   toString(){
//   }

//   toValue(){
//   }
// }
// // 等同于
// Point.prototype = {
//   toString(){},
//   toValue(){}
// };

// 61.通过new命令生成对象实例时，自动调用constructor。类的构造函数，不使用new是没法调用的
// class Foo {
//   constructor() {
//     return Object.create(null);
//   }
// }
// Foo() // TypeError: Class constructor Foo cannot be invoked without 'new'

// 62.Class不存在变量提升
// new Foo(); // ReferenceError
// class Foo {}

// 63.类的方法内部如果含有this,它默认指向类的实例,
// 将这个方法提取出来单独使用，this会指向该方法运行时所在的环境，因为找不到print方法而导致报错。一个比较简单的解决方法是，在构造方法中绑定this,另一种解决方法是使用箭头函数。
// class Logger {
//   constructor() {
//     // this.printName = this.printName.bind(this);
//   }
//   printName(name = 'there') {
//     this.print(`Hello ${name}`);
//   }
//   print(text) {
//     console.log(text);
//   }
// }
// const logger = new Logger();
// const { printName } = logger;
// printName(); // TypeError: Cannot read property 'print' of undefined

// 64.Class之间可以通过extends关键字实现继承，子类必须在constructor方法中调用super方法，否则新建实例时会报错。这是因为子类没有自己的this对象，而是继承父类的this对象，然后对其进行加工。如果不调用super方法，子类就得不到this对象。

// 65.super作为函数调用时（即super(...args)作为对象调用时（即super.prop或super.method()），super代表父类。），super代表父类的构造函数。此时super只能引用父类实例的方法（包括静态方法），不能引用父类的属性。
// class A {
//   p() {
//     return 2;
//   }
// }
// class B extends A {
//   constructor() {
//     super();
//     this.p = 3;
//   }
//   get m() {
//      return this.p * super.p();
//   }
//   set m(value) {
//     throw new Error('read only');
//   }
// }
// let b = new B();
// console.log(b.m); // 6

// 66.子类实例的__proto__属性的__proto__属性，指向父类实例的__proto__属性。也就是说，子类的原型的原型，是父类的原型。
// var p1 = new Point(2, 3);
// var p2 = new ColorPoint(2, 3, 'red');

// p2.__proto__ === p1.__proto__ // false
// p2.__proto__.__proto__ === p1.__proto__ // true

// 67.ES5是先新建子类的实例对象this，再将父类的属性添加到子类上，由于父类的内部属性无法获取，导致无法继承原生的构造函数。因为ES6是先新建父类的实例对象this，然后再用子类的构造函数修饰this,使得父类的所有行为都可以继承。
// class MyArray extends Array {
//   constructor(...args) {
//     super(...args);
//   }
// }

// var arr = new MyArray();
// arr[0] = 12;
// arr.length // 1

// arr.length = 0;
// arr[0] // undefined

// 68.类相当于实例的原型，所有在类中定义的方法，都会被实例继承。如果在一个方法前，加上static关键字，就表示该方法不会被实例继承，而是直接通过类来调用，这就称为“静态方法”。父类的静态方法，可以被子类继承。
// class Foo {
//   static classMethod() {
//     return 'hello';
//   }
// }
// Foo.classMethod() // 'hello'
// var foo = new Foo();
// foo.classMethod()
// TypeError: foo.classMethod is not a function

// 69.ES6明确规定，Class内部只有静态方法，没有静态属性。
// 以下两种写法都无效
// class Foo {
//   // 写法一
//   prop: 2
//   // 写法二
//   static prop: 2
// }
// Foo.prop // undefined
// ES7有一个静态属性的提案,类的实例属性可以用等式，写入类的定义之中。类的静态属性只要在上面的实例属性写法前面，加上static关键字就可以了。
// class MyClass {
//   myProp = 42;
//   constructor() {
//     console.log(this.myProp); // 42
//   }
// }

// 70.ES6为new命令引入了一个new.target属性，（在构造函数中）返回new命令作用于的那个构造函数。如果构造函数不是通过new命令调用的，new.target会返回undefined,Class内部调用new.target，返回当前Class。子类继承父类时，new.target会返回子类。

// 71.修饰器本质就是编译时执行的函数。修饰器函数的第一个参数，就是所要修饰的目标类。如果觉得一个参数不够用，可以在修饰器外面再封装一层函数。
// function testable(isTestable) {
//   return function(target) {
//     target.isTestable = isTestable;
//   }
// }
// @testable(true)
// class MyTestableClass {}
// MyTestableClass.isTestable // true
// @testable(false)
// class MyClass {}
// MyClass.isTestable // false

// 72.修饰类的属性。一共可以接受三个参数，第一个参数是所要修饰的目标对象，第二个参数是所要修饰的属性名，第三个参数是该属性的描述对象。
// class Person {
//   @nonenumerable
//   get kidCount() { return this.children.length; }
// }
// function nonenumerable(target, name, descriptor) {
//   descriptor.enumerable = false;
//   return descriptor;
// }

// 73.如果同一个方法有多个修饰器，会像剥洋葱一样，先从外到内进入，然后由内向外执行
// function dec(id){
//     console.log('evaluated', id);
//     return (target, property, descriptor) => console.log('executed', id);
// }
// class Example {
//     @dec(1)
//     @dec(2)
//     method(){}
// }
// // evaluated 1
// // evaluated 2
// // executed 2
// // executed 1

// 74.由于存在函数提升，使得修饰器不能用于函数。

// 75.export命令输出变量。可以使用as关键字重命名。要处于模块顶层。
// 写法一
// export var m = 1;
// // 写法二
// var m = 1;
// export {m};
// // 写法三
// var n = 1;
// export {n as m};

// 76.export语句输出的接口，与其对应的值是动态绑定关系，即通过该接口，可以取到模块内部实时的值。
// export var foo = 'bar';
// setTimeout(() => foo = 'baz', 500);

// 77.import命令接受一个对象（用大括号表示），里面指定要从其他模块导入的变量名。大括号里面的变量名，必须与被导入模块（profile.js）对外接口的名称相同。如果想为输入的变量重新取一个名字，import命令要使用as关键字，将输入的变量重命名。import命令具有提升效果，会提升到整个模块的头部，首先执行。
// foo();
// import { foo } from 'my_module';

// 78.如果在一个模块之中，先输入后输出同一个模块，import语句可以与export语句写在一起。
// export { es6 as default } from './someModule';
// // 等同于
// import { es6 } from './someModule';
// export default es6;

// 79.import语句会执行所加载的模块，仅仅执行lodash模块，但是不输入任何值。
// import 'lodash';

// 80.整体加载，即用星号（*）指定一个对象，所有输出值都加载在这个对象上面。
// import * as circle from './circle';
// console.log('圆面积：' + circle.area(4));
// console.log('圆周长：' + circle.circumference(14));

// 81.用到export default命令，为模块指定默认输出。其他模块加载该模块时，import命令可以为该匿名函数指定任意名字。这时import命令后面，不使用大括号。一个模块只能有一个默认输出，因此export deault命令只能使用一次。所以，import命令后面才不用加大括号，因为只可能对应一个方法。export default命令其实只是输出一个叫做default的变量，所以它后面不能跟变量声明语句。
// // export-default.js
// export default function () {
//   console.log('foo');
// }
// // import-default.js
// import customName from './export-default';
// customName(); // 'foo'
// 错误
// export default var a = 1;

// 82.ES6输入的模块变量，只是一个“符号连接”，所以这个变量是只读的，对它进行重新赋值会报错。export通过接口，输出的是同一个值。不同的脚本加载这个接口，得到的都是同样的实例。
// // lib.js
// export let obj = {};
// // main.js
// import { obj } from './lib';
// obj.prop = 123; // OK
// obj = {}; // TypeError