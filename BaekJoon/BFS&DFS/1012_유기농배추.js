const solution = (input) => {
  let [T, ...testCases] = input
    .toString()
    .trim()
    .split("\n")
    .map((el, i) =>
      i === 0 ? Number(el) : el.split(" ").map((num) => Number(num))
    );

  let field = [];
  let ck = [];
  let nextCase = 0;

  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];

  const hasCabbage = (r, c) => {
    ck[r][c] = 1;

    for (let i = 0; i < 4; i += 1) {
      const nX = r + dx[i];
      const nY = c + dy[i];

      if (field[nX][nY] === 0 || ck[nX][nY] === 1) continue;

      hasCabbage(nX, nY);
    }
  };

  for (let i = 0; i < T; i += 1) {
    const [M, N, K] = testCases[nextCase];

    field = Array.from({ length: N + 2 }, () => Array(M + 2).fill(0));
    ck = Array.from({ length: N + 2 }, () => Array(M + 2).fill(0));

    for (let cabbages = 1; cabbages <= K; cabbages += 1) {
      const [x, y] = testCases[nextCase + cabbages];

      field[y + 1][x + 1] = 1;
    }

    nextCase += K + 1;

    let count = 0;

    for (let j = 1; j < N + 1; j += 1) {
      for (let k = 1; k < M + 1; k += 1) {
        if (ck[j][k] !== 1 && field[j][k] === 1) {
          hasCabbage(j, k);
          count += 1;
        }
      }
    }

    console.log(count);
  }
};

solution(`2
10 8 17
0 0
1 0
1 1
4 2
4 3
4 5
2 4
3 4
7 4
8 4
9 4
7 5
8 5
9 5
7 6
8 6
9 6
10 10 1
5 5
`);
