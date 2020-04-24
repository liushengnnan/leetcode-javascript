/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string}
 */
var smallestFromLeaf = function (root) {
    let chars = 'abcdefghijklmnopqrstuvwxyz'.split('');
    console.log(...chars);
    if (root === null) return '';
    let res = '~';
    var dfs = (node, path) => {
        let arr = [...path, chars[node.val]];
        if (node.left === null && node.right === null) {
            let tmpStr = arr.reverse().join('');
            res = res > tmpStr ? tmpStr : res;
            return;
        }
        if (node.left) dfs(node.left, arr);
        if (node.right) dfs(node.right, arr)
    }
    dfs(root, []);
    return res;
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
 * @return {string}
 */
const smallestFromLeaf = (root) => {
    if (!root) { return ''; }
    let res = '~';
    const preOrderTraverse = (root, s) => {
        const newS = String.fromCharCode(97 + root.val) + s;
        if (!root.left && !root.right) {
            res = res < newS ? res : newS;
            return;
        }
        root.left && preOrderTraverse(root.left, newS);
        root.right && preOrderTraverse(root.right, newS);
    }
    preOrderTraverse(root, '');
    return res;
};

let x = smallestFromLeaf();