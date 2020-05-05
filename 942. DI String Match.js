/**
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function(S) {
    let N = S.length + 1;
    let I = -1;
    let result = [];
    for (const char of S) {
        char == 'I' ? result.push(I++) : result.push(N--);
    }
    return result;
};