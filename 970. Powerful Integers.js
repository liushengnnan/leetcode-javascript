/**
 * @param {number} x
 * @param {number} y
 * @param {number} bound
 * @return {number[]}
 */
var powerfulIntegers = function(x, y, bound) {
    var set=new Set();
    for(var a=1; a<bound; a*=x){
       for(var b=1; b+a <= bound; b*=y){
           set.add(a+b);
           if(y == 1)break;
       }
       if(x==1)break;
    }
    return [...set];
};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} bound
 * @return {number[]}
 */
var powerfulIntegers = function(x, y, bound) {
    var set = new Set()
    for(var i = 0; i <= 32 && Math.pow(x, i) <= bound; ++i) {
        for(var j = 0; j <= 32 && Math.pow(y, j) <= bound; ++j) {
            var r = Math.pow(x, i) + Math.pow(y, j);
            if (r <= bound) {
                set.add(r);
            }
        }
    }
    return Array.from(set);
};

let x = powerfulIntegers(3,5,15);
console.log(x);