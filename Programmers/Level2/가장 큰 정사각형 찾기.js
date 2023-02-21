const board = [
  [0, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [0, 0, 1, 0],
];

function solution(board) {
  let answer = 0;
  const [row, col] = [board.length, board[0].length];

  if (row <= 1 || col <= 1) return 1;

  for (let i = 1; i < row; i += 1) {
    for (let j = 1; j < col; j += 1) {
      if (board[i][j] > 0) {
        const up = board[i - 1][j];
        const left = board[i][j - 1];
        const cross = board[i - 1][j - 1];
        const minNum = Math.min(up, left, cross);
        board[i][j] = minNum + 1;
        answer = Math.max(answer, board[i][j]);
      }
    }
  }

  return answer ** 2;
}

console.log(solution(board));
