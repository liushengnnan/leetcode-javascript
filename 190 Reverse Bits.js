// Leetcode #190
// Language: Javascript
// Problem: https://leetcode.com/problems/reverse-bits/
// Author: Chihung Yu
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    var result =  0;
    for(var i = 0; i < 31; i++){
        result <<= 1;
        result |= n & 1;
        n >>>= 1;
    }
    return result;
};

console.log(reverseBits(22342342342));


var reverseBits = function(n) {
    var result = 0;
    var count = 32;
  
    while (count--) {
      result *= 2;
      result += n & 1;
      n = n >> 1;
    }
    return result;
  };