// Leetcode 122
// Language: Javascript
// Problem: https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
// Author: Chihung Yu
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    if (prices === null || prices.length === 0) {
        return 0;
    }

    var profit = 0;

    for (var i = 1; i < prices.length; i++) {
        var diff = prices[i] - prices[i - 1];
        if (diff > 0) {
            profit += diff;
        }
    }

    return profit;
};

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let profit = 0;
    for (let i = 0; i < prices.length - 1; i++) {
        if (prices[i] < prices[i + 1]) {
            profit += prices[i + 1] - prices[i];
        }
    }
    return profit;
};