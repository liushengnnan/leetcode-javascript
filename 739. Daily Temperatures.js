/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function (T) {
    let result = [];
    for (let i = 0; i < T.length; i++) {
        const cur = T[i];
        let tmp = 0;
        for (let j = i + 1; j < T.length; j++) {
            const val = T[j];
            if (val > cur) {
                tmp = j - i
                break;
            }
        }
        result.push(tmp)
    }
    return result;
};

/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function (T) {
    const stack = [];
    const ans = new Array(T.length);

    for (i = T.length - 1; i >= 0; i--) {
        while (stack.length && T[i] >= T[stack[stack.length - 1]]) {
            stack.pop()
        };
        ans[i] = !stack.length ? 0 : stack[stack.length - 1] - i;
        stack.push(i);
    }

    return ans;
}

let T = [73, 74, 75, 71, 69, 72, 76, 73];
let R = dailyTemperatures(T);
console.log(R);