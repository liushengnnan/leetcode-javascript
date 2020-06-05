/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function (nums) {
    if (nums.length == 0) return [];
    let array = nums.sort((a, b) => a - b);
    let res = [[array[0]]];
    let maxIndex = 0;
    for (let i = 1; i < array.length; i++) {
        const val = array[i];
        let tmp = []
        for (j = i - 1; j >= 0; j--) {
            if (val % array[j] == 0) {
                if (res[j].length > tmp.length) {
                    tmp = res[j];
                }
            }
        }
        if (tmp.length == 0) {
            res[i] = [val];
        } else {
            res[i] = [...tmp, val];
        }
        console.log(...res[i]);
        maxIndex = res[maxIndex].length < res[i].length ? i : maxIndex;
    }
    return res[maxIndex];
};

let Input = [2,3,4,9,8];
let x = largestDivisibleSubset(Input);
console.log(x);
