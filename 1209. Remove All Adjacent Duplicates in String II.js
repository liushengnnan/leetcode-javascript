/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function (s, k) {
    const stack = []

    for (const char of s) {
        if (!stack.length)
            stack.push([char, 1])
        else if (stack[stack.length - 1][0] != char)
            stack.push([char, 1])
        else if (stack[stack.length - 1][1] < k - 1)
            stack[stack.length - 1][1] += 1
        else
            stack.pop()
    }

    const ans = stack.reduce((result, [char, cnt]) => {
        result += char.repeat(cnt)
        return result;
    }, '');

    return ans;
}


const removeDuplicates = (s, k) => {
    let count = 1, start = 0

    for (let i = 1; i < s.length; i++) {
        if (s[i - 1] !== s[i]) [count, start] = [0, i]
        if (++count === k) return removeDuplicates(s.substring(0, start) + s.substring(start + count), k)
    }

    return s
}