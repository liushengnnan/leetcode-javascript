/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
    let array = nums.map(val => val == 0 ? -1 : val);
    let map = new Map();
    map.set(0, -1);
    let sum = 0, max = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
        if (map.has(sum)) {
            max = Math.max(max, i - map.get(sum));
        } else {
            map.set(sum, i);
        }
    }
    return max;
};


let nums = [0, 1, 0];
let x = findMaxLength(nums);