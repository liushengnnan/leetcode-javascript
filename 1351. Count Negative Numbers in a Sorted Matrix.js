/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let count = 0;
    let m = grid.length - 1;
    let n = 0;
    while(m >= 0 && n < grid[0].length) {
        console.log('M = ' + m + '  N = ' + n)
        if (grid[m][n] < 0) {
            count = count + grid[0].length - n
            m--;
        } else {
            n++;
        }
    }
    return count;
};


let grid = [[3,2,1,-1],
            [2,1,-1,-2],
            [1,-1,-2,-3],
            [-1,-2,-3,-4]];
var s = countNegatives(grid);