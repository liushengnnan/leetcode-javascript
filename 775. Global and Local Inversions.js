/**
 * @param {number[]} A
 * @return {boolean}
 */
// 只能转换相邻的逆序对
var isIdealPermutation = function (A) {
    for (let i = 0; i < A.length - 1; i++) {
        if (A[i] > A[i + 1]) {
            [A[i], A[i + 1]] = [A[i + 1], A[i]]
            i++
        } 
    }
    for (let i = 0; i < A.length - 1; i++) {
        if (A[i] != i) {
            return false
        }
    }
    return true
};

var isIdealPermutation = function (A) {
    let max = A[0]
    let i = 0
    while (i < A.length - 2) {
        if (A[i + 2] < max) return false
        else {
            max = Math.max(max, A[i + 1])
        }
        i += 1
    }
    return true
};

var isIdealPermutation = function (A) {
    let curMax = -Infinity;
    for (let i = 1; i < A.length; i++) {
        if (curMax > A[i]) return false;
        curMax = Math.max(curMax, A[i - 1]);
    }
    return true;
};