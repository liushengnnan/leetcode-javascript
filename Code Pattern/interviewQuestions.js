
/**
 * @param {number} n // 递归出 1到100的和;
 * @return {number[]}
 */

function swap(arr, i, j) {
    //[arr[i],arr[j]] = [arr[j],arr[i]];
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

// var sum = function (n) {
//     if (n <= 1) return n;
//     return n + sum(n - 1);
// }
// let x = sum(100);
// console.log(x);

// var qsort = function (nums) {
//     var quick_sort = function (l, r) {
//         if (l >= r) return;
//         let i = l;
//         let j = r;
//         let pivot = nums[l];
//         while (i < j) {
//             while (nums[j] > pivot && i < j) {
//                 j--;
//             }
//             nums[i] = nums[j];
//             while (nums[i] <= pivot && i < j) {
//                 i++
//             }
//             nums[j] = nums[i]
//         }
//         nums[i] = pivot;
//         quick_sort(l, i - 1);
//         quick_sort(i + 1, r);
//     }
//     quick_sort(0, nums.length - 1);
//     return nums;
// }

// // first call to quick sort
// var items = [1, 3, 2, 3, 5, 6, 3, 4];
// var sortedArray = qsort(items);
// console.log(items); 

// var insert_sort = function (nums) {
//     for (let i = 1; i < nums.length; i++) {
//         for (let j = i; j > 0; j--) {
//             if (nums[j] < nums[j - 1]) {
//                 swap(nums, j, j - 1)
//             } else {
//                 break
//             }
//         }
//     }
// }

// var insert_sort = function (nums) {
//     for (let i = 1; i < nums.length; i++) {
//         for (let j = i; j > 0; j--) {
//             if (nums[j] < nums[j - 1]) {
//                 swap(nums, j, j - 1)
//             } else {
//                 break
//             }
//         }
//     }
// }


// function bubleSort(array) {
//     let len = array.length;
//     for (let i = 0; i < len; i++) {
//         for (let j = 0; j < len - 1 - i; j++) {
//             if (array[j] > arr[j + 1]) {
//                 swap(array, j, j + 1)
//             }
//         }
//     }
//     return array;
// }


var bubble_sort = function (nums) {
    let len = nums.length;
    for (let i = len - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (nums[j] > nums[j + 1]) {
                swap(nums, j, j + 1)
            }
        }
    }
}

var items = [1, 3, 2, 3, 5, 6, 3, 4];
var sortedArray = bubble_sort(items);
console.log(items); 