/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let arr = n.toString().split('').map(val=>parseInt(val));
    return arr.reduce((pro, val) => pro * val ) - arr.reduce((sum, val) => sum + val );
};

/**
 * @param {number} n
 * @return {number}
 */

var subtractProductAndSum = function(n) {
    var calculateDigitsSum = function(n) {
        if (n < 10) return n;
        return (n % 10) + calculateDigitsSum(Math.floor(n / 10));
    }
    
    var calculateDigitsProduct = function(n) {
        if (n < 10) return n;
        return (n % 10) * calculateDigitsProduct(Math.floor(n / 10));
    }
    
	return calculateDigitsProduct(n) - calculateDigitsSum(n);
}

let x = subtractProductAndSum(1234);
