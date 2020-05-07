/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
    let x = 0;
    let y = 0;
    for (let i = 0; i < s.length; i++) {
        const c = s.charAt(i);
        c == '(' ? x++ : x--; // * 都当作 ')' 处理, 
        c != ')' ? y++ : y--; // * 都当作 '(' 处理,
        if (y < 0) return false;  // ')' 太多， 
        if (x < 0) x = 0;  
    }
    return x == 0;
};