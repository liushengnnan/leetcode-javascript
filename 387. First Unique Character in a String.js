/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    var map = new Map();
    for (i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            map.set(s[i], 2);
        }
        else {
            map.set(s[i], 1);
        }
    }

    for (i = 0; i < s.length; i++) {
        if (map.has(s[i]) && map.get(s[i]) === 1) {
            return i;
        }
    }
    return -1;
};


/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (s.indexOf(char) == i && s.indexOf(char, i + 1) == -1) {
            return i
        }
    }

    return -1;
};

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    let count = new Array(26).fill(0);
    let n = s.length;

    for (let i = 0; i < n; i++) {
        let index = s.charCodeAt(i) - "a".charCodeAt(0);
        count[index]++;
    }

    // find the index
    for (let i = 0; i < n; i++) {
        let index = s.charCodeAt(i) - "a".charCodeAt(0);
        if (count[index] == 1) {
            return i;
        }

    }
    return -1;
}