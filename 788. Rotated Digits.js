/**
 * @param {number} N
 * @return {number}
 */

var rotatedDigits = function(N) {
    let count = 0;
    for(let i=1; i<=N; i++){
    	let tmp = i+'';
    	if(!/[347]/g.test(tmp) && /[2569]/g.test(tmp)) count++;
    }
    return count;
};