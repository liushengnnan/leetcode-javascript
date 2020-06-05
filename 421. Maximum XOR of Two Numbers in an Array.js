/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumXOR = function (nums) {
    let max = 0, mask = 0;
    for (let i = 31; i >= 0; i--) {
        mask = mask | (1 << i);
        let set = new Set();
        for (let i = 0; i < nums.length; i++) {
            let cur = nums[i];
            let val = cur & mask;
            // console.log(mask.toString(2), cur.toString(2), val.toString(2));
            set.add(val);
        }
        let tmp = max | (1 << i);
        for (let prefix of set) {
            console.log(prefix)
            if (set.has(tmp ^ prefix)) {
                max = tmp;
                break;
            }
        }
    }
    return max;
};

let input = [3, 10, 5, 25, 2, 8];
let x = findMaximumXOR(input);
console.log(x);