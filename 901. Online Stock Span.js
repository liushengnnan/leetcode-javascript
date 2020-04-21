var StockSpanner = function() {
    this.stack = [];
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    let span = 1;
    while(this.stack.length > 0 && price >= this.stack[this.stack.length - 1].price) {
        span += this.stack[this.stack.length - 1].span;
        this.stack.pop();
    }
    this.stack.push({price, span});
    return span;
};

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */


const s = new Uint32Array(10000);
let p = -1;

class StockSpanner {
  constructor() { p = -1; }
  next(price) {
    let cnt = 1;
    while (p >= 0 && price >= (s[p] & 0x1FFFF)) {
      cnt += s[p--] >> 17;
    }
    s[++p] = price | (cnt << 17);
    return cnt;
  }
}