/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
    if (!image || !image[0]) return image;

    let x_len = image.length;
    let y_len = image[0].length;
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

    let oldColor = image[sr][sc];
    var flood_fill_DFS = (x, y) => {
        if (!is_valid(x, y)) return;
        visited[x][y] = 1;
        image[x][y] = newColor;
        for (let i = 0; i < 4; i++) {
            flood_fill_DFS(x + dx[i], y + dy[i]);
        }
    }

    var is_valid = (x, y) => {
        if (x < 0 || x >= x_len || y < 0 || y >= y_len) return false;
        if (image[x][y] !== oldColor || visited[x][y] === 1) return false;
        return true;
    }
    flood_fill_DFS(sr, sc);
    return image;
};

let image = [
    [1, 1, 1],
    [1, 1, 0],
    [1, 0, 1]
];
let sr = 1, sc = 1, newColor = 2
let Output = [
    [2, 2, 2],
    [2, 2, 0],
    [2, 0, 1]
];

image = [[0, 0, 0], [0, 0, 0]];

let x = floodFill(image, 0, 0, 2);
console.log(...x);