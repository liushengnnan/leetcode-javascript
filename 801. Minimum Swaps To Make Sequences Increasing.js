

// class Solution {
//     public int minSwap(int[] A, int[] B) {
//         int swapRecord = 1, fixRecord = 0;
//         for (int i = 1; i < A.length; i++) {
//             if (A[i - 1] >= B[i] || B[i - 1] >= A[i]) {
// 		// In this case, the ith manipulation should be same as the i-1th manipulation
//                 // fixRecord = fixRecord;
//                 swapRecord++;
//             } else if (A[i - 1] >= A[i] || B[i - 1] >= B[i]) {
// 		// In this case, the ith manipulation should be the opposite of the i-1th manipulation
//                 int temp = swapRecord;
//                 swapRecord = fixRecord + 1;
//                 fixRecord = temp;
//             } else {
//                 // Either swap or fix is OK. Let's keep the minimum one
//                 int min = Math.min(swapRecord, fixRecord);
//                 swapRecord = min + 1;
//                 fixRecord = min;
//             }
//         }
//         return Math.min(swapRecord, fixRecord);
//     }
// }

// swapRecord means for the ith element in A and B, the minimum swaps if we swap A[i] and B[i]
// fixRecord means for the ith element in A and B, the minimum swaps if we DONOT swap A[i] and B[i]
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var minSwap = function (A, B) {
    let swapRecord = 1, fixRecord = 0;
    for (let i = 1; i < A.length; i++) {
        if (A[i - 1] >= B[i] || B[i - 1] >= A[i]) {
            // In this case, the ith manipulation should be same as the i-1th manipulation
            // fixRecord = fixRecord;
            swapRecord++;
        } else if (A[i - 1] >= A[i] || B[i - 1] >= B[i]) {
            // In this case, the ith manipulation should be the opposite of the i-1th manipulation
            let temp = swapRecord;
            swapRecord = fixRecord + 1;
            fixRecord = temp;
        } else {
            // Either swap or fix is OK. Let's keep the minimum one
            let min = Math.min(swapRecord, fixRecord);
            swapRecord = min + 1;
            fixRecord = min;
        }
    }
    return Math.min(swapRecord, fixRecord);
};

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var minSwap = function (A, B) {

    let swap = 1; // min swap if the current index is swapped
    let stay = 0; // min swap if the current index stays 

    for (let i = 1; i < A.length; i++) {
        if (A[i - 1] >= A[i] || B[i - 1] >= B[i]) {
            // if previously stay, then current index should be swapped (swap = stay + 1)
            // if previously swap, then current index should stay (stay = swap)
            swap = swap + stay;
            stay = swap - stay;
            swap = swap - stay + 1;
        } else if (A[i - 1] >= B[i] || B[i - 1] >= A[i]) {
            // if can't be swapped, then swap if the previous index is swapped, and stay if previous index is not
            swap++;
        } else {
            // if can go either way, then look for the minimum swap, and add accordingly
            let currMin = Math.min(swap, stay);
            swap = currMin + 1;
            stay = currMin;
        };
    }

    return Math.min(swap, stay);
};


/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var minSwap = function (A, B) {
    let n1 = 0, s1 = 1;
    for (let i = 1; i < A.length; i++) {
        let n2 = Number.MAX_VALUE, s2 = Number.MAX_VALUE;
        if (A[i - 1] < A[i] && B[i - 1] < B[i]) {
            n2 = Math.min(n2, n1);
            s2 = Math.min(s2, s1 + 1);
        }
        if (A[i - 1] < B[i] && B[i - 1] < A[i]) {
            n2 = Math.min(n2, s1);
            s2 = Math.min(s2, n1 + 1);
        }
        n1 = n2;
        s1 = s2;
    }
    return Math.min(n1, s1)
};