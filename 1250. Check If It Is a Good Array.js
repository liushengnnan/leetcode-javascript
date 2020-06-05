/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isGoodArray = function (nums) {
    let x = nums[0], y;
    for (let a of nums) {
        while (a > 0) {
            y = x % a;
            x = a;
            a = y;
        }
    }
    return x == 1;
};


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isGoodArray = function (nums) {
    var a = nums[0];

    for (let i = 1; i < nums.length; i++) {
        a = gcd(a, nums[i]);
        if (a == 1) return true;
    }

    return a === 1;
    // 都要是正整数
    function gcd(a, b) {
        if (b === 0) return a;
        return gcd(b, a % b);
    }
};