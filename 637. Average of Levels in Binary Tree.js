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
var averageOfLevels = function(root) {
    if (root == null) return [];
    let result = [];
    let queue = [root];
    while(queue.length > 0) {
        let q_size = queue.length;
        let cur_level_results = [];
        for (let i = 0; i < q_size; i++) {
            let node = queue.shift();
            if (node.left) {queue.push(node.left)}
            if (node.right) {queue.push(node.right)}
            cur_level_results.push(node.val)
        }
        let average = cur_level_results.reduce((a, b) => a + b) / cur_level_results.length;
        result.push(average);
    }
    return result;
};