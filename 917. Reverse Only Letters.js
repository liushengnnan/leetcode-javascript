/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function (S) {
    let arr = S.split('');
    let l = 0;
    let r = arr.length - 1;
    var isChar = char => {
        return /[a-zA-Z]/.test(char);
    }
    while (l < r) {
        if (isChar(arr[l]) && isChar(arr[r])) {
            [arr[l], arr[r]] = [arr[r], arr[l]];
            l++;
            r--;
        } else if (!isChar(arr[l])) {
            l++
        } else if (!isChar(arr[r])) {
            r--;
        } else {
            l++;
            r--;
        }
    }
    return arr.join('');
};

let str = "a-bC-dEf-ghIj";
let x = reverseOnlyLetters(str);
console.log(x);