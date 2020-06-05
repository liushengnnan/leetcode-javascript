/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
    let max_1 = null;
    let max_2 = null;
    let max_3 = null;
    for (let i = 0; i < nums.length; i++) {
        const val = nums[i];
        if (val == max_1 || val == max_2 || val == max_3) continue;
        if (max_1 == null || max_1 < val) {
            max_3 = max_2
            max_2 = max_1
            max_1 = val
        } else if (max_2 == null || max_2 < val) {
            max_3 = max_2
            max_2 = val
        } else if (max_3 == null || max_3 < val) {
            max_3 = val
        }
    }
    return max_3 == null ? max_1 : max_3
};
let Input = [1, 2];
let x = thirdMax(Input);