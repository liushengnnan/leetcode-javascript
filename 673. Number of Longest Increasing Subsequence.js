/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function (nums) {
    let size = nums.length;
    let max_len = 0;
    let result = 0;
    if (size === 0) { return 0; }
    let count = Array(size).fill(1); // 选中num[i]的 Longest Increasing Subsequence 的个数
    let len = Array(size).fill(1);   // 选中num[i]的 Longest Increasing Subsequence 的长度
    for (let i = 1; i < size; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) { // 选中num[i]的条件
                if (len[j] + 1 == len[i]) {
                    count[i] += count[j];
                }
                if (len[j] + 1 > len[i]) {
                    len[i] = len[j] + 1;
                    count[i] = count[j];
                }
            }
        }
        if (max_len == len[i]) {
            result += count[i];
        }
        if (max_len < len[i]) {
            max_len = len[i];
            result = count[i];
        }
    }
    // console.log(...len);
    // console.log(...count);
    return result;
};


let arr = [1, 2, 4, 3, 5, 4, 7, 2];
let x = findNumberOfLIS(arr);
console.log(x);