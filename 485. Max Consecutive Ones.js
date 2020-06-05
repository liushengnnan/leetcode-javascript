/**
 *  Input: [1,1,0,1,1,1]
    Output: 3
    Explanation: The first two digits or the last three digits are consecutive 1s.
    The maximum number of consecutive 1s is 3.  
 * @param {number[]} nums
 * @return {number}
 */

var findMaxConsecutiveOnes = function (nums) {
    let max = 0, tmp = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) {
            max = Math.max(tmp, max)
            tmp = 0
        } else {
            tmp++
        }
    }
    return Math.max(tmp, max);
};

let Input = [1, 1, 0, 1, 1, 1];
let x = findMaxConsecutiveOnes(Input);
console.log(x);