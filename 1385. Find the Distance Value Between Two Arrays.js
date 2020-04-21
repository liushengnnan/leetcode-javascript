/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function(arr1, arr2, d) {
    let x = arr1.filter(a => {
        return arr2.find(b => {
            return Math.abs(a-b) <= d
        });
    })
    return x.length;
};


let findTheDistanceValue = (A, B, T) => A.filter(a => B.every(b => Math.abs(a - b) > T)).length;
