


/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    if (grid === null || grid.length === 0 || grid[0].length === 0) {
            return 0;
    }
    let count = 0;
    for (let i = 0; i < grid.length; i++) {
       for (let j = 0; j < grid[0].length; j++) {
           if (grid[i][j] === 1) {
               count += 4;
               if (j - 1 >= 0 && grid[i][j - 1] === 1) {
                   count -= 2;
               }
               if (i - 1 >= 0 && grid[i -1][j] === 1) {
                   count -= 2;
               }
           }
                
       }
    }
    return count;   
    
};


/**
 * @param {number[][]} grid
 * @return {number}
 */

var islandPerimeter = function (grid) {
    if (!grid) return 0;
    let x_len = grid.length;
    let y_len = grid[0].length;
    // 左右 下上 四联通图
    let dx = [-1, 1, 0, 0];
    let dy = [0, 0, -1, 1];

    let perimeter = 0
    for (let i = 0; i < x_len; i++) {
        for (let j = 0; j < y_len; j++) {
            if (grid[i][j] == 1) {
                let tmp = 4;
                for (let k = 0; k < 4; k++) {
                    let xt = i + dx[k];
                    let yt = j + dy[k];
                    console.log(xt, yt);
                    if (xt < 0 || xt >= x_len || yt < 0 || yt >= y_len) continue;
                    if (grid[xt][yt] == 1) tmp--;
                }
                perimeter += tmp;
            }
        }
    }
    return perimeter
};

let map = [
    [0, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0]
];

let perimeter = islandPerimeter(map);