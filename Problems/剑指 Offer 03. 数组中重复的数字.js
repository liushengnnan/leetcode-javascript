var findRepeatNumber = function(nums) {
    let set = new Set()
    for(let i = 0; i < nums.length; i++) {
        if (set.has(nums[i])) {
            return nums[i];
        } else {
            set.add(nums[i])
        }
        console.log(...set)
    }
    return null;
};

let s = [2, 3, 1, 0, 2, 5, 3];
let x = findRepeatNumber(s);
// console.log(x)