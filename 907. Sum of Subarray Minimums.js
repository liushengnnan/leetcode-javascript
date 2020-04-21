/**
 * @param {number[]} A
 * @return {number}
 */
var sumSubarrayMins = function (A) {
    let sum = 0;
    for (let i = 0; i < A.length; i++) {
        let left = i - 1;
        while (A[left] >= A[i] && left >= 0) {
            left--;
        }
        let right = i + 1;
        while (A[right] > A[i] && right < A.length) {
            right++;
        }
        console.log(left, right);
        sum = sum + (i - left) * (right - i) * A[i];
        sum = sum % (Math.pow(10, 9) + 7);
    }
    return sum;
};

let A = [3, 1, 2, 4];
let x = sumSubarrayMins(A);
console.log(x);


var sumSubarrayMins = function(A) {
    let mod=1000000007;
    let sum=0;
    for(let i=0; i<A.length; i++){
    	let left=i-1, right=i+1;
    	while(left>=0 && A[left]>=A[i]) left--;
    	while(right<A.length && A[right]>A[i]) right++;
    	sum=(sum+(right-i)*(i-left)*A[i]%mod)%mod;
    }
    return sum;
};


// ** STACK **
/**
 * @param {number[]} A
 * @return {number}
 */
var sumSubarrayMins = function(A) {
    let stack = [],
        result = 0;
    
    for (let i = 0; i < A.length; i++) {
        while (stack.length > 0 && A[i] < A[stack[stack.length - 1]]) {
            let val = stack[stack.length - 1];
            
            stack.pop();

            result += A[val] * (i - val) * (val + 1 - (stack.length === 0 ? 0 : stack[stack.length - 1] + 1));
            
            result = result % 1000000007
            
            // console.log(stack, result, val, A[val], i - val, (val + 1 - (stack.length === 0 ? 0 : stack[stack.length - 1])) );
        }
        
        stack.push(i);
    }
    
    while (stack.length > 0) {
        let val = stack[stack.length - 1];

        stack.pop();

        result += A[val] * (A.length - val) * (val + 1 - (stack.length === 0 ? 0 : stack[stack.length - 1] + 1));
        result = result % 1000000007
        // console.log('>>', stack, result, val, A[val],  (A.length - val),  (val + 1 - (stack.length === 0 ? 0 : stack[stack.length - 1] + 1)));
    }
    
    return result;
};