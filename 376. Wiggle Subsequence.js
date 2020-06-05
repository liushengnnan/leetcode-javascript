/**
 * @param {number[]} nums
 * @return {number}
 */

// up[] and down[] to record the max wiggle sequence length so far at index i.
var wiggleMaxLength = function (nums) {
    if (!nums.length) return 0;
    let up = 1, down = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] < nums[i]) { // cur == up
            up = down + 1
        } else if (nums[i - 1] > nums[i]) {  // cur == down
            down = up + 1
        }
    }
    return Math.max(up, down);
};