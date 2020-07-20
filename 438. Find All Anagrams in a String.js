/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
    if (p.length > s.length) return [];
    let base = 'a'.charCodeAt(0);

    var hash = new Array(26).fill(0);

    for (let j = 0; j < p.length; j++) {
        const idx = p[j].charCodeAt(0) - base;
        hash[idx]++;
    }

    let l = 0;
    let count = 0;
    let result = [];
    for (let r = 0; r < s.length; r++) {
        const rIndex = s[r].charCodeAt(0) - base;
        hash[rIndex]--;
        if (hash[rIndex] >= 0) { // 1 -> 0
            count++
        }

        if (r >= p.length) {
            const lIndex = s[l].charCodeAt(0) - base;
            hash[lIndex]++;
            if (hash[lIndex] >= 1) { // 0 -> 1
                count--
            }
            l++;
        }

        if (count == p.length) {
            result.push(l)
        }
    }
    return result;
};

let s = "cbaebabacd", p = "abc";
let x = findAnagrams(s, p);
console.log(x);