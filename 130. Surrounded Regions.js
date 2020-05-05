/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
    if (!board || !board[0]) return board;
    let xlen = board.length;
    let ylen = board[0].length;

    let dx = [-1, 1, 0, 0];
    let dy = [0, 0, 1, -1];

    var flood_fill_DFS = (x, y) => {
        if (x < 0 || x >= xlen || y < 0 || y >= ylen) return;
        if (board[x][y] != 'O') return;
        board[x][y] = 'K';
        for (let i = 0; i < 4; i++) {
            flood_fill_DFS(x + dx[i], y + dy[i]);
        }
    }

    for (let x = 0; x < xlen; x++) {
        if (board[x][0] === 'O') flood_fill_DFS(x, 0);
        if (board[x][ylen - 1] === 'O') flood_fill_DFS(x, ylen - 1);

    }

    for (let y = 1; y < ylen - 1; y++) {
        if (board[0][y] === 'O') flood_fill_DFS(0, y);
        if (board[xlen - 1][y] === 'O') flood_fill_DFS(xlen - 1, y);
    }

    for (let x = 0; x < xlen; x++) {
        for (let y = 0; y < ylen; y++) {
            if (board[x][y] != 'X') {
                board[x][y] = board[x][y] === 'O' ? 'X' : 'O';
            }
        }
    }
    return;
};

let x = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]];

let y = solve(x);
