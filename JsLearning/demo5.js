// # 全局对象

// 1.可以通过 this 引用，在客户端 JavaScript 中，全局对象就是 Window 对象。
console.log(this);    // Object {}

// 2.全局对象是由 Object 构造函数实例化的一个对象 
console.log(this instanceof Object);   // true


// 3.预定义了一堆，嗯，一大堆函数和属性: 都能生效
console.log(Math.random());
// console.log(this.Math.random()); // TypeError: Cannot read property 'random' of undefined

// 4.作为全局变量的宿主
var a = 1;
console.log(this.a);


// 结论： 全局上下文中的变量对象就是全局对象呐！