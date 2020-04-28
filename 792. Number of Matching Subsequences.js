/**
 * @param {string} S
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function (S, words) {
    let count = 0;
    var isSubsequence = function (s, t) {
        let i = 0;
        let j = 0;
        while (i < s.length && j < t.length) {
            if (s.charAt(i) === t.charAt(j)) {
                i++;
                j++;
            } else {
                j++;
            }
        }
        return i >= s.length;
    };
    for (const word of words) {
        if (isSubsequence(word, S)) count++;
    }
    return count;
};


/**
 * @param {string} S
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function (S, words) {
    let count = 0
    words.forEach(word => {
        let prevIdx = -1
        for (let i = 0; i < word.length; i++) {
            let letter = word[i]
            let idx = S.indexOf(letter, prevIdx + 1)
            if (idx > prevIdx) prevIdx = idx
            else return
        }
        count++
    })
    return count
}