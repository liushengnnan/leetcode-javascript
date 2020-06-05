// Leetcode 118
// Language: Javascript
// Problem: https://leetcode.com/problems/pascals-triangle/
// Author: Chihung Yu
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    var result = [];

    if (numRows <= 0) {
        return result;
    }

    for (var i = 0; i < numRows; i++) {
        var cur = [];
        var pre = i > 0 ? result[i - 1] : [];

        for (var j = 0; j <= i; j++) {
            if (j === 0) {
                cur.push(1);
            } else if (j === i) {
                cur.push(1);
            } else {
                cur.push(pre[j] + pre[j - 1]);
            }
        }

        result.push(cur);
    }

    return result;
};

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let res = [];
    
    for (let i = 0; i < numRows; i++) {
        let currArr = [];
        for (let j = 0; j <= i; j++) {
            if (j === 0 || j === i) {
                currArr.push(1);
            } else {
                currArr.push(res[i-1][j-1] + res[i-1][j]);
            }
        }
        res.push(currArr);
    }
    
    return res;
};