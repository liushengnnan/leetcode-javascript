/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */

// 桶排序
var relativeSortArray = function (arr1, arr2) {
    let bucket = new Array(1001).fill(0);
    arr1.forEach(val => {
        bucket[val] += 1;
    });
    console.log(bucket);
    let j = 0;
    for (let i = 0; i < arr2.length; i++) {
        const v2 = arr2[i];
        for (let n = 0; n < bucket[v2]; n++) {
            arr1[j] = v2;
            j++;
        }
        bucket[v2] = 0
    }
    console.log(arr1);
    for (let i = 0; i < bucket.length; i++) {
        const buVal = bucket[i];
        if (buVal != 0) {
            for (let n = 0; n < buVal; n++) {
                arr1[j] = i;
                j++;
            }
        }
    }
    console.log(arr1);
};


let arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], arr2 = [2, 1, 4, 3, 9, 6];
let x = relativeSortArray(arr1, arr2);
console.log(x);