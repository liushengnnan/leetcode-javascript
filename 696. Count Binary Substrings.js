/**
 * @param {string} s
 * @return {number}
 */

const countBinarySubstrings = (s) => s.replace(/01/g, '0,1').replace(/10/g, '1,0').split(',')
    .reduce((res, a, i, arr) => i ? res + Math.min(a.length, arr[--i].length) : 0, 0);