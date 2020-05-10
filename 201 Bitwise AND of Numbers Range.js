// Leetcode #201
// Language: Javascript
// Problem: https://leetcode.com/problems/bitwise-and-of-numbers-range/
// Author: Chihung Yu
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
 
var rangeBitwiseAnd = function(m, n) {
    while(n > m){
        n = n & (n-1);
    }
    return m & n;
};

// last bit of (odd number & even number) is 0.
// when m != n, There is at least an odd number and an even number, so the last bit position result is 0.
// Move m and n rigth a position.
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd = function(m, n) {
    let c=0;
    while(m != n){
        m >>= 1;
        n >>= 1;
        c++;
    }
    return m << c
};

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd = function(m, n) {
    if (m === 0 || n / m > 2) return 0
 
    let res = m;
    
    for (i = m+1; i <= n; i++) {
        const j = n - i + m;
        if (j > i) {
            res = res & i & j;
        } else {
            res = res & i;
        }
    }
    
    return res;
};


/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd = function(m, n) {
    var andOperator = function(a,b){
        while (a < b){
            b -= b & -b;
        }
        return b;
    }
    return andOperator(m,n);
};

// 超时
var rangeBitwiseAnd = function(m, n) {
    let res = m;
    for (let i = m + 1; i <= n; i++) {
        res &= i;
    }
    return res;
};