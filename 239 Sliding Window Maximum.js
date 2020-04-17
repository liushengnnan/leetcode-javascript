// Given an array nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

// For example,
// Given nums = [1,3,-1,-3,5,3,6,7], and k = 3.

// Window position                Max
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7
// Therefore, return the max sliding window as [3,3,5,5,6,7].

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    var result = [],
        window = [],
        len = nums.length,
        i;
    
    if (k > len || k === 0) {
        return result;
    }
    
    for (i = 0; i < len; i++) {
        // Remove anything that is less than the current value
        // so window maintains values greater than the curret value
        while (window.length > 0 && nums[window[window.length - 1]] < nums[i]) {
            var val = window.pop();
        }
        
        // In case that all elements in the window are all greater than the current one (descending order)
        // Shift out the 
        if (window[0] < i - k + 1) {
            window.shift();
        }
        
        window.push(i);
        
        // For each sliding window movement, we record the highest value in that sliding window
        // i >= k - 1 to ensure that we don't prematurely record values before we get to the full range of the first sliding window
        // e.g. [1  3  -1] -3  5  3  6  7       3
        // this ensure that i is at least at -1 (index 2)
        if (i >= k - 1) {
            result.push(nums[window[0]]);
        }
    }
    return result;
};

function maxSlidingWindow(nums, k) {
    const res = [];
    const q = [];
  
    for (let i = 0; i < nums.length; i++) {
      while (q.length >= 1 && nums[i] > q[q.length - 1]) q.pop();
      q.push(nums[i]);
  
      // When i + 1 - k >= 0, the window is fully overlapping nums
      const j = i + 1 - k;
      if (j >= 0) {
        res.push(q[0]);
        if (nums[j] === q[0]) q.shift();  // If the biggest element in q is about to exit window, remove it from q
      }
    }
    return res;
  }

var maxSlidingWindow_2 = function(nums, k) {
    let window = [];
    let result = [];
    for (i = 0; i < nums.length; i++) {
        console.log(window);
        const j = i + 1 - k;

        if (j >= 0 && window[0] === nums[j]) {
            window.shift()
        }
        while (window.length > 0 && window[window.length - 1] <= nums[i]) {
            window.pop()
        }
        window.push(nums[i])
        if (j >= 0) {
            result.push(window[0])
        }
    }
    return result;
};

  const v = maxSlidingWindow_2([1,3,-1,-3,5,3,6,7], 3);