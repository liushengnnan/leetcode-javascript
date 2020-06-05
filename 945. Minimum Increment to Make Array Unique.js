/**
 * @param {number[]} A
 * @return {number}
 */
var minIncrementForUnique = function (A) {
    let sortArr = A.sort((a, b) => a - b);
    let cnt = 0;
    for (let i = 1; i < sortArr.length; i++) {
        const cur = sortArr[i];
        const pre = sortArr[i - 1];
        if (cur <= pre) {
            let incre = pre - cur;
            sortArr[i] += incre + 1;
            cnt += incre + 1
        }
    }
    return cnt;
};

let Input = [3, 3, 0, 2, 0, 9, 2, 11, 10, 14, 5, 13, 6, 5, 1];
let x = minIncrementForUnique(Input);
console.log(x);