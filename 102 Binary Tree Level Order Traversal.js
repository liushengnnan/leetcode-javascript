/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    var result = [];
    
    if(root === null){
        return result;
    }
    
    var queue = [];
    var temp = [];
    var curLvlCnt = 1;
    var nextLvlCnt = 0;
    
    queue.push(root);
    
    while(queue.length !== 0){
        var p = queue.shift();
        temp.push(p.val);
        curLvlCnt--;
        
        if(p.left){
            queue.push(p.left);
            nextLvlCnt++;
        }
        if(p.right){
            queue.push(p.right);
            nextLvlCnt++;
        }
        
        if(curLvlCnt === 0){
            result.push(temp);
            curLvlCnt = nextLvlCnt;
            nextLvlCnt = 0;
            temp = [];
        }
    }
    
    return result;
};

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (root == null) {return [];}
    let queue = [];
    queue.push(root)
    let result = [];
    while(queue.length !== 0){
        let nextLevelQueue = [];
        let curLevelVisit = [];
        while(queue.length > 0){ 
            let node = queue.shift();
            curLevelVisit.push(node.val);
            if (node.left) {nextLevelQueue.push(node.left)}
            if (node.right) {nextLevelQueue.push(node.right)}
        }
        result.push(curLevelVisit);
        queue = nextLevelQueue;
    }
    return result;
};