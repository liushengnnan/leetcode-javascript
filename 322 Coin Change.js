/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    var dp = [0];
    for (var i = 1; i <= amount; i++) {
        dp.push(-1);
    }


    for (var a = 0; a < amount; a++) {
        if (dp[a] < 0) {
            continue;
        }

        for (var c = 0; c < coins.length; c++) {
            var coin = coins[c];

            if ((a + coin) > amount) {
                continue;
            }

            // if(dp[a + coin] < 0 || dp[a + coin] > dp[a] + 1) {
            if (dp[a + coin] < 0) {
                dp[a + coin] = dp[a] + 1;
            }
        }
    }
    console.log(dp)
    console.log(dp[amount])
    return dp[amount];
};

coinChange([1, 2, 5, 10, 25], 25);


/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// DP[i] = min(DP[i-coins[j]]) + 1
var coinChange = function (coins, amount) {
    let DP = Array(amount + 1).fill(Infinity);
    DP[0] = 0;
    for (let i = 1; i <= amount; i++) {
        for (let j = 0; j < coins.length; j++) {
            if (i >= coins[j]) {
                DP[i] = Math.min(DP[i], DP[i - coins[j]] + 1);
            }
        }
    }
    return DP[amount] > amount ? -1 : DP[amount];
};