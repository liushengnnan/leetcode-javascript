/**
 * @param {number[]} A
 * @param {number} S
 * @return {number}
 */
var numSubarraysWithSum = function (A, S) {
    let l = 0;
    let sum = 0;
    let result = 0;
    for (let r = 0; r < A.length; r++) {
        sum += A[r];
        if (sum == S) {
            result++;
        }
        while (sum >= S) {
            l++
            sum -= A[l]
            if (sum == S) {
                result++;
            }
        }
    }
    return result;
};

// 1、slideWindow 正向思维
// i
// [0, 0, 0, 1, 1, 0, 0]
//                     j
// 4 * 3 = 12



// 方法二：前缀和

// 设数组 P 为数组 A 的前缀和，即：

// P[i] = A[0] + A[1] + ... + A[i - 1]

// 这样就可以通过 P[j + 1] - P[i] = A[i] + A[i + 1] + ... + A[j] 快速计算出 A[i..j] 的和。

// 我们可以对数组 P 进行一次线性扫描，当扫描到 P[j] 时，
// 我们需要得到的是满足 P[j] = P[i] + S 且 i < j 的 i 的数目，使用计数器（map 或 dict）可以满足要求。


var numSubarraysWithSum = function (A, S) {
    let P = new Array(A.length + 1).fill(0)
    for (let i = 0; i < A.length; i++) {
        P[i + 1] =  P[i] + A[i];
    }
    console.log(...P);
    let result = 0;
    let count = new Array(A.length + 1).fill(0)
    count[0] = 1;
    for (let i = 1; i < P.length; i++) {
        const psum = P[i];
        if (psum >= S) {
            result += count[psum - S];
        }
        count[psum]++;
    }
    return result;
};


/**
 * @param {number[]} A
 * @param {number} S
 * @return {number}
 */
var numSubarraysWithSum = function(A, S) {
    const m = new Array(A.length + 1).fill(0)
    m[0] = 1
    let sum = 0
    let res = 0
    for (let i = 0; i < A.length; i++) {
        sum += A[i]
        if (sum - S >= 0) {
            res += m[sum - S]  // P[j] = P[i] + S 且 i < j 的 i 的数目
        }
        m[sum]++
    }
    console.log(...m);
    return res
};

let A = [1, 0, 1, 0, 1], S = 2;
let x = numSubarraysWithSum(A, S);
console.log(x);