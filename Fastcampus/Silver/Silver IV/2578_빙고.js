const solution = (input) => {
  const [...nums] = input
    .toString()
    .trim()
    .split("\n")
    .map((el) => el.split(" ").map(Number));

  const board = [];

  const isBingo = () => {
    let lineCount = 0;

    // 가로 체크
    for (let i = 0; i < 5; i += 1) {
      let count = 0;
      for (let j = 0; j < 5; j += 1) {
        if (board[i][j] === true) count += 1;
      }

      if (count === 5) lineCount += 1;
    }

    // 세로 체크
    for (let i = 0; i < 5; i += 1) {
      let count = 0;
      for (let j = 0; j < 5; j += 1) {
        if (board[j][i] === true) count += 1;
      }

      if (count === 5) lineCount += 1;
    }

    // 대각선 체크
    let count = 0;
    for (let i = 0; i < 5; i += 1) {
      if (board[i][i] === true) count += 1;
    }

    if (count === 5) lineCount += 1;

    count = 0;

    for (let i = 0; i < 5; i += 1) {
      if (board[i][4 - i] === true) count += 1;
    }

    if (count === 5) lineCount += 1;

    if (lineCount >= 3) return true;
    return false;
  };

  const map = {};

  for (let i = 0; i < 5; i += 1) {
    for (let j = 0; j < 5; j += 1) {
      map[nums[i][j]] = [i, j];
    }
    board.push(nums[i]);
  }

  let cnt = 0;

  for (let i = 5; i < 10; i += 1) {
    for (let j = 0; j < 5; j += 1) {
      const [x, y] = map[nums[i][j]];
      board[x][y] = true;
      cnt += 1;

      if (isBingo()) {
        console.log(cnt);
        return;
      }
    }
  }
};

solution(`11 12 2 24 10
16 1 13 3 25
6 20 5 21 17
19 4 8 14 9
22 15 7 23 18
5 10 7 16 2
4 22 8 17 13
3 18 1 6 25
12 19 23 14 21
11 24 9 20 15`);
