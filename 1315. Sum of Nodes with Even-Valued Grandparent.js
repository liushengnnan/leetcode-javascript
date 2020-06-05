/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumEvenGrandparent = function (root) {
    let sum = 0;
    var help = (node) => {
        if (!node) return;
        if (node.left) {
            if (node.val % 2 == 0) {
                if (node.left.left) sum += node.left.left.val;
                if (node.left.right) sum += node.left.right.val;
            }
            help(node.left);
        }
        if (node.right) {
            if (node.val % 2 == 0) {
                if (node.right.left) sum += node.right.left.val;
                if (node.right.right) sum += node.right.right.val;
            }
            help(node.right);
        }
    }
    help(root);
    return sum;
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumEvenGrandparent = function (root) {
    var helper = function (node, parent, grandparent) {
        if (node === null) return 0;
        return (
            helper(node.left, node.val, parent) +
            helper(node.right, node.val, parent) +
            (grandparent % 2 === 0 ? node.val : 0)
        );
    };
    return helper(root, 1, 1);
};


var sumEvenGrandparent = function(root, parent = 1, grand = 1) {
    if(root === null)
        return 0;
     let result = sumEvenGrandparent(root.left,root.val,parent) + sumEvenGrandparent(root.right,root.val,parent);
     if(grand % 2 === 0)
         return root.val + result;
     return result;
 };
