// Leetcode 129
// Language: Javascript
// Problem: https://leetcode.com/problems/sum-root-to-leaf-numbers/
// Author: Chihung Yu
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function (root) {
    var total = 0;

    if (root === null) {
        return total;
    }

    var queue = [];
    queue.push(root);

    while (queue.length !== 0) {
        var node = queue.shift();

        if (node.left === null && node.right === null) {
            total += parseInt(node.val);
        }

        if (node.left) {
            node.left.val = '' + node.val + node.left.val;
            queue.push(node.left);
        }
        if (node.right) {
            node.right.val = '' + node.val + node.right.val;
            queue.push(node.right);
        }
    }

    return total;
};

var sumNumbers = function (root) {
    if (root === null) { return []; }
    let res = [];
    var dfs = (node, path) => {
        let arr = [...path, node.val];
        if (node.left === null && node.right === null) {
            res.push(parseInt(arr.join('')));
            return;
        }
        if (node.left) dfs(node.left, arr);
        if (node.right) dfs(node.right, arr)
    }
    dfs(root, []);
    return res.reduce((sum, val) => sum += val);
};


/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function (root) {
    let sum = 0;
    DFS(root, 0);
    return sum;

    function DFS(root, path) {
        if (root == null) return;
        path = path * 10 + root.val;
        if (root.left == null && root.right == null) {
            sum += path;
        } else {
            DFS(root.left, path);
            DFS(root.right, path);
        }
    }
};