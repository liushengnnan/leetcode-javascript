// Leetcode #169
// Language: Javascript
// Problem: https://leetcode.com/problems/majority-element/
// Author: Chihung Yu
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var mj = 0;
    var cnt = 1;
    
    for(var i = 1; i < nums.length; i++){
        if(nums[i] === nums[mj]){
            cnt++;
        } else {
            cnt--;
        }
        
        if(cnt === 0){
            mj = i;
            cnt = 1;
        }
    }
    
    return nums[mj];
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let map = new Map();
    let i = 0;
    while(i< nums.length) {
        let x = map.get(e);
        if (x === undefined) {
            map.set(e, 1);
        } else {
            map.set(e, x+1);
        }
        if (map.get(e) >= nums.length/2) { 
            return e;
        }
        i++;
    }
    return -1;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var majority = 0;
    var count = 0;
    nums.forEach(e => {
        if (count == 0) {
            majority = e;
            count = 1;
        } else {
            (e == majority) ? count++ : count--;
        }
    });
    return majority;
};