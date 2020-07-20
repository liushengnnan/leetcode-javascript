// Leetcode #219
// Language: Javascript
// Problem: https://leetcode.com/problems/contains-duplicate-ii/
// Author: Chihung Yu
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
// var containsNearbyDuplicate = function (nums, k) {
//     if (k <= 0) {
//         return false;
//     }

//     if (nums === null || nums.length === 0) {
//         return false;
//     }

//     var hash = {};

//     for (var i = 0; i < nums.length; i++) {
//         var val = nums[i];
//         if (hash[val] !== undefined) {
//             if ((i - hash[val]) <= k) {
//                 return true;
//             } else {
//                 hash[val] = i;
//             }
//         } else {
//             hash[val] = i;
//         }


//     }

//     return false;
// };




/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    let map = {}
    for (let i = 0; i < nums.length; i++) {
        let val = nums[i];
        if (map[val] !== undefined) {
            if (i - map[val] <= k) {
                return true
            } else {
                map[val] = i;
            }
        } else {
            map[val] = i;
        }
    }
    console.log(map);
    return false
};

let nums = [1, 2, 3, 1], k = 3;
let x = containsNearbyDuplicate(nums, k);
