// # 活动对象
// 在函数上下文中，我们用活动对象(activation object, AO)来表示变量对象。

function foo(a) {
    var b = 2;
    function c() {}
    var d = function() {};
  
    b = 3;
  
  }
  
foo(1);

// 第一阶段: 当进入执行上下文时，这时候还没有执行代码


AO = {
    arguments: {
        0: 1,
        length: 1
    },
    a: 1,
    b: undefined,
    c: `reference to function c(){}`,
    d: undefined
}

// 第二阶段: 在代码执行阶段

AO = {
    arguments: {
        0: 1,
        length: 1
    },
    a: 1,
    b: 3,
    c: `reference to function c(){}`,
    d: `reference to FunctionExpression "d"`
}


// 到这里变量对象的创建过程就介绍完了，让我们简洁的总结我们上述所说：

// 1。 全局上下文的变量对象初始化是全局对象

// 2。 函数上下文的变量对象初始化只包括 Arguments 对象

// 3。 在进入执行上下文时会给变量对象添加形参、函数声明、变量声明等初始的属性值

// 4。 在代码执行阶段，会再次修改变量对象的属性值