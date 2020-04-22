/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function (S) {
    let stack = [];
    for (const char of S) {
        let peek = stack.length > 0 ? stack[stack.length - 1] : undefined;
        if (peek === char) {
            stack.pop();
        } else {
            stack.push(char);
        }
    }
    return stack.join('');
};