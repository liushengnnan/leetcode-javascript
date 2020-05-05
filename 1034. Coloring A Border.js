/**
 * @param {number[][]} grid
 * @param {number} r0
 * @param {number} c0
 * @param {number} color
 * @return {number[][]}
 */
var colorBorder = function (grid, r0, c0, color) {
    if (!grid || !grid[0]) return grid;

    let x_len = grid.length;
    let y_len = grid[0].length;
    // 左右 下上 四联通图
    let dx = [-1, 1, 0, 0];
    let dy = [0, 0, -1, 1];

    let visited = [];
    for (let i = 0; i < x_len; i++) {
        let tmpArr = [];
        for (let j = 0; j < y_len; j++) {
            tmpArr.push(0);
        }
        visited.push(tmpArr);
    }

    let oldColor = grid[sr][sc];
    var flood_fill_DFS = (x, y) => {
        if (!is_valid(x, y)) return;
        visited[x][y] = 1;
        grid[x][y] = color;
        let isBorder = true
        for (let i = 0; i < 4; i++) {
            flood_fill_DFS(x + dx[i], y + dy[i]);
        }
    }

    var isBorder = (x, y) => {
        if (x == 0 || x == x_len - 1 || y == 0 || y == y_len - 1) return true;
        let isBorder = true
        for (let i = 0; i < 4; i++) {
            flood_fill_DFS(x + dx[i], y + dy[i]);
        }
        if (grid[x][y] !== oldColor || visited[x][y] === 1) return false;
        return true;
    }
    var is_valid = (x, y) => {
        if (x < 0 || x >= x_len || y < 0 || y >= y_len) return false;
        if (grid[x][y] !== oldColor || visited[x][y] === 1) return false;
        return true;
    }
    flood_fill_DFS(r0, c0);
    return grid;
};