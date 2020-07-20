/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function (A) {
    let l = 0;
    let r = A.length - 1;
    while (l < r) {
        while (A[l] % 2 ===0  && l < r) {
            l++;
        }
        while (A[r] % 2 !== 0 && l < r) {
            r--;
        }
        if (l < r) {
            [A[l], A[r]] = [A[r], A[l]];
            l++;
            r--;
        }
    }
    return A;
};

let arr = [0, 1, 2];
let x = sortArrayByParity(arr);
console.log(x);