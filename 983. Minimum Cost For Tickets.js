// 在一个火车旅行很受欢迎的国度，你提前一年计划了一些火车旅行。在接下来的一年里，你要旅行的日子将以一个名为 days 的数组给出。每一项是一个从 1 到 365 的整数。

// 火车票有三种不同的销售方式：

// 一张为期一天的通行证售价为 costs[0] 美元；
// 一张为期七天的通行证售价为 costs[1] 美元；
// 一张为期三十天的通行证售价为 costs[2] 美元。
// 通行证允许数天无限制的旅行。 例如，如果我们在第 2 天获得一张为期 7 天的通行证，那么我们可以连着旅行 7 天：第 2 天、第 3 天、第 4 天、第 5 天、第 6 天、第 7 天和第 8 天。

// 返回你想要完成在给定的列表 days 中列出的每一天的旅行所需要的最低消费。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/minimum-cost-for-tickets
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function (days, costs) {
    let dayIncluded = Array(366).fill(false);
    for (let day of days) {
        dayIncluded[day] = true;
    }
    let minCost = Array(366).fill(0);
    for (let i = 1; i < 366; i++) {
        if (dayIncluded[i]) {
            let min;
            min = minCost[i - 1] + costs[0];
            min = Math.min(min, minCost[Math.max(0, i - 7)] + costs[1]);
            min = Math.min(min, minCost[Math.max(0, i - 30)] + costs[2]);
            minCost[i] = min;
        } else {
            minCost[i] = minCost[i - 1];
        }
    }
    return minCost[365];
};

/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function (days, costs) {
    let dp = new Array(366).fill(20000000);
    dp[0] = 0;
    for (let i = 1; i <= 365; i++) {
        if (days.includes(i)) {
            dp[i] = Math.min(dp[i], dp[i - 1] + costs[0]);
            dp[i] = Math.min(dp[i], (dp[i - 7] | 0) + costs[1]);
            dp[i] = Math.min(dp[i], (dp[i - 30] | 0) + costs[2]);
        } else {
            dp[i] = Math.min(dp[i], dp[i - 1]);
        }
    }
    return dp[365];
};


/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function (days, costs) {
    let front = days[0];
    let back = days[days.length - 1];
    days = new Set(days);
    let arr = new Array(30).fill(0);
    for (let i = front; i <= back; i++) {
        if (days.has(i)) {
            arr[i % 30] = Math.min(arr[(i - 1) % 30] + costs[0],
                arr[Math.max(0, (i - 7) % 30)] + costs[1],
                arr[Math.max(0, (i - 30) % 30)] + costs[2]);
        } else {
            arr[i % 30] = arr[(i - 1) % 30];
        }
    }
    return arr[back % 30];
};