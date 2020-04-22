/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = (s, t = [], del = new Set(), stack = []) => {
    for (let i = 0; i < s.length; ++i) {
        if (s[i] == '(')
            stack.push(i);
        if (s[i] == ')') {
            if (stack.length == 0)
                del.add(i);
            else
                stack.pop();
        }
    }
    stack.forEach(i => del.add(i));
    for (let i = 0; i < s.length; ++i)
        if (!del.has(i))
            t.push(s[i]);
    return t.join('');
};

/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    let stack = [], arr = s.split("");
    for (i = 0; i < arr.length; i++) {
        if (arr[i] == '(') stack.push(i);      
        else if (arr[i] == ')') {
            if (stack.length == 0) arr[i] = "";
            else stack.pop();
        }
    }
    if (stack) stack.forEach(i => arr[i] = "");
    return arr.join("");
};