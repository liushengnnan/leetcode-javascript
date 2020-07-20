/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function (bits) {
    for (let i = 0; i < bits.length; i++) {
        if (i == bits.length - 1) {
            return true
        }
        if (bits[i] == 1) {
            i++
        }
    }
    return false
};

let bits = [1, 1, 1, 0];
let x = isOneBitCharacter(bits);
console.log(x);


/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function (bits) {
    let bitSize;
    for (let i = 0; i < bits.length; i++) {
        if (bits[i] === 1) {
            i++;
            bitSize = 2;
        } else {
            bitSize = 1;
        }
    }
    return bitSize === 1 ? true : false;
};

/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function (bits) {
    let result = false;
    for (let i = 0; i < bits.length; i += 1) {
        if (bits[i] === 1) {
            i += 1;
            result = false;
        } else {
            result = true;
        }
    }
    return result;
};