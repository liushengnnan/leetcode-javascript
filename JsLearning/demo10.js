// # JavaScript深入之参数按值传递 #10

// ECMAScript中所有函数的参数都是按值传递的。

var value = 1;
function foo(v) {
    v = 2;
    console.log(v); //2
}
foo(value);
console.log(value) // 1