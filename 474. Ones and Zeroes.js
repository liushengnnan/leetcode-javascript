/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function (strs, m, n) {
    const dp = Array(n + 1).fill(0).map(() => Array(m + 1).fill(0))
    for (let i = 0; i < strs.length; i++) {
        const str = strs[i];
        let one = str.split('').filter(x => x == '1').length;
        let zero = str.length - one;
        for (let j = n; j >= one; j--) {
            for (let k = m; k >= zero; k--) {
                dp[j][k] = Math.max(dp[j - one][k - zero] + 1, dp[j][k])
            }
        }
    }
    console.log(JSON.stringify(dp));
    return dp[n][m];
};

let strs = ["10", "0001", "111001", "1", "0"];
let x = findMaxForm(strs, 5, 3);
console.log(x);