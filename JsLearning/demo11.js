const data = {
    value: 1
}

// 没有问题
data.value = 2;
data.num = 3;

console.log(data);

// 报错
// data = {}; // Uncaught TypeError: Assignment to constant variable.

var value = "global";

// 例子1
(function() {
    console.log(value);

    let value = 'local';
}());

// // 例子2
// {
//     console.log(value);

//     const value = 'local';
// };