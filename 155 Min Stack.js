// Leetcode #155
// Language: Javascript
// Problem: https://leetcode.com/problems/min-stack/
// Author: Chihung Yu
/**
 * @constructor
 */
var MinStack = function () {
    this.min = [];
    this.stack = [];
}




/**
 * @param {number} x
 * @returns {void}
 */
MinStack.prototype.push = function (x) {
    var min = this.getMin();

    this.stack.push(x);

    if (min === undefined || min >= x) {
        this.min.push(x);
    }
};

/**
 * @returns {void}
 */
MinStack.prototype.pop = function () {
    var val = this.stack.pop();
    var min = this.getMin();

    if (val === min) {
        this.min.pop();
    }
};

/**
 * @returns {number}
 */
MinStack.prototype.top = function () {
    return this.stack[this.stack.length - 1];
};

/**
 * @returns {number}
 */
MinStack.prototype.getMin = function () {
    return this.min[this.min.length - 1];
};

/**
 * initialize your data structure here.
 */
var MinStack = function () {
    this.globalMin = Number.MAX_SAFE_INTEGER;
    this.arr = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    //Every time i push an element I will store the max of the current state of the stack WITH that element onto the stack as a key-value pair: [elemToPush,MaxInStack With current elem];  
    if (x < this.globalMin) {
        this.globalMin = x;
    }
    this.arr.push([x, this.globalMin]);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    //Everytime I pop I will update the globalMin with the min from the new itms global min state value as:
    //THAT WAS THE GLOBAL MIN in the state of the stack without this element that I am popping right now.
    if (this.arr[this.arr.length - 2]) {
        this.globalMin = this.arr[this.arr.length - 2][1];
    } else {
        this.globalMin = Number.MAX_SAFE_INTEGER;
    }
    this.arr.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.arr[this.arr.length - 1][0];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.globalMin;
};
