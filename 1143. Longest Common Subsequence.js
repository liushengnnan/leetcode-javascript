/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
    let m = text1.length;
    let n = text2.length;
    let res = new Array(m + 1).fill(0);
    console.log(...res);
    for (let j = 0; j < n; j++) {
        let tmp = new Array(m + 1).fill(0);
        for (let i = 0; i < m; i++) {
            let char1 = text1.charAt(i);
            let char2 = text2.charAt(j);
            let max = Math.max(tmp[i], res[i + 1])
            if (char1 === char2) {
                tmp[i + 1] = res[i] + 1
            } else {
                tmp[i + 1] = max
            }
        }
        res = tmp;
        console.log(...res);
    }
    return res[m];
};

// let text1 = "abcde", text2 = "ace";
let text1 = "bbm";
let text2 = "mb";
let x = longestCommonSubsequence(text1, text2);