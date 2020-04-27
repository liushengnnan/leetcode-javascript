/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var findLUSlength = function (a, b) {
    // identical strings don't have uncommon subsequence
    if (a === b) return -1;
    // the longer string itself is the longest uncommon subsequence
    else return Math.max(a.length, b.length);
};