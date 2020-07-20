/**
 * @param {number} n
 * @return {string[]}
 */
var gcd = function (a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
}

var simplifiedFractions = function (n) {
    let result = [];
    for (let i = 2; i <= n; i++) {
        for (let j = 1; j < i; j++) {
            let k = gcd(i, j);
            if (k == 1 || i % k != 0) {
                const val = j + "/" + i;
                result.push(val);
            }
        }
    }
    return result;
};

let x = simplifiedFractions(6);
console.log(...x);
