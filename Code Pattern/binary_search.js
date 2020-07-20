// /**
//  * @param {number[]} nums
//  * @return {number} 
//  */
// var binary_search = function(nums, k) { 
//     let left = 0, right = nums.length - 1;
//     while (left <= right) {
//         console.log('left = ' + left + ' right = ' + right);
//         let mindle = left + Math.floor((right - left) / 2)
//         if (nums[mindle] === k) {
//             return mindle;
//         } else if (nums[mindle] > k) {
//             right = mindle - 1;
//         } else {
//             left = mindle + 1;
//         }
//     }
//     return -1;
// }

// // let result = binary_search([1,2,3,4,5,6,7,8,9,11,13], 10);
// // console.log('result = ' + result);



// var reverseInt = function(num) { 
//     if (num < 0) return 0;
//     let tmp = num;
//     let result = 0;
//     while(tmp > 0) {
//         let bit = tmp % 10;
//         tmp = parseInt(tmp / 10);
//         result = result * 10 + bit;
//     }
//     return result;
// }


// var reverseString = function(str) { 
//     let arr = str.split(' ');
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         const tmp = arr[i];
//         if (tmp.length > 1) {
//             result.push(tmp.split('').reverse().join(''));
//         } else {
//             result.push(tmp);
//         }
//     }
//     return result.join(' ');
// }

// let str = 'This is a  cat.';
// let x = reverseString(str);
// console.log(x);

var printTriangle = function (n) {
    let m = n * 2 - 1;
    let l = n - 1;
    let r = n - 1;
    let row = [];
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (j == l || j == r || i == n - 1) {
                row.push("*");
            } else {
                row.push(" ");
            }
        }
        l -= 1;
        r += 1;
        console.log(...row);
        row = [];
    }
}

let x = printTriangle(4);