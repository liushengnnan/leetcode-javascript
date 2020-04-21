/**
 * @param {string} s
 * @return {string}
 */
var decodeString = (s) =>{
    let multiply = [];
    let tempMult = '';
    let repeatStr = [];
    let solution = '';

    for (let char of s) {
        if(!isNaN(char)) {
            tempMult = `${tempMult}${char}` // '是数字'
        } else if (char === '['){
            multiply.push(tempMult); 
            tempMult = '';
            repeatStr.push(solution);
            solution = '';           
        } else if (char === ']'){
            solution = repeatStr.pop() + solution.repeat(multiply.pop()) 
        } else {
            solution += char; 
        }
    }
    return solution;
}

s = "32[a]2[bc]";
// s = "nn3[arwe2[c]]";
let x = decodeString(s);
console.log(x);

// 递归方法

// class Solution {
//     public:
//         string decodeString(string s) {
//             int pos = 0;
//             return helper(pos, s);
//         }
        
//         string helper(int& pos, string s) {
//             int num=0;
//             string word = "";
//             for(;pos<s.size(); pos++) {
//                 char cur = s[pos];
//                 if(cur == '[') {
//                     string curStr = helper(++pos, s);
//                     for(;num>0;num--) word += curStr;
//                 } else if (cur >= '0' && cur <='9') {
//                     num = num*10 + cur - '0';
//                 } else if (cur == ']') {
//                     return word;
//                 } else {    // Normal characters
//                     word += cur;
//                 }
//             }
//             return word;
//         }
//     };