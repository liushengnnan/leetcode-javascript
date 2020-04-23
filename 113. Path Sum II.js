/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function (root, sum) {
    if (root == null) return [];
    let result = [];
    pathSumHelp(root, sum, [], result)
    return result;
};

var pathSumHelp = function (root, sum, pathArr, result) {
    if (root === null) {
        return;
    }
    if (root.left === null && root.right === null) {
        if (sum === root.val) {
            result.push([...pathArr, root.val]);
        }
        return;
    }
    pathArr.push(root.val);
    pathSumHelp(root.left, sum - root.val, pathArr.slice(), result);
    pathSumHelp(root.right, sum - root.val, pathArr.slice(), result);
};