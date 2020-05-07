/**
 * @param {string} s
 * @return {string}
 */
const process = s => {
    const res = [];
    for (x of s.split('')) {
        x === '#' ? res.pop() : res.push(x);
    }
    return res.join('')
}
/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = (S, T) => process(S) == process(T);


/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function (S, T) {
    let i = S.length - 1;
    let j = T.length - 1;
    while (true) {
        let back = 0;
        while (i >= 0 && (back > 0 || S.charAt(i) == '#')) {
            back += S.charAt(i) == '#' ? 1 : -1;
            i--;
        }
        back = 0;
        while (j >= 0 && (back > 0 || T.charAt(j) == '#')) {
            back += T.charAt(j) == '#' ? 1 : -1;
            j--;
        }
        if (i >= 0 && j >= 0 && S.charAt(i) == T.charAt(j)) {
            i--;
            j--;
        } else {
            break;
        }
    }
    return i == -1 && j == -1;
};