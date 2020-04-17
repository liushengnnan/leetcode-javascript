/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function(A) {
    let left = 0;
    let right = A.length - 1;
    while(left <= right) {
        let mid = Math.floor((left + right)/2);
        if (A[mid - 1] < A[mid]) { left = mid + 1; }
        else {right = mid - 1; }
    }
    return left;
};

/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray_1 = function(A) {
    let maxIndex = 0, max = -Infinity
    for(let i = 0; i < A.length; i++){
        if(max < A[i]){
            max = A[i]
            maxIndex = i
        }
    }
    return maxIndex
};

let x = peakIndexInMountainArray([1,2,3,4,5,6,5,4,3,1]);