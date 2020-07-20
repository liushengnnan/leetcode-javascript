/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function (s) {
    let i = s.length - 1;
    let arr = [];
    while (i >= 0) {
        ;
        let num
        if (s.charAt(i) == '#') {
            let tmp = s[i - 2] + s[i - 1]
            num = parseInt(tmp)
            i -= 3;
        } else {
            num = parseInt(s[i])
            i -= 1;
        }
        arr.push(String.fromCharCode(96 + num))
    }
    return arr.reverse().join('');
};

/**
 * @param {string} s
 * @return {string}
 */
const freqAlphabets = s => {
    for (let i = 26; 0 < i; i--)
        s = s.replace(
            new RegExp(`${i}${9 < i ? '#' : ''}`, 'g'),
            String.fromCharCode(96 + i),
        );
    return s;
};

let s = "10#11#12";
let x = freqAlphabets(s);
console.log(x);