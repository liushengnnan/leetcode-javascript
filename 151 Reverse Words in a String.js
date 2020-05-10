// Leetcode #151
// Language: Javascript
// Problem: https://leetcode.com/problems/reverse-words-in-a-string/
// Author: Chihung Yu
/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function(str) {
    return str.split(' ').reverse().join(' ').replace(/^\s+|\s+$/g,'').replace(/\s+/g, ' ');
};

const reverseWords = s => s.trim().split(/\s+/).reverse().join(' ');

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let arr = s.split(' ');
    let brr = arr.filter(val => val != '');
    let crr = brr.reverse().join(' ');
    return crr;
};

let Input = "  hello world!  ";
let x = reverseWords(Input);
console.log(x);