/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function (licensePlate, words) {
    let x = licensePlate.toLowerCase();
    let map = {}
    for (let i = 0; i < x.length; i++) {
        const charCode = x.charCodeAt(i);
        if (charCode >= 97 && charCode <= 123) {
            if (map[charCode]) {
                map[charCode] += 1
            } else {
                map[charCode] = 1
            }
        }
    }
    console.log(map);
    let result = "aaaaa aaaaa aaaaa";
    for (let j = 0; j < words.length; j++) {
        const word = words[j];
        if( word.length > result.length) {
            continue;
        }
        let tmpMap = {}
        for (let i = 0; i < word.length; i++) {
            const charCode = word.charCodeAt(i);
            if (map[charCode]) {
                if (tmpMap[charCode]) {
                    tmpMap[charCode] += 1
                } else {
                    tmpMap[charCode] = 1
                }
            }
        }
        if (isMatch(map, tmpMap) && word.length < result.length) {
            result = word;
        }
    }
    return result;
};

var isMatch = function (map1, map2) {
    let keys1 = Object.keys(map1)
    let keys2 = Object.keys(map2)
    if (keys2.length != keys1.length) return false
    for (let i = 0; i < keys1.length; i++) {
        if (map1[keys1[i]] > map2[keys1[i]]) {
            return false;
        }
    }
    return true;
}

let licensePlate = "1s3 PSt", words = ["step", "steps", "stripe", "stepple"];
let x = shortestCompletingWord(licensePlate, words);
console.log(x);


/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function (s, words) {
    let letters = [];
    for (let n = 0; n < s.length; n++) {
        const chr = s[n].toLowerCase();
        if (chr >= 'a' && chr <= 'z') {
            letters.push(chr);
        }
    }
    letters.sort();

    let res = '';
    for (let word of words) {
        if (word.length < letters.length)
            continue;

        let s = 0;
        for (let c = 0; c < letters.length; c++) {
            s = word.indexOf(letters[c], s);
            if (s == -1) {
                break;
            } else if (c == letters.length - 1) {
                if (!res || word.length < res.length)
                    res = word;
            }

            if (letters[c] == letters[c + 1])
                s++;
            else
                s = 0;
        }
    }

    return res;
};