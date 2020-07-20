/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var searchRange = function (nums, target) {
    var l = 0;
    var r = nums.length - 1;
    var leftBound = -1;
    var rightBound = -1;

    while (l <= r) {
        var mid = l + parseInt((r - l) / 2);
        console.log(mid, nums[mid])
        if (nums[mid] === target) {
            leftBound = mid;
            r = mid - 1;
        } else if (nums[mid] > target) {
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }

    l = 0;
    r = nums.length - 1;

    while (l <= r) {
        mid = l + parseInt((r - l) / 2);
        if (nums[mid] === target) {
            rightBound = mid;
            l = mid + 1;
        } else if (nums[mid] > target) {
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }

    return [leftBound, rightBound];
};


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var binary_search = function (nums, k) {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
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

var searchRange = function (nums, target) {
    let index = binary_search(nums, target);
    if (index == -1) {
        return [-1, -1];
    }
    let startIndex = index;
    let endIndex = index;
    while(nums[startIndex] == target) {
        startIndex--
    }
};


let nums = [5, 7, 7, 8, 8, 10], target = 5;
let x = searchRange(nums, target);
console.log(x);