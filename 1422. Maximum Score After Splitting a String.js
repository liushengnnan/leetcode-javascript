/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function (s) {
    let sum = 0;
    for (const char of s) {
        char === '1' ? sum++ : 1;
    }
    let max = 0;
    let count_0 = 0;
    for (let i = 0; i < s.length - 1; i++) {
        let char = s.charAt(i);
        char === '1' ? sum-- : count_0++;
        max = Math.max(max, sum + count_0);
    }
    return max;
};

let s = "011101";
let x = maxScore(s);
console.log(x);