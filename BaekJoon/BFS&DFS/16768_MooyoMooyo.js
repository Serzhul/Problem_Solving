const solution = (input) => {
  let [[N, K], ...board] = input
    .toString()
    .trim()
    .split("\n")
    .map((el, i) =>
      i === 0
        ? el.split(" ").map((num) => Number(num))
        : el.split("").map((num) => Number(num))
    );

  const newArray = (N) => Array.from({ length: 10 }, () => Array(N).fill(0));

  let ck;
  let ck2;

  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];

  const dfs = (x, y) => {
    ck[x][y] = true;
    let ret = 1;

    for (let i = 0; i < 4; i += 1) {
      const xx = x + dx[i];
      const yy = y + dy[i];

      if (xx < 0 || yy < 0 || xx >= N || yy >= 10) continue;

      if (ck[xx][yy] || board[x][y] !== board[xx][yy]) continue;

      ret += dfs(xx, yy);
    }

    return ret;
  };

  const dfs2 = (x, y, val) => {
    ck2[x][y] = true;
    board[x][y] = 0;
    for (let i = 0; i < 4; i += 1) {
      const xx = x + dx[i];
      const yy = y + dy[i];

      if (xx < 0 || yy < 0 || xx >= N || yy >= 10) continue;

      if (ck2[xx][yy] || board[xx][yy] !== val) continue;

      dfs2(xx, yy, val);
    }
  };

  const down = () => {
    for (let i = 0; i < 10; i += 1) {
      const temp = [];
      for (let j = 0; j < N; j += 1) {
        if (board[j][i] !== 0) {
          temp.push(board[j][i]);
        }
      }

      for (let j = 0; j < N - temp.length; j += 1) {
        board[j][i] = 0;
      }

      for (let j = N - temp.length; j < N; j += 1) {
        board[j][i] = temp[j - (N - temp.length)];
      }
    }
  };

  while (true) {
    let exist = false;

    ck = newArray(N);
    ck2 = newArray(N);

    for (let i = 0; i < N; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        if (board[i][j] !== 0 && !ck[i][j]) {
          const target = board[i][j];
          const res = dfs(i, j); // 갯수 세기
          if (res >= K) {
            dfs2(i, j, target); // 지우기
            exist = true;
          }
        }
      }
    }

    if (!exist) break;

    down(); // 내리기
  }

  let answer = "";

  board.forEach((line) => {
    answer += `${line.join("")}\n`;
  });

  console.log(answer);
};

solution(`6 3
0000000000
0000000300
0054000300
1054502230
2211122220
1111111223`);
