/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function (root) {
    if (!root) return 0;
    return Math.max(root.children.map(node => maxDepth(node) + 1))
};


var maxDepth = function (root) {
    return root ? root.children.reduce((r, n) => Math.max(r, maxDepth(n)), 0) + 1 : 0;
};