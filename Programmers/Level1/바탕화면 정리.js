const wallpaper = ["..", "#."];

function solution(wallpaper) {
  const board = wallpaper.map((row) => row.split(""));
  const [row, col] = [board.length, board[0].length];

  const checked = Array.from({ length: row }, () =>
    Array.from({ length: col }, () => false)
  );

  let [edgeLeft, edgeTop, edgeBot, edgeRight] = [col, row, 0, 0];

  const checkLeftTop = (x, y) => {
    if (x < 0 || y < 0 || x >= row || y >= col || checked[x][y]) {
      return;
    }

    checked[x][y] = true;

    if (board[x][y] === "#") {
      edgeLeft = Math.min(edgeLeft, y);
      edgeTop = Math.min(edgeTop, x);
      board[x][y] = ".";
    }

    checkLeftTop(x - 1, y);
    checkLeftTop(x, y - 1);
  };

  const checkRightBot = (x, y) => {
    if (x < 0 || y < 0 || x >= row || y >= col || checked[x][y]) {
      return;
    }

    checked[x][y] = true;

    if (board[x][y] === "#") {
      edgeRight = Math.max(edgeRight, y + 1);
      edgeBot = Math.max(edgeBot, x + 1);
      board[x][y] = ".";
    }

    checkRightBot(x + 1, y);
    checkRightBot(x, y + 1);
  };

  for (let i = 0; i < row; i += 1) {
    for (let j = 0; j < col; j += 1) {
      if (board[i][j] === "#") {
        checkLeftTop(i, j);
        checkRightBot(i, j);
        edgeLeft = Math.min(edgeLeft, j);
        edgeTop = Math.min(edgeTop, i);
        edgeRight = Math.max(edgeRight, j + 1);
        edgeBot = Math.max(edgeBot, i + 1);
      }
    }
  }

  return [edgeTop, edgeLeft, edgeBot, edgeRight];
}

console.log(solution(wallpaper));
