/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    function isVowel(e) {
        let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
        // 1
        return vowel.indexOf(s[i]) < 0
        // return vowels.includes(e); // 2 
        // 3
        // for (let index = 0; index < vowels.length; index++) {  
        //     if (vowels[index] == e) { return true }
        // }
        // return false;
    }
    let arr = s.split('');
    console.log(arr);
    let l = 0;
    let r = arr.length - 1;
    while (l < r) {
        while (!isVowel(arr[r]) && l < r) {
            r--;
        }
        while (!isVowel(arr[l]) && l < r) {
            l++;
        }
        [arr[r], arr[l]] = [arr[l], arr[r]];
        r--;
        l++;
    }
    return arr.join('');
};


/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    let vowels = { a: true, e: true, i: true, o: true, u: true }
    const isVowel = e => vowels[e.toLowerCase()];
    let left = 0;
    let right = s.length - 1
    let sArray = s.split('')
    while (left < right) {
        if (isVowel(sArray[left]) && isVowel(sArray[right])) {
            //swap them
            let temp = sArray[left]
            sArray[left] = sArray[right]
            sArray[right] = temp
            right--
            left++
        } else if (isVowel(sArray[left])) {
            //move right down 
            right--
        } else if (isVowel(sArray[right])) {
            left++
        } else {
            right--
            left++
        }
    }
    return sArray.join("")
};

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    if (s.length < 2) return s
    s = s.split('')

    //create vovels dict
    let vovDict = {
        'a': true,
        'e': true,
        'o': true,
        'u': true,
        'i': true,
        'A': true,
        'E': true,
        'O': true,
        'U': true,
        'I': true
    }

    //create array of vovels what are contained in string
    let vovArr = [];
    for (let i = 0; i < s.length; i++) {
        if (vovDict.hasOwnProperty(s[i])) {
            vovArr.push(s[i]);
        }
    }

    //change vovels in the string
    for (let i = 0; i < s.length; i++) {
        if (vovDict.hasOwnProperty(s[i])) {
            s[i] = vovArr.pop()
        }
    }

    return s.join('');
};


/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels_1 = function (s) {
    let match = s.match(/[aeiou]/gi);
    console.log(match);
    if (match === null) return s;
    let matchRev = match.reverse();
    console.log(matchRev);
    let res = s.replace(/[aeiou]/gi, vowel => matchRev.shift())
    return res;
};

let x = reverseVowels_1('leetcode');
console.log(x);