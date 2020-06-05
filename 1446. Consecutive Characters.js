/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function (s) {
    if (s.length <= 1) return s.length;
    let max = 1, tmp = 1;
    for (let i = 1; i < s.length; i++) {
        if (s.charAt(i - 1) == s.charAt(i)) {
            tmp++;
        } else {
            max = Math.max(max, tmp);
            tmp = 1
        }
    }
    return Math.max(max, tmp);
};