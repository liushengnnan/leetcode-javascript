/**
 * @param {number[]} nums
 * @return {number[]}
 */
function smallerNumbersThanCurrent(nums) {
    const sorted = Array.from(nums).sort((n1, n2) => n2 - n1);
    const map = new Map(sorted.map((num, index) => [num, nums.length - index - 1]));
    return nums.map(num => map.get(num));
}
let nums = [8, 1, 2, 2, 3];
let x = smallerNumbersThanCurrent(nums);


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
    const sorted = [...nums].sort((a, b) => b - a);

    const map = {};

    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i] === sorted[i + 1]) continue;

        if (sorted[i] > sorted[i + 1]) {
            map[sorted[i]] = sorted.length - i - 1;
        } else {
            map[sorted[i]] = 0;
        }
    }

    const res = nums.map(num => {
        return map[num];
    })

    return res;
};