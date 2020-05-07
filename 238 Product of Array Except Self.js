// Given an array of n integers where n > 1, nums, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

// Solve it without division and in O(n).

// For example, given [1,2,3,4], return [24,12,8,6].

// Follow up:
// Could you solve it with constant space complexity? (Note: The output array does not count as extra space for the purpose of space complexity analysis.)

/**
 * @param {number[]} nums
 * @return {number[]}
 */

// http://fisherlei.blogspot.com/2015/10/leetcode-product-of-array-except-self.html
var productExceptSelf = function (nums) {
    var len = nums.length;
    var output = Array(len).fill(1);
    var left = 1;
    var right = 1;

    for (var i = 0; i < len - 1; i++) {
        left *= nums[i];
        right *= nums[len - i - 1];
        output[i + 1] *= left;
        output[len - i - 2] *= right;
    }

    return output;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let countofO = 0;
    let product = 1;
    for (let i = 0; i < nums.length; i++) {
        nums[i] == 0 ? countofO++ : product *= nums[i];
    }
    console.log(product);
    var res = Array(nums.length).fill(0);;
    if (countofO >= 2) {
        return res;
    } else if (countofO == 1)  {
        for (let i = 0; i < nums.length; i++) {
            res[i] =  nums[i] != 0 ? 0 : product;
        }
    } else {
        for (let i = 0; i < nums.length; i++) {
            res[i] =   product / nums[i];
        } 
    }
    return res;
};

let nums = [1, 0];
let x = productExceptSelf(nums);
console.log(x);