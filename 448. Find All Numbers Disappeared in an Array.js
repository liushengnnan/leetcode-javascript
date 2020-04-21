/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        const j = Math.abs(nums[i]) ;
        nums[j - 1] = -Math.abs(nums[j - 1]);
    }  
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) { result.push(i + 1)}
    }    
    return result;
};

let nums = [4,3,2,7,8,2,3,1];
let x = findDisappearedNumbers(nums);
console.log(x);