/** Symbol

JavaScript 语言的第七种数据类型，
前六种是：undefined、null、布尔值（Boolean）、字符串（String）、数值（Number）、对象（Object）。

ES6 引入了一种新的原始数据类型 ·Symbol·，表示独一无二的值。

ES6 引入 Symbol 的原因： 从根本上防止属性名的冲突。

*/


let s = Symbol();


// 【1】typeof 类型：
console.log(typeof s);
// "symbol"

console.log(typeof 42);
// expected output: "number"

console.log(typeof 'blubber');
// expected output: "string"

console.log(typeof true);
// expected output: "boolean"

console.log(typeof undeclaredVariable);
// expected output: "undefined";


// 【2】Symbol函数前不能使用new命令，否则会报错。这是因为生成的 Symbol 是一个原始类型的值，不是对象。也就是说，由于 Symbol 值不是对象，所以不能添加属性。基本上，它是一种类似于字符串的数据类型。


// 【3】Symbol函数可以接受一个字符串作为参数，表示对 Symbol 实例的描述，主要是为了在控制台显示，或者转为字符串时，比较容易区分。 

let s1 = Symbol('foo');
let s2 = Symbol('bar');
s1 // Symbol(foo)
s2 // Symbol(bar)
console.log(s1.toString()) // "Symbol(foo)"
console.log(s2.toString()) // "Symbol(bar)"


// 【4】如果 Symbol 的参数是一个对象，就会调用该对象的toString方法，将其转为字符串，然后才生成一个 Symbol 值。
const obj = {
    toString() {
        return 'abc';
    }
};
const sym = Symbol(obj);
console.log(sym)
// expected output: Symbol(abc)


// 【5】 Symbol函数的参数只是表示对当前 Symbol 值的描述，因此相同参数的Symbol函数的返回值是不相等的。
// 没有参数的情况
let s1 = Symbol();
let s2 = Symbol();

s1 === s2 // false

// 有参数的情况
let s1 = Symbol('foo');
let s2 = Symbol('foo');

s1 === s2 // false


// 【6】Symbol 值不能与其他类型的值进行运算

// 【7】Symbol 值可以显式转为字符串 和 Boolean, 但是不能转化为Number
let sym = Symbol('My symbol');

String(sym) // 'Symbol(My symbol)'
sym.toString() // 'Symbol(My symbol)'

let sym = Symbol();
Boolean(sym) // true
!sym  // false

if (sym) {
    // ...
}

Number(sym) // TypeError
sym + 2 // TypeError
