/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let n1 = nums1.length;
    let n2 = nums2.length;
    if (n1 > n2)  return findMedianSortedArrays(nums2,nums1);
    // 对 nums1 折半查找, 
    let k = Math.floor((n1 + n2 + 1)/2);
    let l = 0;
    let r = n2;
    while (l < r) {
        let m1 = l + Math.floor((r - l) / 2); 
        let m2 = k - m1;
        // num1 应该多提供几个, l： 右移
        if (nums2[m2 - 1] > nums1[m1]) {
            l = m1 + 1;
        } else {
            r = m1;
        }
    }

    let m1 = l;    /// num1 提供 m1 个
    let m2 = k - l;   /// num2 提供 m2 个

    let l1 = m1 <= 0 ? -Infinity : nums1[m1 - 1];
    let l2 = m2 <= 0 ? -Infinity : nums2[m2 - 1];
    let c1 = Math.max(l1, l2);
    
    let r1 = m1 >= n1 ? Infinity : nums1[m1];
    let r2 = m2 >= n2 ? Infinity : nums2[m2];
        
    let c2 = Math.min(r1, r2);
    
    if ((n1 + n2) % 2 == 1) {
        return c1; 
    }   
    return (c1 + c2) * 0.5;
}

