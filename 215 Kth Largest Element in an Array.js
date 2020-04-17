// Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.

// For example,
// Given [3,2,1,5,6,4] and k = 2, return 5.

// Note: 
// You may assume k is always valid, 1 ≤ k ≤ array's length.

// Credits:
// Special thanks to @mithmatt for adding this problem and creating all test cases.

// Hide Company Tags Facebook Amazon Microsoft Apple Bloomberg Pocket Gems
// Hide Tags Heap Divide and Conquer
// Hide Similar Problems (M) Wiggle Sort II (M) Top K Frequent Elements



/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 
//  use quick select
var findKthLargest = function(nums, k) {
    var smaller = [];
    var larger = [];
    var pivot = nums[parseInt(nums.length/2)];
    var pivotCnt = 0;
    
    for(var i = 0; i < nums.length; i++) {
        var num = nums[i];      
      
        if(num > pivot) {
            larger.push(num);
        } else if(num < pivot) {
            smaller.push(num);
        } else {
            pivotCnt++;
        }
    }
      
    if(k <= larger.length) { // if larger includes k
        return findKthLargest(larger, k);
    } else if(k - larger.length - pivotCnt <= 0) { // k is part of pivot
        return pivot;
    } else { // if smaller inclues k
        return findKthLargest(smaller, k - larger.length - pivotCnt);
    }
};


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest_1 = function(nums, k) {
    let index = nums.length - k;
    let l = 0;
    let r = nums.length - 1;
    while(l < r) {
        let x = partition(nums, l, r);
        console.log(x);
        console.log(nums);
        if (x < index) { l = x + 1; } 
        else if (x > index){ r = x - 1; }
        else {  break; } 
    }
    console.log(nums);
    return nums[index];
};

function swap(items, leftIndex, rightIndex){
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}

function partition(items, left, right) {
    var pivot   = items[Math.floor((right + left) / 2)], //middle element
        i       = left, //left pointer
        j       = right; //right pointer
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j); //sawpping two elements
            i++;
            j--;
        }
    }
    return i;
}


var findKthLargest_2 = function(nums, k) {
    let _nums = nums.sort((a,b)=> a-b);
    console.log(_nums);
    return _nums[nums.length - k];
};


let nums = [3,2,3,1,2,4,5,5,6,7,7,8,2,3,1,1,1,10,11,5,6,2,4,7,8,5,6];
let x = findKthLargest_2(nums, 2);


/**
 * 最佳
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    function swap (i, j) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }
    
    function partition (left, right, pivotIndex) {
        pivot = nums[pivotIndex];
        swap(right, pivotIndex);
        
        let storeIndex = left;
        for (let i = left ; i < right ; i++) {
            if (nums[i] > pivot) {
                swap(storeIndex, i);
                storeIndex++;
            }
        }
        
        swap(right, storeIndex);
        
        return storeIndex;
    }
    
    function select (left, right) {
        if (left === right) return nums[left];
        
        let pivotIndex = Math.floor((left + right)/2);
        pivotIndex = partition(left, right, pivotIndex);
        
        if (k - 1 === pivotIndex) return nums[k - 1];
        else if (k - 1 < pivotIndex) return select(left, pivotIndex - 1);
        else return select(pivotIndex + 1, right);
    }
    
    return select(0, nums.length - 1);
};
