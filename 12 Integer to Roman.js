// Leetcode 12
// Language: Javascript
// Problem: https://leetcode.com/problems/integer-to-roman/
// Author: Chihung Yu
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    var dict = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    var val = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var result = "";

    for (var i = 0; i < val.length; i++) {
        var v = val[i];

        if (num >= v) {
            var count = parseInt(num / v);
            num %= v;

            for (var j = 0; j < count; j++) {
                result = result + dict[i];
            }
        }
    }

    return result;
};

var intToRoman = function (num) {
    var dict = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    var val = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var result = "";

    function findIndex(num) {
        for (let index = 0; index < val.length; index++) {
            if (num >= val[index]) { return index; }
        }
        return -1;
    }

    while (num > 0) {
        let i = findIndex(num);
        result += dict[i];
        num -= val[i];
    }

    return result;
};

var intToRoman = function (num) {
    var dict = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    var val = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var result = "";
    var preIndex = 0;
    function findIndex(num, startIndex) {
        for (let index = startIndex; index < val.length; index++) {
            if (num >= val[index]) { return index; }
        }
    }

    while (num > 0) {
        let i = findIndex(num, preIndex);
        result += dict[i];
        num -= val[i];
        preIndex = i;
    }

    return result;
};

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    let res = "";
    while (num > 0) {
        if (num >= 1000) {
            num -= 1000;
            res += 'M';
        } else if (num >= 900) {
            num -= 900;
            res += 'CM';
        } else if (num >= 500) {
            num -= 500;
            res += 'D';
        } else if (num >= 400) {
            num -= 400;
            res += 'CD';
        } else if (num >= 100) {
            num -= 100;
            res += 'C';
        } else if (num >= 90) {
            num -= 90;
            res += 'XC';
        } else if (num >= 50) {
            num -= 50;
            res += 'L';
        } else if (num >= 40) {
            num -= 40;
            res += 'XL';
        } else if (num >= 10) {
            num -= 10;
            res += 'X';
        } else if (num >= 9) {
            num -= 9;
            res += 'IX';
        } else if (num >= 5) {
            num -= 5;
            res += 'V';
        } else if (num >= 4) {
            num -= 4;
            res += 'IV';
        } else {
            num -= 1;
            res += 'I';
        }
    }
    return res;
};