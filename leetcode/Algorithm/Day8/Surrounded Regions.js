/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

const board = [
  ["X", "X", "X", "X"],
  ["X", "O", "O", "X"],
  ["X", "X", "O", "X"],
  ["X", "O", "X", "X"],
];

const solve = (board) => {
  const [m, n] = [board.length, board[0].length];

  const isEdge = (x, y) => x === 0 || y === 0 || x === m - 1 || y === n - 1;

  const dfs = (row, col) => {
    if (
      row < 0 ||
      row >= board.length ||
      col < 0 ||
      col >= board[row].length ||
      board[row][col] === "visited" ||
      board[row][col] === "X"
    )
      return;
    board[row][col] = "visited";

    dfs(row + 1, col);
    dfs(row, col + 1);
    dfs(row - 1, col);
    dfs(row, col - 1);

    return;
  };

  for (let i = 0; i < m; i += 1) {
    for (let j = 0; j < n; j += 1) {
      if (board[i][j] === "O" && isEdge(i, j)) dfs(i, j);
    }
  }

  for (let i = 0; i < m; i += 1) {
    for (let j = 0; j < n; j += 1) {
      if (board[i][j] === "visited") {
        board[i][j] = "O";
      } else {
        board[i][j] = "X";
      }
    }
  }

  return board;
};

console.log(solve(board));
