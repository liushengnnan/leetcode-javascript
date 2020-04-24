/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    let nums = [];
    while (head) {
        nums.push(head.val);
        head = head.next;
    }
    sortedArrayToBST(nums);
};

var sortedArrayToBST = function (nums) {
    var generate = function (nums, start, end) {
        if (start > end) {
            return null;
        }
        var midIndex = start + parseInt((end - start) / 2);
        var midVal = nums[midIndex];

        var node = new TreeNode(midVal);
        node.left = generate(nums, start, midIndex - 1);
        node.right = generate(nums, midIndex + 1, end);

        return node;
    }
    return generate(nums, 0, nums.length - 1);
};