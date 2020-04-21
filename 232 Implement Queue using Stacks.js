/**
 * @constructor
 */
var MyQueue = function() {
    this.stackIn = [];
    this.stackOut = [];
};

/**
 * @param {number} x
 * @returns {void}
 */
MyQueue.prototype.push = function(x) {
    this.stackIn.push(x);
};

/**
 * @returns {void}
 */
MyQueue.prototype.pop = function() {
    if (this.stackOut.length > 0) {
        return this.stackOut.pop();
    }
    while(this.stackIn.length > 0) {
        let x = this.stackIn.pop();
        this.stackOut.push(x);
    }
    return this.stackOut.pop();
};

/**
 * @returns {number}
 */
MyQueue.prototype.peek = function() {
    if (this.stackOut.length > 0) {
        return this.stackOut[this.stackOut.length - 1];
    } else {
        return this.stackIn[0];
    }
};

/**
 * @returns {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.stackIn.length === 0 && this.stackOut.length === 0;
};