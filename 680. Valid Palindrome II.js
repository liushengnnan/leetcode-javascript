/**
 * @param {string} s
 * @return {boolean}
 */

// charAt(position)
// charCodeAt(position)
var validPalindrome = function (s) {
    let l = -1;
    let r = s.length;
    while (++l < --r) {
        console.log(l, r);
        if (s.charAt(l) != s.charAt(r)) {
            return isPalindromic(s, l, r + 1) || isPalindromic(s, l - 1, r);
        }
    }
    return true;
};

var isPalindromic = function (s, l, r) {
    console.log('lll',l, r);
    while (l < r) {
        console.log(l, r);
        if (s.charAt(l) != s.charAt(r)) return false;
        l++;
        r--;
    }
    return true;
}

let x = validPalindrome('naaabkbcaaan');
console.log(x);