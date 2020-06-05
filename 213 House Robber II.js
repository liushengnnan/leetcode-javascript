// Note: This is an extension of House Robber.

// After robbing those houses on that street, the thief has found himself a new place for his thievery so that he will not get too much attention. This time, all houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, the security system for these houses remain the same as for those in the previous street.

// Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.
// Microsoft


/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    // same as house robber I, but we cannot rob first and last house at the same time.

    function robHouses(nums) {
        var odd = 0;
        var even = 0;

        for (var i = 0; i < nums.length; i++) {
            var num = nums[i];
            if (i % 2 === 0) {
                even = Math.max(even + num, odd);
            } else {
                odd = Math.max(odd + num, even);
            }
        }

        return Math.max(even, odd);
    }

    if (nums.length <= 1) {
        return robHouses(nums);
    }

    var robHousesExceptLast = robHouses(nums.slice(0, -1));
    var robHousesExceptFirst = robHouses(nums.slice(1));
    return Math.max(robHousesExceptLast, robHousesExceptFirst);
};


/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    if (!nums.length) return 0;
    if (nums.length === 1) return nums[0];
    const help = (start, end) => {
        let dp = new Array(nums.length).fill(0);
        dp[start] = nums[start];
        dp[start + 1] = Math.max(nums[start], nums[start + 1]);
        for (let i = start + 2; i <= end; i++) {
            dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
        }
        return dp[end];
    }
    return Math.max(help(0, nums.length - 2), help(1, nums.length - 1));
};