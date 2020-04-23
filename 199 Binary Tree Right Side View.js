// For example:
// Given the following binary tree,
//    1            <---
//  /   \
// 2     3         <---
//  \     \
//   5     4       <---
// You should return [1, 3, 4].


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
    var result = [];

    if (root === null) {
        return result;
    }

    queue = [];
    queue.push(root);

    while (queue.length > 0) {
        var len = queue.length;

        for (var i = 0; i < len; i++) {
            var node = queue.shift();

            if (node.left) {
                queue.push(node.left);
            }

            if (node.right) {
                queue.push(node.right);
            }

            if (i === len - 1) {
                result.push(node.val);
            }
        }
    }

    return result;
};


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
    if (root == null) return [];
    let queue = [root];
    let result = [];
    while (queue.length > 0) {
        let len = queue.length;
        result.push(queue[len - 1].val);
        for (let i = 0; i <= len - 1; i++) {
            let node = queue.shift();
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }
    return result;
};


/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
    let result = []
    dfs(root, 0)

    function dfs(root, level) {
        if (!root) return
        if (!result[level]) result.push(root.val)
        dfs(root.right, level + 1)
        dfs(root.left, level + 1)
    }

    return result
};