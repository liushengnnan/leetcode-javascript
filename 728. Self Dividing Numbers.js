/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    var selfDividingNumber = n => {
        let str = n + '';
        if (str.includes('0')) return false;
        for (let j = 0; j < str.length; j++) {
            const digit = parseInt(str.charAt(j));
            if (n % digit !== 0) return false;
        }
        return true;
    }
    let result = [];
    for (let i = left; i <= right; i++) {
        if (selfDividingNumber(i)) result.push(i);
    }
    return result;
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */

var selfDividingNumbers = function(left, right) {
    let _isSelfDevider = function (origNumber) {
        let number = origNumber;
        while(number > 0) {
            let curr = number % 10;
            if(curr === 0 || (origNumber % curr) !== 0) {
                return false;
            }
            number = Math.floor(number / 10);
        }
        return true;
    };
    
    var arr = [];
    for(let i = left; i <= right; i += 1) {
        if(i < 10 || _isSelfDevider(i)) arr.push(i);
    }
    return arr;
};