/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */

// bit 异或 true 的 个数
var hammingDistance = function(x, y) {
    let v = x ^ y;
    let count = 0;
    while(v != 0) {
        v = v & (v - 1);
        count++;
    }
    return count;
};