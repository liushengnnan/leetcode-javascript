/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var smallestRangeI = function (A, K) {
    let min = Infinity;
    let max = - Infinity;
    for (let i = 0; i < A.length; i++) {
        const tmp = A[i];
        min = min < tmp ? min : tmp;
        max = max > tmp ? max : tmp;
    }
    return max - min > 2 * K ? max - min - 2 * K : 0;
};