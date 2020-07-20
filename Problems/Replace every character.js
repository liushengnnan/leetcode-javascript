/**
 * 
Given a string str consisting of letters only and an integer n, the task is to replace every character of the given string by a character which is n times more than it. If the letter exceeds ‘z’, then start checking from ‘a’ in a cyclic manner.

Examples:
Input: str = “abc”, n = 2
Output: cde
a is moved by 2 times which results in character c
b is moved by 2 times which results in character d
c is moved by 2 times which results in character e

Input: str = “abc”, n= 28
Output: cde
a is moved 25 times, z is reached. Then the 26th character will be a, 27th b and 28th c.
b is moved 24 times, z is reached. 28-th is b.
c is moved 23 times, z is reached. 28-th is e.

Question: 
a/ Write an algorithm to solve the above issue. Please consider the complexity of the algorithm.
b/ What is the disadvantage of using the ASCII value of the letters to solve this problem?

*/

// complexity of the algorithm = O(n)
var replaceEveryCharacter = function (str, n) {
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        let e = str.charCodeAt(i) - 97;
        let v = (e + n) % 26 + 97;
        arr.push(String.fromCharCode(v))
    }
    return arr.join('');
}

let str = 'abc', n = 29;
let x = replaceEveryCharacter(str, n);
console.log(x);

