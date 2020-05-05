/**
 * @param {number[]} nums
 * @return {boolean}
 */

/**
 * 状态定义:
 * dp[i][j] 表示从数组的 [0, i] 这个子区间内挑选一些正整数，每个数只能用一次，使得这些数的和恰好等于 j。
 * 
 * 状态转移方程:
 * dp[i][j] = dp[i-1][j] || dp[i-1][j-num[i]];
 * 
 * 1、不选择 nums[i]，如果在 [0, i - 1] 这个子区间内已经有一部分元素，使得它们的和为 j ，那么 dp[i][j] = true；
 * 2、  选择 nums[i]，如果在 [0, i - 1] 这个子区间内就得找到一部分元素，使得它们的和为 j - nums[i]。
 * 
 * 边界条件：
 * 1、j - nums[i] 作为数组的下标，一定得保证大于等于 0 ，因此 nums[i] <= j；
 * 2、注意到一种非常特殊的情况：j 恰好等于 nums[i]，即单独 nums[j] 这个数恰好等于此时“背包的容积” j，这也是符合题意的。
 * 
 * 初始化：
 * dp[0][0] = false，因为是正整数，当然凑不出和为 0
*/
var canPartition = function (nums) {
    let sum = nums.reduce((res, val) => res + val);
    if (sum % 2 != 0) return false;
    sum /= 2;
    var helper = (i, sum) => {
        console.log(i, sum);
        if (nums[i] == sum) return true;
        if (sum == 0) return true;
        if (sum < 0) return false;
        if (i < 0) return false;
        return helper(i - 1, sum) || helper(i - 1, sum - nums[i]);
    }
    return helper(nums.length - 1, sum / 2);
};

var canPartition = function (nums) {
    let sum = nums.reduce((res, val) => res + val);
    if (sum % 2 != 0) return false;
    sum /= 2;
    let len = nums.length;
    let dp = [];
    for (let i = 0; i < len + 1; i++) {
        dp[i] = [];
        for (let j = 0; j < sum + 1; j++) {
            dp[i][j] = false;
        }
    }
    // it is possible to create a subset with sum of 0 using any set (the empty set)
    for (let i = 0; i < dp.length; i++) {
        dp[i][0] = true;
    }

    // it is not possible to create a sum > 0 without any elements for all sums j
    for (let j = 0; j < dp.length; j++) {
        dp[0][j] = false;
    }

    // you can make a sum of 0 with an empty set
    dp[0][0] = true
    // for each index (i - 1) in nums from which subsets are considered
    for (let i = 1; i <= nums.length; i++) {
        for (let j = 1; j <= sum; j++) {
            if (dp[i - 1][j] === true) {
                dp[i][j] = true;
            }
            else if (dp[i - 1][j - nums[i]] === true) {
                dp[i][j] = true;

            }
            else {
                dp[i][j] = false;
            }
        }
    }
    console.log(JSON.stringify(dp))
    return dp[nums.length][sum];
};


let Input = [1, 5, 11, 5];
let x = canPartition(Input);
console.log(x);