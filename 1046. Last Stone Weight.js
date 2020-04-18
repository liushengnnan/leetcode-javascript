/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    function bubblePop(arr) {
        for (let i = 0; i < arr.length - 1; i++) {
            if(arr[i] > arr[i+1]) {[arr[i] , arr[i+1]] = [arr[i+1] , arr[i]] }
        }
        return arr.pop();
    }
    while (stones.length >= 2) {
        let x = bubblePop(stones);
        let y = bubblePop(stones);
        stones.unshift(Math.abs(x-y));
    }
    return stones;
};


/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    while(stones.length > 1) {
        let idx1 = stones.indexOf(Math.max(...stones));
        let stone1 = stones.splice(idx1, 1);
        let idx2 = stones.indexOf(Math.max(...stones));
        let stone2 = stones.splice(idx2, 1);
        stones.push(stone1-stone2);
    }
    
    return stones;
};

let arr = [2,7,4,1,8,1];
let x = lastStoneWeight(arr);
console.log(x);