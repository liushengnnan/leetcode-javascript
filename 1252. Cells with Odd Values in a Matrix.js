/**
 * @param {number} n : 行
 * @param {number} m : 列
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function (n, m, indices) {
    let reslut = [];
    for (let i = 0; i < n; i++) {
        let rows = new Array(m).fill(true)
        reslut.push(rows);
    }
    for (let j = 0; j < indices.length; j++) {
        const [row, col] = indices[j];
        for (let i = 0; i < m; i++) {
            reslut[row][i] = !reslut[row][i]
        }
        for (let i = 0; i < n; i++) {
            reslut[i][col] = !reslut[i][col]
        }
    }
    console.log(...reslut);
    let cnt = 0
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (reslut[i][j] == false) {
                cnt++;
            }
        }
    }
    return cnt;
};

let n = 2, m = 3;
let indices = [[0, 1], [1, 1]];
let x = oddCells(n, m, indices);
console.log(x);


/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function (n, m, indices) {
    const nn = Array(n).fill(false);
    const mm = Array(m).fill(false);
    indices.forEach(([x, y]) => {
        nn[x] = !nn[x];
        mm[y] = !mm[y];
    });
    const numR = nn.reduce((acc, cur) => (cur ? acc + 1 : acc), 0);
    const numC = mm.reduce((acc, cur) => (cur ? acc + 1 : acc), 0);
    return numR * m + numC * n - 2 * numR * numC;
};