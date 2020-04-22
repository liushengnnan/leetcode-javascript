/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function (A, B) {
    if (A.length !== B.length) return false;
    let diff = [];
    let map = {};
    for (let i = 0; i < A.length; i++) {
        if (A[i] !== B[i]) {
            diff.push(i);
            if (diff.length > 2) return false;
        }
        map[A[i]] = map[A[i]] ? map[A[i]] + 1 : 1;
    }
    if (diff.length === 2) {
        if ( A[diff[0]] === B[diff[1]] &&  A[diff[1]] === B[diff[0]]) {
            return true
        }
        return false
    }
    for (const key in map) {
       if(map[key] >= 2) { return true }
    }
    return false;
};

let A = "abcaa"
let B = "abcbb"
let x = buddyStrings(A, B);
console.log(x);


/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function(A, B) {
    let indices = [];
    let hash = {};
    if(A.length !== B.length ){
        return false;
    }
    
    if(A === B){
        for(let i = 0; i < A.length; i++){
            hash[A[i]] = 1;   
        }
        
        return Object.keys(hash).length < A.length;
    }
    
    for(let i = 0; i < A.length; i++){
        if(A[i] !== B[i]){
            indices.push(i);
        }
    }
    
    return indices.length === 2 && A[indices[0]] === B[indices[1]] && A[indices[1]] === B[indices[0]]
};