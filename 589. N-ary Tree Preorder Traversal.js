/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function(root) {
    if (root === null) { return [];}
    let result = [];
    let stack = [root];
    while(stack.length > 0) {
        let node = stack.pop();
        result.push(node.val)
        let children = node.children;
        stack.push(...children);
    }
    return result.reverse();
};