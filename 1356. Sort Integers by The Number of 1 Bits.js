/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function (arr) {
    var bits = function (num) {
        let count = 0;
        while (num != 0) {
            count++;
            num &= num - 1;
        }
        return count;
    }
    let result = arr.sort((a, b) => bits(a) - bits(b) || a - b)
    return result;
};

let Input = [1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1];
let x = sortByBits(Input);
console.log(x);