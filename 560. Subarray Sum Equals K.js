/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// way 1: Brute force
var subarraySum = function (nums, k) {
    let sums = [];
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        sums.push(sum);
    }
    console.log(...sums);
    // [i,j) : index i to j-1 sum(i,j) = sums[j] - sums[i]
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            const s = sums[j] - sums[i];
            if (s == k) {
                count++;
            }
        }
    }
    return count;
};

var subarraySumBF = function (nums, k) {
    let counter = 0;
    for (let i = 0; i < nums.length; i++) {
        let base = 0;
        for (let j = i; j < nums.length; j++) {
            base += nums[j];
            if (base == k) counter++;
        }
    }
    return counter;
};


// Hash Map
var subarraySumHashMap = function(nums, k) {
    let map = new Map();
    let sum = 0;
    let count = 0;
    map.set(0,1);
    for (let i=0;i<nums.length;i++) {
        sum += nums[i];
        if (map.has(sum-k)) count += map.get(sum-k);
        if (map.has(sum)) map.set(sum, map.get(sum)+1);
        else map.set(sum, 1);
    }
    console.log(...map);
    return count;
}

let nums = [1,1,-1,1];
let k = 2;
let x = subarraySumHashMap(nums, k);
console.log(x);