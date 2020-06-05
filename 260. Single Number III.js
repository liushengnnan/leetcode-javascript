/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
    if (nums === null || nums.length <= 2) {
        return nums;
    }

    var xor = nums[0];
    for (var i = 1; i < nums.length; i++) {
        xor ^= nums[i];
    }

    var exp = 1;
    while (!(exp & xor)) {
        exp = exp * 2;
    }
    console.log(exp);
    var xorBit0 = 0;
    var xorBit1 = 0;

    for (var j = 0; j < nums.length; j++) {
        if (exp & nums[j]) {
            xorBit1 ^= nums[j];
            console.log("with 1:  " + nums[j]);
        } else {
            console.log("with 0:  " + nums[j]);
            xorBit0 ^= nums[j];
        }
    }

    return [xorBit0, xorBit1];
};


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
    let xorOf2num = nums.reduce((xor, val) => xor ^ val);
    let lastBit = xorOf2num & -xorOf2num;
    let res1 = 0, res2 = 0;
    for (let i = 0; i < nums.length; i++) {
        const cur = nums[i];
        if (cur & lastBit) {
            res1 ^= cur
        } else {
            res2 ^= cur
        }
    }
    return [res1, res2];
};

let nums = [1, 2, 1, 2, 3, 5];
let x = singleNumber(nums);
console.log(x);