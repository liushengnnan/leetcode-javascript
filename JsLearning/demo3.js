// # 实例与原型
function Person() {

}

Person.prototype.name = 'Kevin';

var person = new Person();

person.name = 'Daisy';
console.log(person.name) // Daisy

console.log(person) // Person {name: "Daisy"}
delete person.name;
console.log(person) // Person {}

console.log(person.name) // Kevin


// 当读取实例的属性时，如果找不到，就会查找与对象关联的原型中的属性，如果还查不到，就去找原型的原型，一直找到最顶层为止。


// 但是当我们删除了 person 的 name 属性时，读取 person.name，从 person 对象中找不到 name 属性,
// 就会从 person 的原型也就是 person.__proto__ ，也就是 Person.prototype中查找，幸运的是我们找到了 name 属性，结果为 Kevin。