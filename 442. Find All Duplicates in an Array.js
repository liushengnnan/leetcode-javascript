/**
 * @param {number[]} nums
 * @return {number[]}
 */

// when find a number i, flip the number at position i-1 to negative. 
// if the number at position i-1 is already negative, i is the number that occurs twice.
var findDuplicates = function(nums) {
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        const j = Math.abs(nums[i]) ;
        let t = nums[j - 1];
        if (t < 0) { result.push(j); } 
        nums[j - 1] = -t;
    }    
    console.log(result);
    return result;
};


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    //tricky part: 1 ≤ a[i] ≤ n (n = size of array)
    
    let res = [];
    
    //ideas
    //1. loop through then mark negative for the index of the number.  
    for(let i =0; i< nums.length; i++){
        const index  = Math.abs(nums[i]) -1; //bc 1<=a[i] <=n
        //if it's already negative, that means dup. 
        if(nums[index] < 0) res.push(index+1);
        nums[index] = -nums[index];
        // console.log(nums)
    }
    
    return res;
};

let nums = [4,3,2,7,8,2,3,1];
let x = findDuplicates(nums);