/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumDeleteSum = function (text1, text2) {
    let m = text1.length;
    let n = text2.length;
    let res = new Array(n + 1).fill(0);
    for (let i = 0; i <= m; i++) {
        let tmp = new Array(n + 1).fill(0);
        for (let j = 0; j <= n; j++) {
            if (text1.charAt(i) == text2.charAt(j)) {
                tmp[j + 1] = res[j];
            } else {
                let min = Math.min(tmp[j] + text1.charCodeAt(i) , res[j + 1] + text2.charCodeAt(j));
                tmp[j + 1] = min
            }
        }
        res = tmp;
        console.log(...res);
    }
    return res[n];
}

var minimumDeleteSum = function(s1, s2) {
    let dp = Array.from({length:s1.length+1},()=> new Array(s2.length+1));
    dp[0][0] = 0;
    for(let i = 1; i <= s2.length;i++) {
        dp[0][i] = dp[0][i-1] + s2[i-1].charCodeAt();
    }
    for(let i = 1; i <= s1.length; i++) {
        dp[i][0] = dp[i-1][0] + s1[i-1].charCodeAt();
    }
    for(let i = 1; i <= s1.length; i++) {
        for(let j = 1; j<= s2.length; j++) {
            if(s1[i-1] === s2[j-1]) {
                dp[i][j] = dp[i-1][j-1]
            } else {
                dp[i][j] = Math.min(dp[i-1][j] + s1[i-1].charCodeAt(),dp[i][j-1]+s2[j-1].charCodeAt())
            }
        }
    }
    console.log(...dp)
    return dp[s1.length][s2.length];
};

let s1 = "sea", s2 = "eat";
for (let i = 0; i < s2.length; i++) {
    const element = s2[i].charCodeAt();
    console.log(element);
}
let x = minimumDeleteSum(s1, s2);
console.log(x);
