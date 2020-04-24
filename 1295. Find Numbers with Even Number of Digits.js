/**
 * @param {number[]} nums
 * @return {number}
 */
let findNumbers = A => {
    return A.filter(x => x.toString().length % 2 == 0).length;
};