function Person() {

}
// 虽然写在注释里，但是你要注意：
// prototype是函数才会有的属性

// 每个函数都有一个 prototype 属性，就是我们经常在各种例子中看到的那个 prototype

// 函数的 prototype 属性指向了一个对象，这个对象正是调用该构造函数而创建的实例的原型，也就是这个例子中的 person1 和 person2 的原型。

// 那什么是原型呢？你可以这样理解：每一个JavaScript对象(null除外)在创建的时候就会与之关联另一个对象，这个对象就是我们所说的原型，每一个对象都会从原型"继承"属性。
Person.prototype.name = 'Kevin';
var person1 = new Person();
var person2 = new Person();
console.log(person1.name) // Kevin
console.log(person2.name) // Kevin


var person = new Person();
// 这是每一个JavaScript对象(除了 null )都具有的一个属性，叫__proto__，这个属性会指向该对象的原型。
console.log(person.__proto__ === Person.prototype); // true


// 每个原型都有一个 constructor 属性指向关联的构造函数。
console.log(Person === Person.prototype.constructor); // true
