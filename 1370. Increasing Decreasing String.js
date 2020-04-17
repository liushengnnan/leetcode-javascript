/**
 * @param {string} s
 * @return {string}
 */
var sortString = function(s) {
    let arr = new Array(26).fill(0);
    for (let index = 0; index < s.length; index++) {
        const e = s.charCodeAt(index);
        arr[e - 97] += 1;
    }
    console.log(arr);
    let res = [];
    while(res.length < s.length) {
        for (let i = 0; i < 26; i++) {
            if (arr[i] !==0) {
                res.push(String.fromCharCode(i+97));
                arr[i] -= 1;
            }
        }
        for (let i = 25; i >= 0; i--) {
            if (arr[i] !==0) {
                res.push(String.fromCharCode(i+97));
                arr[i] -= 1;
            }
        }
    }
    return res.join('');
};

let x = sortString('aaaaccccbbbb');
console.log(x);
