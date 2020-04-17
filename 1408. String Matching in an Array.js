/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function (words) {
    return words.filter((elem, i) => words.some((word, wordIndex) => i !== wordIndex && word.includes(elem)));
};

