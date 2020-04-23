/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function (nums, S) {
    if (nums.length === 0) { return S === 0 ? 1 : 0 }
    let cur = nums[0];
    return findTargetSumWays(nums.slice(1), S - cur) + findTargetSumWays(nums.slice(1), S + cur)
};


/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
// DP Solution 要达到S值，必有一次加减同一个数，所以取(sum + S) / 2为Target值
// Time O(2n) Space O(n)
var findTargetSumWays = function(nums, S) {
    const sum = nums.reduce((a, c) => a + c);
    if (sum < S) {
        return 0;
    }
    if ((sum + S) % 2 === 1) {
        return 0;
    }
    const target = (sum + S)/ 2;
    const dp = new Array(target + 1).fill(0);
    dp[0] = 1;
    nums.forEach((num) => {  // 遍历所有的nums
        for (let j = target; j >= num; j--) { // From target to nums[i], build up the dp.
            dp[j] += dp[j - num]; 
        }
    });
    return dp[target];
};

// DFS Solution
// Time O(2^n) Space(1)
var findTargetSumWays = function(nums, S) {
    let currentSum = 0, currentIndex = 0;
    return dfsFindTargetSum(currentSum, currentIndex, nums, S);
}

var dfsFindTargetSum = function(currentSum, currentIndex, nums, S) {
    if (currentIndex === nums.length) {
        return currentSum === S ? 1 : 0;
    } else {
        return dfsFindTargetSum(currentSum - nums[currentIndex], currentIndex + 1, nums, S)
            + dfsFindTargetSum(currentSum + nums[currentIndex], currentIndex + 1, nums, S);
    }
} 


let nums = [1, 1, 1, 1, 1];
let target = 3;
let x = findTargetSumWays(nums, target);
console.log(x);