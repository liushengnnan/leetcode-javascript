/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {string} labels
 * @return {number[]}
 */
var countSubTrees = function (n, edges, labels) {
    let nodes = new Array(n).fill(null);
    for (let i = 0; i < edges.length; i++) {
        let [root, feet] = edges[i];
        if (nodes[root] == null) {
            nodes[root] = [feet]
        } else {
            nodes[root].push(feet)
        }
    }
    console.log(...nodes);
    let result = new Array(n).fill(0);
    var dfs = function (root, val) {
        if (labels.charAt(root) == val) {
            result[root] += 1;
        }
        if (nodes[root] == null) {
            return;
        }
        for (let j = 0; j < nodes[root].length; j++) {
            const node = nodes[root][j];
            dfs(node, val);
        }
    }
    for (let i = 0; i < n; i++) {
        dfs(i, labels.charAt(i));
    }
    return result;
};


// let n = 6;
// let edges = [[0, 1], [0, 2], [1, 3], [3, 4], [4, 5]]; 
// let labels = "cbabaa";

let n = 7
let edges = [[0, 1], [0, 2], [1, 4], [1, 5], [2, 3], [2, 6]]
let labels = "abaedcd";
let x = countSubTrees(n, edges, labels);
console.log(x);