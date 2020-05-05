/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    if (!grid || !grid[0]) return 0;
    let x_len = grid.length;
    let y_len = grid[0].length;
    // 左右 下上 四联通图
    let dx = [-1, 1, 0, 0];
    let dy = [0, 0, -1, 1];

    var flood_fill_DFS = (x, y) => {
        // return 
        if (x < 0 || x >= x_len || y < 0 || y >= y_len) return;
        if (grid[x][y] === '0') return;
        grid[x][y] = '0';
        for (let i = 0; i < 4; i++) {
            flood_fill_DFS(x + dx[i], y + dy[i]);
        }
    }

    let count = 0;
    for (let i = 0; i < x_len; i++) {
        for (let j = 0; j < y_len; j++) {
            if (grid[i][j] === '1') {
                count++;
                flood_fill_DFS(i, j);
            }
        }
    }
    return count;
}


var arr = [
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "1"]
];

arr = [[1,1,0,0,0],[1,1,0,0,0],[0,0,0,1,1],[0,0,0,1,1]];

let x = maxAreaOfIsland(arr);
console.log(x);