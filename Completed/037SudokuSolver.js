/*
Write a program to solve a Sudoku puzzle by filling the empty cells.

A sudoku solution must satisfy all of the following rules:

    Each of the digits 1-9 must occur exactly once in each row.
    Each of the digits 1-9 must occur exactly once in each column.
    Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.

The '.' character indicates empty cells.

 

Example 1:

Input: board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]
Output: [["5","3","4","6","7","8","9","1","2"],["6","7","2","1","9","5","3","4","8"],["1","9","8","3","4","2","5","6","7"],["8","5","9","7","6","1","4","2","3"],["4","2","6","8","5","3","7","9","1"],["7","1","3","9","2","4","8","5","6"],["9","6","1","5","3","7","2","8","4"],["2","8","7","4","1","9","6","3","5"],["3","4","5","2","8","6","1","7","9"]]
Explanation: The input board is shown above and the only valid solution is shown below:


 

Constraints:

    board.length == 9
    board[i].length == 9
    board[i][j] is a digit or '.'.
    It is guaranteed that the input board has only one solution.

*/
const solveSudoku = board => {
    const n = 3, N = n * n;
    const rows = Array.from({ length: N }, () => Array(N + 1).fill(0));
    const cols = Array.from({ length: N }, () => Array(N + 1).fill(0));
    const boxes = Array.from({ length: N }, () => Array(N + 1).fill(0));
    let sudokuSolved = false;

    const couldPlace = (d, row, col) => {
        const idx = Math.floor(row / n) * n + Math.floor(col / n);
        return rows[row][d] + cols[col][d] + boxes[idx][d] === 0;
    };

    const placeNumber = (d, row, col) => {
        const idx = Math.floor(row / n) * n + Math.floor(col / n);
        rows[row][d]++;
        cols[col][d]++;
        boxes[idx][d]++;
        board[row][col] = `${d}`;
    };

    const removeNumber = (d, row, col) => {
        const idx = Math.floor(row / n) * n + Math.floor(col / n);
        rows[row][d]--;
        cols[col][d]--;
        boxes[idx][d]--;
        board[row][col] = '.';
    };

    const placeNextNumbers = (row, col) => {
        if (row === N - 1 && col === N - 1) sudokuSolved = true;
        else if (col === N - 1) backtrack(row + 1, 0);
        else backtrack(row, col + 1);
    };

    const backtrack = (row, col) => {
        if (board[row][col] === '.') {
            for (let d = 1; d <= 9; d++) {
                if (couldPlace(d, row, col)) {
                    placeNumber(d, row, col);
                    placeNextNumbers(row, col);
                    if (!sudokuSolved) removeNumber(d, row, col);
                }
            }
        } else placeNextNumbers(row, col);
    };

    for (let i = 0; i < N; i++)
        for (let j = 0; j < N; j++)
            if (board[i][j] !== '.') placeNumber(Number(board[i][j]), i, j);

    backtrack(0, 0);
};


let board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]


//console.log(board)

//console.log(ans);

console.log(board[0]+"")
console.log(board[1]+"")
console.log(board[2]+"")
console.log(board[3]+"")
console.log(board[4]+"")
console.log(board[5]+"")
console.log(board[6]+"")
console.log(board[7]+"")
console.log(board[8]+"\n\n")



solveSudoku(board)


console.log(board[0]+"")
console.log(board[1]+"")
console.log(board[2]+"")
console.log(board[3]+"")
console.log(board[4]+"")
console.log(board[5]+"")
console.log(board[6]+"")
console.log(board[7]+"")
console.log(board[8]+"\n\n")

