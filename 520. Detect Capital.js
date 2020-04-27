/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    re1 = /\b[A-Z]{1}([a-z]+||[A-Z]+)\b/;
    re2 = /\b[a-z]+\b/;
    if(re1.test(word)||re2.test(word)){
    	return true;
    }else{
    	return false;
    }
};

var detectCapitalUse = function(word) {
    return word === word.toUpperCase() || word === word[0] + word.substr(1).toLowerCase();
};

/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    const re = /^[A-Z][a-z]$|^[A-Z]+[A-Z]$|^[A-Z][a-z]+[a-z]$|^[a-z]+[a-z]$/;
    if (word.length < 2) {
        return true;
    } else if (!word.match(re)) {
        return false;
    }
    return true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = w => /(^[A-Z]?[a-z]*$)|(^[A-Z]+$)/.test(w);