/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    let left = 0;
    let right = Math.floor(Math.sqrt(c));
    while(left <= right) {
        let x = left * left + right * right;
        if (x == c) return true
        if (x > c) {right--}
        else {left++}
    }
    return false;
};


/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    for(var i=Math.floor(Math.sqrt(c));i>=0;i--){
        if(Number.isInteger(Math.sqrt(c-i*i)))
            return true        
    }
    return false
};