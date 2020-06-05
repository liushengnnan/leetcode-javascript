/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
    let x = longestCommonSubsequence(word1, word2);
    let result = word1.length + word2.length - x * 2;
    return result;
};

var longestCommonSubsequence = function (text1, text2) {
    let m = text1.length;
    let n = text2.length;
    let res = new Array(m + 1).fill(0);
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
    }
    return res[m];
};