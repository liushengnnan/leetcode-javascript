// Leetcode 119
// Language: Javascript
// Problem: https://leetcode.com/problems/pascals-triangle-ii/
// Author: Chihung Yu
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    if(rowIndex === null || rowIndex < 0){
        return [];
    }
    
    var result = [1];
    
    for(var i = 1; i <= rowIndex; i++){
        var cur = [];
        
        for(var j = 0; j <= i; j++){
            cur[j] = (result[j - 1] || 0) + (result[j] || 0);
        }

        result = cur;
    }
    
    return result;
};


var getRow = function(numRows) {
    let res = [1];
    
    for (let i = 0; i <= numRows; i++) {
        let currArr = [];
        for (let j = 0; j <= i; j++) {
            if (j === 0 || j === i) {
                currArr.push(1);
            } else {
                currArr.push(res[j-1] + res[j]);
            }
        }
        res = currArr;
    }
    
    return res;
};