/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var licenseKeyFormatting = function (S, K) {
    let result = [];
    S = S.split('-').join('').toUpperCase()
    for (let i = 0; i < S.length; i++) {
        let j = S.length - i - 1;
        const e = S.charAt(j);
        result.push(e);
        if ((i + 1) % K == 0 && i != S.length - 1) {
            result.push('-');
        }
    }
    return result.reverse().join('');
};

let S = "2-5g-3-J", K = 1;
let x = licenseKeyFormatting(S, K);
console.log(x);
