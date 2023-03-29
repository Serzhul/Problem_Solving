const solution = (input) => {
  const [N, num] = input.toString().trim().split("\n").map(Number);

  const [row, col] = [N, N];

  let curNum = N ** 2;

  let [left, top, right, bottom] = [0, 0, N - 1, N - 1];

  const board = Array.from({ length: N }, () => Array.from({ length: N }));

  let target = [];

  while (left <= right && top <= bottom) {
    for (let i = top; i <= bottom; i += 1) {
      if (curNum === num) target = [i + 1, left + 1];
      board[i][left] = curNum;
      curNum -= 1;
    }

    left += 1;

    for (let i = left; i <= right; i += 1) {
      if (curNum === num) target = [bottom + 1, i + 1];
      board[bottom][i] = curNum;
      curNum -= 1;
    }

    bottom -= 1;

    if (top <= bottom) {
      for (let i = bottom; i >= top; i -= 1) {
        if (curNum === num) target = [i + 1, right + 1];
        board[i][right] = curNum;
        curNum -= 1;
      }

      right -= 1;
    }

    if (left <= right) {
      for (let i = right; i >= left; i -= 1) {
        if (curNum === num) target = [top + 1, i + 1];
        board[top][i] = curNum;
        curNum -= 1;
      }
      top += 1;
    }
  }

  console.log(board.map((el) => el.join(" ")).join("\n"));
  console.log(target.join(" "));
};

solution(`7
35`);
