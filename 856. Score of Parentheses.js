/**
 * @param {string} S
 * @return {number}
 */
var scoreOfParentheses = function (S) {
    let stack = [];
    let cur = 0;
    for (let char of S) {
        if (char === '(') {
            stack.push(cur)
            cur = 0;
        } else {
            cur = stack.pop() + Math.max(cur * 2, 1);
        }
    }
    return cur;
};


/**
 * @param {string} S
 * @return {number}
 */
const scoreOfParentheses = (S) => {
    let l = 0, c = 0, last;
    for (const ch of S) {
        if (ch === '(') {
            l++;
        } else {
            l--;
            if (last === '(') {
                c += 1 << l;
            }
        }
        last = ch;
    }
    return c;
};