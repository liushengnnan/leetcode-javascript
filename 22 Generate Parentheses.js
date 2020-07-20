// /**
//  * @param {number} n
//  * @return {string[]}
//  */
// var generateParenthesis = function(n) {
//     var result = [];
//     var output = '';

//     generate(result, output, 0, n, 0, 0);
//     return result;  
// };

// var generate = function(result, output, depth, n, left, right){
//    if(depth === 2*n){
//        result.push(output);
//        return;
//    }

//    if(left < n){
//        generate(result,output + '(',depth + 1, n, left + 1, right);
//    }
//    if(left > right){
//        generate(result,output + ')',depth + 1, n, left, right+1);
//    }
// }

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    let result = [];
    // 多余递归一层，不推荐
    var generateDfs = function (pre, left_used, right_used) {
        if (left_used > n || right_used > n) return
        if (right_used > left_used) return
        if (left_used == n && right_used == n - 1) {
            result.push(pre + ')')
        }
        generateDfs(pre + ')', left_used, right_used + 1);
        generateDfs(pre + '(', left_used + 1, right_used);
    };
    generateDfs('', 0, 0);
    return result
};


function generateParenthesis(n) {
    const output = []
    generateParenthesisHelper('', 0, 0)
    return output

    function generateParenthesisHelper(str, left, right) {
        if (left === n && right === n) {
            output.push(str)
            return
        }
        if (left < n) {
            generateParenthesisHelper(str + '(', left + 1, right)
        }
        if (left > right) {
            generateParenthesisHelper(str + ')', left, right + 1)
        }
    }
}

var generateParenthesis = function (n) {
    let result = [];
    var generateDfs = function (pre, left_used, right_used) {
        if (left_used == n && right_used == n) {
            result.push(pre)
            return;
        }
        if (left_used < n) {
            generateDfs(pre + '(', left_used + 1, right_used);
        }
        if (right_used < left_used) {
            generateDfs(pre + ')', left_used, right_used + 1);
        }
    };
    generateDfs('', 0, 0);
    return result
};

let x = generateParenthesis(3);
console.log(...x);