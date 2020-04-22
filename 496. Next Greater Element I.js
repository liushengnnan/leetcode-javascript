/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    let map = {};
    for (let o = 0; o < nums2.length; o++) {
        const e = nums2[o];
        for (let i = o + 1; i < nums2.length; i++) {
            if (nums2[i] > e) {
                map[e] = nums2[i];
                break;
            }
        }
    }
    console.log(map);
    let result = [];
    for (let j = 0; j < nums1.length; j++) {
        result[j] = map[nums1[j]] || -1;
    }
    return result;
};

let nums1 = [2, 4];
let nums2 = [1, 2, 3, 4];
let x = nextGreaterElement(nums1, nums2);
console.log(x);