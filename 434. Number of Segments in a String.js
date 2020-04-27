/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    return s.split(' ').filter(val=>val != '').length;
};

/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    if (!s) return 0;
    s = s.trim();
    
    let res = 0;
    
    let p = 0;
    
    while(p < s.length){
        if (s[p] !== ' ') {
            res++
            
            while(s[p] !== ' ' && p < s.length) {
                p++
            }
        } else {
            p++
        }
    }
    
    return res
};