/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */

//dp[i][j] is the length of longest common subarray ending with nums[i] and nums[j]

var findLength = function (A, B) {
    if (A.length < 0 || B.length < 0) return 0;
    let m = A.length;
    let n = B.length;
    let max = 0;

    let dp = [];
    for (let i = 0; i <= m; i++) {
        dp[i] = [];
        for (let j = 0; j <= n; j++) {
            dp[i][j] = 0;
        }
    }

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (A[i - 1] == B[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
                max = Math.max(max, dp[i][j]);
            }
        }
    }
    return max;
};

let A = [1, 2, 3, 2, 1];
let B = [3, 2, 1, 4, 7];
let x = findLength(A, B);
console.log(x);

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function (A, B) {
    const m = A.length;
    const n = B.length;
    let max = 0;
    let dp = new Array(n + 1).fill(0);
    for (let i = 1; i <= m; i++) {
        const next = new Array(n + 1).fill(0);
        for (let j = 1; j <= n; j++) {
            next[j] = A[i - 1] === B[j - 1] ? dp[j - 1] + 1 : 0;
            max = Math.max(max, next[j]);
        }
        dp = next;
    }
    return max;
};