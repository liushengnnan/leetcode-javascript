/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
var repeatedStringMatch = function (A, B) {
    let count = Math.ceil(B.length / A.length);
    if (A.repeat(count).includes(B)) return count;
    if (A.repeat(count + 1).includes(B)) return count + 1;
    return -1;
};