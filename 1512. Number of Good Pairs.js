
// 给你一个整数数组 nums 。

// 如果一组数字 (i,j) 满足 nums[i] == nums[j] 且 i < j ，就可以认为这是一组 好数对 。

// 返回好数对的数目。

/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
    let buckets = new Array(101).fill(0);
    nums.forEach(val => {
        buckets[val] += 1;
    });
    let result = 0;
    for (let i = 1; i < buckets.length; i++) {
        const val = buckets[i];
        if (val > 1) {
            result += val * (val - 1) / 2
        }
    }
    return result;
};


let nums = [1, 2, 3, 1, 1, 3];
let x = numIdenticalPairs(nums);
console.log(x);