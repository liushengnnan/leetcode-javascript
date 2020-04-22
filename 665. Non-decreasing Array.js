/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(sequence) {
    var c = 0;
   for (var i = 0; i < sequence.length; i++) {
     if (sequence[i] < sequence[i - 1]) {
       c++;
       if (c > 1) return false; // check for same number not repeated more than twice consequintely
       if (sequence[i] <= sequence[i - 2] && sequence[i + 1] <= sequence[i - 1]) return false;
     }
   }
   return true; 
 };