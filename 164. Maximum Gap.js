/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function (nums) {
    let min = Math.min(...nums);
    let max = Math.max(...nums);
    console.log(min, max);
    let min_gap = Math.ceil((max - min) / (nums.length - 1));
    let numofbucket = Math.ceil((max - min) / min_gap);
    let bucketBottoms = (Infinity).repeat(numofbucket);
    console.log(min_gap);
    console.log(...bucketBottoms);

    for (let i = 0; i < nums.length; i++) {
        const val = array[i];
        let index = Math.floor((val - min) / numofbucket);

    }

};

let nums = [3, 6, 9, 100, 7, 80];
let gap = maximumGap(nums)