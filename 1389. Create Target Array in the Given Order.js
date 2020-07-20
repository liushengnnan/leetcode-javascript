/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function (nums, index) {
    let result = [];
    for (let i = 0; i < index.length; i++) {
        let j = index[i];
        result.splice(j, 0, nums[i]);
    }
    return result;
};