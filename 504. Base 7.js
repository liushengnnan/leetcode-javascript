/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
    if(num === 0){
        return "0" 
    }
    let cn = []
    let absNum = num;
    if(num < 0){
        absNum = Math.abs(num)
    }
	while(absNum > 0){
		cn.unshift(absNum % 7)
		absNum = Math.floor(absNum /7)
    } 
    if(num >= 0){
        return cn.join("")
    } else {
        return "-" + cn.join("")
    }
}

var convertToBase7 = function(num) {
    return num.toString(7);
}

let x = convertToBase7(100);
console.log(x);