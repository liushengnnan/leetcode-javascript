// Given an unsorted array of integers, find the length of longest increasing subsequence.

// For example,
// Given [10, 9, 2, 5, 3, 7, 101, 18],
// The longest increasing subsequence is [2, 3, 7, 101], therefore the length is 4. Note that there may be more than one LIS combination, it is only necessary for you to return the length.

// Your algorithm should run in O(n2) complexity.

// Follow up: Could you improve it to O(n log n) time complexity?

// Credits:
// Special thanks to @pbrother for adding this problem and creating all test cases.

// Hide Company Tags Microsoft
// Show Tags
// Show Similar Problems
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    var size = nums.length;

    if (size === 0) {
        return 0;
    }

    dp = Array(size).fill(1);

    for (var i = 1; i < size; i++) {
        for (var j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }

    return Math.max.apply(null, dp);
};

var lengthOfLIS = function (nums) {
    var size = nums.length;
    if (size === 0) {
        return 0;
    }
    let dp = Array(size).fill(1); // 选中num[i]的 Longest Increasing Subsequence
    for (let i = 1; i < size; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) { // 选中num[i]的条件
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }
    console.log(...dp)
    let result = dp.reduce((max, val) => Math.max(max, val));
    return result;
};

let arr = [1,3,5,4,7];
let x = lengthOfLIS(arr);
console.log(x);
