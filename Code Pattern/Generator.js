// 执行 Generator 函数会返回一个遍历器对象，也就是说，Generator 函数除了状态机，还是一个遍历器对象生成函数。
// 返回的遍历器对象，可以依次遍历 Generator 函数内部的每一个状态。

function* helloWorldGenerator() {
    yield 'hello';
    yield 'world';
    return 'ending';
}

var hw = helloWorldGenerator();
console.log(hw);
console.log(hw.next());
console.log(hw.next());
console.log(hw.next());
console.log(hw.next());


// 【】Generator 函数也不能跟new命令一起用
//