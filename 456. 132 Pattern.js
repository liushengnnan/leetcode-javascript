/**
 * @param {number[]} nums
 * @return {boolean}
 */

// I. Naive O(n^3) solution
var find132pattern = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                if (nums[i] < nums[k] && nums[k] < nums[j]) {
                    console.log(nums[i], nums[j], nums[k]);
                    return true; 
                }
            }
        }
    }
    return false; 
};

// II. Improved O(n^2) solution
var find132pattern = function(nums) {
    let min = Infinity;
    for (let j = 0; j < nums.length; j++) {
        min = Math.min(min, nums[j]);
        if (min == nums[j]) {continue;}
        for (let k = j + 1; k < nums.length; k++) {
            if (min < nums[k] && nums[k] < nums[j]) {
                console.log(min, nums[j], nums[k]);
                return true; 
            }
        }
    }
    return false;
}


// III. Optimized O(n) solution
var find132pattern = function(nums) {
    console.log(nums);
    let arr = [...nums];
    for (let i = 1; i < nums.length; i++) {
        arr[i] = Math.min(nums[i - 1], arr[i - 1]);
    }
    console.log(arr);
    let top = nums.length; 
    for (let j = nums.length - 1; j >= 0; j--) {
        if (nums[j] <= arr[j]) { 
            continue; 
        } 
        while (top < nums.length && arr[top] <= arr[j]) {
            top++;
            console.log('top = ' + top);
        }
        if (top < nums.length && nums[j] > arr[top]) {
            console.log(top, nums[j], arr[top]);
            console.log(arr);
            return true;
        }
        arr[--top] = nums[j];
        console.log('top == ' + top);
    }
    return false;
}


// IV -- One-pass O(n) solution
var find132pattern = function(nums) {
    let n = nums.length, top = n, third = -Infinity;

    for (let i = n - 1; i >= 0; i--) {
        if (nums[i] < third) {
             return true; 
        }
        while (top < n && nums[i] > nums[top]) {
            third = nums[top++];
        } 
        nums[--top] = nums[i];
        console.log(nums);
    }
    
    return false;
}


let nums = [1, 2, 3, 4];
let x = find132pattern(nums);