/**
 * @param {number[]} A
 * @return {boolean}
 */
var canThreePartsEqualSum = function (A) {
    let sum = A.reduce((sum, val) => sum + val);
    if (sum % 3 != 0) return false;
    let target = sum / 3;
    let count = 0;
    sum = 0;
    for (let i = 0; i < A.length; i++) {
        sum += A[i];
        if (sum == target) {
            count += 1;
            sum = 0;
        }
    }
    return count >= 3;
};

let A = [0, 2, 1, -6, 6, 7, 9, -1, 2, 0, 1];
let x = canThreePartsEqualSum(A);
console.log(x);