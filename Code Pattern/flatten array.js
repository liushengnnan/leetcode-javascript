/**
 * @param {[]} arr
 * @return {[]} 
 */

// helper:  Array.isArray(value)
var flatten_array = function (arr) {
    let res = [];
    var helper = array => {
        for (let i = 0; i < array.length; i++) {
            const e = array[i];
            if (Array.isArray(e)) {
                helper(e);
            } else {
                res.push(e);
            }
        }
    }
    helper(arr);
    return res;
}

let input = [[4, 5, [6, 9]], 3, 2, 1, [7, 8]];
let x = flatten_array(input);
console.log(...x);