/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    function reverseString(str) {
        return str.split("").reverse().join("");
    }
    let arr = s.split(' ');
    let res = [];
    arr.forEach(words => {
        res.push(reverseString(words))
    });
    return res.join(' ');
};

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let sArray = s.split(" "), result="";
    for(var i=0;i < sArray.length;i++){
        let cStr = sArray[i]; 
        let pointer = 0;
        while(pointer < cStr.length){
            result += cStr[cStr.length-1-pointer];
            pointer++;
        }
        
        if( i < (sArray.length-1) ){
            result += ' ';
        }
    }
    return result;

};

let s = "Let's take LeetCode contest";
let x = reverseWords(s);
console.log(x);