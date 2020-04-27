/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
    let morseArr = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."];
    let set = new Set();
    words.forEach(item => {
       let str = '';
       for (let i = 0; i < item.length; i++) {
           let index = item.charCodeAt(i) - 97;
           str += morseArr[index];
       } 
       set.add(str);
    });
    return set.size;
};

/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    let set = new Set();
    let morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    
    words.forEach(word => set.add(word.split("").map(char => morse[char.charCodeAt(0) - 97]).join("")));
    
    return [...set.keys()].length;
};