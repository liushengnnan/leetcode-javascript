/**
 * @param {number[]} nums
 * @return {number} 
 */
var binary_search = function(nums, k) { 
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        console.log('left = ' + left + ' right = ' + right);
        let mindle = left + Math.floor((right - left) / 2)
        if (nums[mindle] === k) {
            return mindle;
        } else if (nums[mindle] > k) {
            right = mindle - 1;
        } else {
            left = mindle + 1;
        }
    }
    return -1;
}

let result = binary_search([1,2,3,4,5,6,7,8,9,11,13], 10);
console.log('result = ' + result);