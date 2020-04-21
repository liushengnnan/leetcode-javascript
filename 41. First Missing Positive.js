/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let n = nums.length;
    for (let i = 0; i < n; i++) {
        while(nums[i] > 0 && nums[i] <= n && nums[i] != nums[nums[i] - 1]) {
            let index = nums[i] - 1;
            [nums[i], nums[index]] = [nums[index], nums[i]];
        }
    }
    for (let i = 0; i < n; i++) {
        if (nums[i] != i + 1) {
            return i + 1;
        }
    }
    return n + 1;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    if (nums.length === 0) {
        return 1;
    }
    for (let i = 1; i< nums.length + 1; i++) {
        if (!nums.includes(i)) {
            return i;
        }
    }
    
    return nums.length + 1;
};

let x = firstMissingPositive([3,4,-1,1]);
console.log(x);