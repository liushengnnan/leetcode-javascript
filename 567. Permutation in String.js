/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

var checkInclusion = function (s1, s2) {

    // 判断输出条件
    if (s1.length > s2.length) return false
    var base = 'a'.charCodeAt(0);
    
    // let str = 'abcdefghigklmnopqrstuvwxyz';
    // console.log(...str)
    let hash = new Array(26).fill(0)
    for (let i = 0; i < s1.length; i++) {
        const index = s1.charCodeAt(i) - base;
        hash[index] += 1
    }

    let l = 0;
    let count = 0;
    for (let r = 0; r < s2.length; r++) {
        const index = s2.charCodeAt(r) - base;
        hash[index]--;

        // 减一之后 >= 0 ,说明s2[r]右指针 匹配 （count++ 表新增）
        if (hash[index] >= 0) {
            count++;
        }

        if (r >= s1.length) {
            const lndex = s2.charCodeAt(l) - base;
            hash[lndex]++;
            // 加一之后 >= 1 ,说明s2[l]左指针 匹配 （count-- 表移除）
            if (hash[lndex] >= 1) {
                count--;
            }
            l++
        }

        console.log(...hash)
        if (count == s1.length) {
            return true;
        }
    }
    return false
};

let s1 = "ab", s2 = "eidbaooo";
let x = checkInclusion(s1, s2);
console.log(x);

 /**
  * a b c d  e f g h i g k l m n o p q r s t u v w x y z
    1 1 0 0 -1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
         
        hash[index]--;
        // 减一之后 >= 0 ,说明s2[r]右指针
        if (hash[index] >= 0) {
            count++;
        }
  * 
  *
  */