/**
 * @param {number[][]} grid
 * @return {number}
 */
// var minPathSum = function(grid) {
//     if(grid === null || grid.length === 0 || grid[0].length === 0){
//         return 0;
//     }

//     var dp = [[]];

//     dp[0][0] = grid[0][0];

//     for(var i = 1; i < grid.length; i++){
//         dp.push([]);
//         dp[i][0] = grid[i][0] + dp[i - 1][0];
//     }

//     for(var j = 1; j < grid[0].length; j++){
//         dp[0][j] = grid[0][j] + dp[0][j - 1];
//     }

//     for(i = 1; i < grid.length; i++){
//         for(j = 1; j < grid[i].length; j++){
//             var val1 = dp[i - 1][j];
//             var val2 = dp[i][j - 1];

//             dp[i][j] = Math.min(val1, val2) + grid[i][j];
//         }
//     }

//     return dp[dp.length - 1][dp[0].length - 1];
// }


/**
 * @param {number[][]} triangle
 * @return {number}
 */

// use only O(n) space
var minimumTotal = function (triangle) {
    var preResult = [];
    var rows = triangle.length;

    if (rows > 0) {
        preResult.push(triangle[0][0]);
    } else {
        return null;
    }

    for (var row = 1; row < rows; row++) {
        var curResult = [];

        for (var col = 0; col < triangle[row].length; col++) {
            var val;

            if (col === 0) {
                val = preResult[col];
            } else if (col === (triangle[row].length - 1)) {
                val = preResult[col - 1];
            } else {
                val = Math.min(preResult[col - 1], preResult[col]);
            }

            curResult[col] = triangle[row][col] + val;
        }

        preResult = curResult;
    }

    return Math.min.apply(null, preResult);
};


/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    if (!grid || !grid[0]) return 0;
    let xlen = grid.length;
    let ylen = grid[0].length;
    let arr = [grid[0][0]];
    for (let j = 1; j < ylen; j++) {
        arr.push(arr[j - 1] + grid[0][j]);
    }
    let res = [arr];
    for (let i = 1; i < xlen; i++) {
        res.push([res[i - 1][0] + grid[i][0]])
    }
    console.log(...res);
    for (let i = 1; i < xlen; i++) {
        for (let j = 1; j < ylen; j++) {
            let val = Math.min(res[i][j - 1], res[i - 1][j]);
            res[i].push(val + grid[i][j]);
        }
    }
    console.log(...res);
    return res[xlen - 1][ylen - 1];
};

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (row === 0 && col === 0) continue;
            if (row !== 0 && col !== 0) {
                grid[row][col] += Math.min(grid[row - 1][col], grid[row][col - 1]);

            } else if (row === 0) {
                grid[row][col] += grid[row][col - 1];

            } else if (col === 0) {
                grid[row][col] += grid[row - 1][col];
            }
        }
    }

    return grid[rows - 1][cols - 1]
};

let grid =
    [
        [1, 2],
        [5, 6],
        [1, 1]
    ];
// [
//     [1, 2, 5],
//     [3, 2, 1]
// ];
// [
//     [1, 3, 1],
//     [1, 5, 1],
//     [4, 2, 1]
// ];

let x = minPathSum(grid);