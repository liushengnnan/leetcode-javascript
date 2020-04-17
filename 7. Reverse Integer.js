/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let result = 0;
    while(x != 0) {
        console.log('x   = ' + x);
        let bit = x % 10;
        x = (x - bit) / 10;
        console.log('bit = ' + bit);
        result = result * 10 + bit;
        console.log('res = ' + result);
    }
    if ( Math.abs(result) > 0x7FFFFFFF) { return 0; }
    return result;
};

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var isNeg = x < 0;
    var result = 0;
    
    x = Math.abs(x);
    
    while(x) {
        var lastDigit = x%10;
        result *= 10;
        result += lastDigit;
        x = parseInt(x/10);
    }

    result = isNeg ? -result : result;
    
    if(result > Math.pow(2,31) - 1 || result < -Math.pow(2,31)) {
        return 0;
    }
    
    return result;
};

/**
 * @param {number} x
 * @return {number}
 */
var reverse_1 = function(x) {
    let y = -0x80000000;
    let z = y + 1;
    console.log(y.toString(2));
    console.log(z.toString(2));

}

let x = reverse_1(-15);