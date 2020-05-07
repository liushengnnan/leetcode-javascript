/**
 * @param {string[]} strs
 * @return {string[]}
 */
var anagrams = function (strs) {
    var result = [];
    var hash = {};
    var keyList = {};

    for (var i = 0; i < strs.length; i++) {
        var str = strs[i];
        var key = getKey(str);

        if (hash[key]) {
            keyList[key] = true;
        } else {
            hash[key] = [];
        }

        hash[key].push(str);
    }

    for (i in keyList) {
        result = result.concat(hash[i]);
    }

    return result;
};

var getKey = function (str) {
    var key = ""
    var arr = [];
    for (var i = 0; i < str.length; i++) {
        var val = str.charCodeAt(i) - 'a'.charCodeAt(0);
        arr[val] = arr[val] || 0;
        arr[val]++;
    }

    return arr.join('_');
}


/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let map = new Map();
    var getKey = (str) => {
        return str.split('').sort().join('')
    }
    for (let i = 0; i < strs.length; i++) {
        const str = strs[i];
        let key = getKey(str);
        if (map.has(key)) {
            map.get(key).push(str);
        } else {
            map.set(key, [str]);
        }
    }

    return Array.from(map.values());
};


const primes = [
    2, 3, 5, 7, 11, 13,
    17, 19, 23, 29, 31, 37,
    41, 43, 47, 53, 59, 61,
    67, 71, 73, 79, 83, 89,
    97, 101
];


var groupAnagrams = function (strs) {
    const result = new Map();

    function getKey(str) {
        let key = 1;
        for (let i = 0; i < str.length; ++i) {
            key *= primes[str.charCodeAt(i) - 97];
        }
        return key;
    }

    for (let i = strs.length - 1; i >= 0; --i) {
        const w = strs[i];
        let key = getKey(w);

        if (result.has(key)) {
            result.get(key).push(w);
        } else {
            result.set(key, [w]);
        }

    }

    console.log(...result);
    return [...result.values()];
};

let Input = ["eat", "tea", "tan", "ate", "nat", "bat"];
let x = groupAnagrams(Input);
// console.log(...x);