/**
 * @param {string} s
 * @return {number}
 */
var numSub = function (s) {
    let mod = 1000000007;
    let result = 0;
    let cnt = 0;
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) === '1') {
            cnt++;
            result += cnt;
            result %= mod;
        } else {
            cnt = 0;
        }
    }
    return result;
};

let s = "0110111";
let x = numSub(s);
console.log(x);