/**
 * @param {string[]} words
 * @return {string[]}
 */
const LETTER_TO_ROW = {
    q: 0, w: 0, e: 0, r: 0, t: 0, y: 0, u: 0, i: 0, o: 0, p: 0,
    a: 1, s: 1, d: 1, f: 1, g: 1, h: 1, j: 1, k: 1, l: 1,
    z: 2, x: 2, c: 2, v: 2, b: 2, n: 2, m: 2
};

var findWords = function (words) {
    return words.filter(word => {
        let isSameRow = true;
        let row = LETTER_TO_ROW[word[0].toLowerCase()];
        for (let i = 1; i < word.length; i++) {
            if (LETTER_TO_ROW[word[i].toLowerCase()] !== row) {
                isSameRow = false;
                break;
            }
        }
        return isSameRow;
    });
};


var findWords = function (words) {
    return words.filter(w => /^([qwertyuiop]+|[asdfghjkl]+|[zxcvbnm]+)$/i.test(w));
};