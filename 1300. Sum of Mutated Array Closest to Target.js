/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var findBestValue = function (arr, target) {
    let sortArr = arr.sort((a, b) => a - b)
    console.log(sortArr);
};

let arr = [4, 9, 3];
let x = findBestValue(arr, 10);