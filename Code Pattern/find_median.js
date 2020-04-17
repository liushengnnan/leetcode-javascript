/**
 * @param {number[]} nums
 * @return {number} 
 */
// var find_median = function(nums) { 
//     let arr = nums.sort((a,b)=> a-b);
//     console.log(arr[Math.floor((nums.length - 1)/2)]);
// }

/**
 * @param {number[]} nums
 * @return {number} 
 */
var find_median = function(nums) { 
    let n = nums.length;
    for (let index = 0; index < 11; index++) {
        let y = (1 + 2*index);
        let z = (n | 1);
        let x = y % z;
        console.log(y,z,x);
    }
}

let nums = [1,2,3,4,5,6,7,8,9,10,11,12];

find_median(nums);