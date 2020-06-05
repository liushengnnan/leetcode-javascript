/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var decodeAtIndex = function (S, K) {
    let i = 0, cnt = 0;
    while (cnt < K) {
        let tmp = S.charAt(i)
        cnt = isNaN(tmp) ? cnt + 1 : cnt * tmp;
        i++;
    }
    while (i--) {
        let tmp = S.charAt(i)
        if (!isNaN(tmp)) { // isNumber
            cnt /= tmp;
            K %= cnt;
        } else {
            if (K % cnt == 0) return tmp;
            cnt -= 1;
        }
    }
    return 'error'
};


let S = "leet2code3";
let x = decodeAtIndex(S, 10);
console.log(x);