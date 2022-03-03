function solution(rows, columns, queries) {
    const board = Array.from({ length: rows }, () => Array(columns));
    const mins = [];

    for (let i = 0; i < rows; i += 1) {
        for (let j = 0; j < columns; j += 1) {
            board[i][j] = i * columns + j + 1;
        }
    }

    queries.forEach((query) => {
        const [x1, y1, x2, y2] = query.map((num) => num - 1);

        let min = board[x1][y1];
        const tmp = board[x1][y1];

        for (let i = x1; i < x2; i += 1) {
            board[i][y1] = board[i + 1][y1];
            min = Math.min(min, board[i][y1]);
        }
        for (let i = y1; i < y2; i += 1) {
            board[x2][i] = board[x2][i + 1];
            min = Math.min(min, board[x2][i]);
        }

        for (let i = x2; i > x1; i -= 1) {
            board[i][y2] = board[i - 1][y2];
            min = Math.min(min, board[i][y2]);
        }

        for (let i = y2; i > y1; i -= 1) {
            board[x1][i] = board[x1][i - 1];
            min = Math.min(min, board[x1][i]);
        }

        board[x1][y1 + 1] = tmp;

        mins.push(min);
    });

    console.log(mins);
    return mins;
}

solution(100, 97, [[1, 1, 100, 97]]);
