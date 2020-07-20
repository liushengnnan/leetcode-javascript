/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
    let result = new Array(A.length).fill(0);
    let evenIndex = 0;
    let oddIndex = 1;
    for (let i = 0; i < A.length; i++) {
        const val = A[i];
        if (val % 2 == 0) {
            result[evenIndex] = val;
            evenIndex += 2;
        } else {
            result[oddIndex] = val;
            oddIndex += 2;
        }
    }
    return result;
};