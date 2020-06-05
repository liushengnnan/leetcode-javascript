/**
 * @param {number[]} nums
 * @return {number}
 */

/**
* @param {number[]} nums
* @return {number}
*/
// 快慢指针
// 0->1->3->2->4->2->4->2->…… 形成循环
var findDuplicate = function (nums) {
    if (!nums || nums.length < 2) return -1;

    let fast = 0,
        slow = 0;

    do {
        fast = nums[nums[fast]];
        slow = nums[slow];
    }
    while (fast !== slow);

    slow = 0;
    while (fast !== slow) {
        slow = nums[slow];
        fast = nums[fast];
    }

    return fast;
};


// 二分法 | 抽屉原理 |
// 二分法还可以用于确定一个有范围的整数（这个思路很常见）（乘法表）
// 二分法的思路是先猜一个数（有效范围 [left, right]里的中间数 mid），
// 然后统计原始数组中小于等于这个中间数的元素的个数 cnt，如果 cnt 严格大于 mid，
// （注意我加了着重号的部分「小于等于」、「严格大于」）。
// 根据抽屉原理，重复元素就在区间 [left, mid] 里；


var findDuplicate = function (nums) {
    let len = nums.length;
    let left = 1;
    let right = nums.length - 1;
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        let cnt = 0;
        for (let i = 0; i < len; i++) {
            if (nums[i] <= mid) { cnt++ }
        }
        if (cnt > mid) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
};

let nums = [1, 3, 4, 2, 2];
let x = findDuplicate(nums);
console.log(x);