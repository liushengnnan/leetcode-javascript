/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    var numLeft = nums[0];
    for (let i = 1; i < nums.length; i++) {
        numLeft--;
        if (numLeft < 0) {
            return false;
        }
        numLeft = Math.max(nums[i], numLeft);
    }
    return numLeft >= 0;
};

let nums = [3, 2, 1, 0, 4];
let x = canJump(nums);

