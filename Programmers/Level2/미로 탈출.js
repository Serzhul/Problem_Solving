const maps = ["SOOOL", "XXXXO", "OOOOO", "OXXXX", "OOOOE"];

function solution(maps) {
  const board = maps.map((el) => el.split(""));
  const [row, col] = [board.length, board[0].length];

  const leverArr = Array.from({ length: row }, () =>
    Array.from({ length: col }, () => 0)
  );

  const exitArr = Array.from({ length: row }, () =>
    Array.from({ length: col }, () => 0)
  );

  const direction = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];

  let queue = [];

  const lever = [];
  const exit = [];
  const start = [];

  let leverPushed = false;
  let isExit = false;

  for (let i = 0; i < row; i += 1) {
    for (let j = 0; j < col; j += 1) {
      if (board[i][j] === "S") start.push(i, j);
      if (board[i][j] === "L") lever.push(i, j);
      if (board[i][j] === "E") exit.push(i, j);
    }
  }

  leverArr[start[0]][start[1]] = 1;

  queue.push(start);

  while ((!leverPushed || !isExit) && queue.length) {
    const [r, c] = queue.shift();

    if (!leverPushed) {
      for (let i = 0; i < 4; i += 1) {
        const [newRow, newCol] = [r + direction[i][0], c + direction[i][1]];
        if (newRow >= 0 && newCol >= 0 && newRow < row && newCol < col) {
          if (!leverArr[newRow][newCol] && board[newRow][newCol] !== "X") {
            leverArr[newRow][newCol] = leverArr[r][c] + 1;
            queue.push([newRow, newCol]);
          }

          if (leverArr[lever[0]][lever[1]]) {
            leverPushed = true;
            queue = [lever];
            exitArr[lever[0]][lever[1]] = 1;
          }
        }
      }
    } else {
      for (let i = 0; i < 4; i += 1) {
        const [newRow, newCol] = [r + direction[i][0], c + direction[i][1]];
        if (newRow >= 0 && newCol >= 0 && newRow < row && newCol < col) {
          if (!exitArr[newRow][newCol] && board[newRow][newCol] !== "X") {
            exitArr[newRow][newCol] = exitArr[r][c] + 1;
            queue.push([newRow, newCol]);
          }
          if (exitArr[exit[0]][exit[1]]) {
            isExit = true;
            queue = [];
          }
        }
      }
    }
  }

  return exitArr[exit[0]][exit[1]]
    ? leverArr[lever[0]][lever[1]] + exitArr[exit[0]][exit[1]] - 2
    : -1;
}

console.log(solution(maps));
