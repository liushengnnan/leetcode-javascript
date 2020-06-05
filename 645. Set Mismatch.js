/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
    var res = []
    var len = nums.length
    var sum = 0
    for (var i = 0; i < len; i++) {
        if (nums[Math.abs(nums[i]) - 1] < 0) {
            res[0] = Math.abs(nums[i])
            continue
        }
        else nums[Math.abs(nums[i]) - 1] *= -1
        sum += Math.abs(nums[i])

    }
    res[1] = (len * (len + 1)) / 2 - sum
    return res
}
let nums = [1, 2, 2, 4];
let x = findErrorNums(nums)
console.log(x);

let findErrorNums = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        /**
         * 这里就是要把nums[i]放到nums[nums[i]-1]的位置上。
         * 如果nums[nums[i]-1]位置上刚好是nums[i]，
         * 那么说明有两个nums[i],
         * 此时就认为nums[i]已经放对位置了。
         */
        while (nums[i] !== i + 1 && nums[nums[i] - 1] !== nums[i]) {
            let tmp = nums[i]
            nums[i] = nums[tmp - 1]
            nums[tmp - 1] = tmp
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i + 1) {
            return [nums[i], i + 1]
        }
    }
}


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
    let dup, missing;
    for (let i = 0; i < nums.length; i++) {
        let index = Math.abs(nums[i]) - 1;
        if (nums[index] > 0) {
            nums[index] *= -1;
        } else {
            dup = index + 1;
        }
    }
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] > 0) {
            missing = j + 1
        }
    }
    return [dup, missing];
};