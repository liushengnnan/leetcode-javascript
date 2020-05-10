/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false;
    let z = x;
    let y = 0;
    while (z > 0) {
        // console.log(z);
        let t = z % 10;
        z = (z - t) / 10;
        y = y * 10 + t;
        // console.log(y);
    }
    return x == y;
};

let num = 121;
let x = isPalindrome(num);