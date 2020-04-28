/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    let i = 0;
    let j = 0;
    while (i < s.length && j < t.length) {
        console.log(i, j);
        if (s.charAt(i) === t.charAt(j)) {
            i++;
            j++;
        } else {
            j++;
        }
    }
    console.log(i, j);
    return i >= s.length;
};

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    if (s.length === 0) return true;

    let sIndex = 0;

    for (let char of t) {
        if (char === s[sIndex]) {
            if (sIndex === s.length - 1) {
                return true;
            } else {
                sIndex++;
            }
        }
    }

    return false;
};

let s = "abc", t = "ahbgdc";
let x = isSubsequence(s, t);
console.log(x);