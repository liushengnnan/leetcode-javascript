/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
    let arr1 = num1.split('');
    let arr2 = num2.split('');
    let result = [];
    let carry = 0;
    while (arr1.length > 0 || arr2.length > 0 || carry == 1) {
        let bit1 = arr1.length > 0 ? arr1.pop() : 0;
        let bit2 = arr2.length > 0 ? arr2.pop() : 0;
        let bit = parseInt(bit1) + parseInt(bit2) + carry;
        carry = bit > 9 ? 1 : 0;
        let num = bit > 9 ? bit - 10 : bit;
        console.log(bit1, bit2, carry, bit, num);
        result.unshift(num);
    }
    return result.join('');
};

var addStrings = (num1, num2) => {
    sum = '';
    len1 = num1.length;
    len2 = num2.length;
    carry = 0;

    while (len1 > 0 || len2 > 0 || carry) {
        num1Digit = +num1.charAt(len1 - 1);
        num2Digit = +num2.charAt(len2 - 1);
        len1--;
        len2--;

        digitTotal = num1Digit + num2Digit + carry;
        carry = Math.floor(digitTotal / 10);
        digitToAppend = digitTotal % 10;
        sum = digitToAppend + sum;
        console.log(num1Digit, num2Digit, carry, digitTotal, sum);
    }

    return sum;
};

let x = addStrings('1234', '9898975');
console.log(x);