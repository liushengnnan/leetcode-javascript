/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
    let res = [];
    let count = 0;
    let subStr = '';
    for (const char of s) {
        char === 'L' ? count++ : count--;
        subStr += char;
        if (count == 0) {
            res.push(subStr);
            subStr = '';
        }
    }
    return res.length;
};

var balancedStringSplit = function (s) {
    let result = 0;
    let balance = 0;
    for (let letter of s) {
        balance += (letter === 'L' ? -1 : 1)
        if (balance === 0) result++
    }
    return result
};

let s = 'RLRRLLRLRL';
let x = balancedStringSplit(s);
console.log(x);