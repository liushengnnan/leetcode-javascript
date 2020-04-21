/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(s) {
    let sarr = [];
    let solution = '';
    for (let char of s) {
        if (char === '(') {
            sarr.push(solution);
            solution = ''
        } else if (char === ')') {
            solution = sarr.pop() + solution.split('').reverse().join('');
        } else {
            solution += char;
        }
    }
    return solution;
};

let s = "a(bc(mon)p)q(liw)";
let x = reverseParentheses(s);
console.log(x);