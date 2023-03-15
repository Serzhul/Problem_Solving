const solution = (input) => {
  const [T, ...testCases] = input
    .toString()
    .trim()
    .split("\n")
    .map((el, idx) => {
      if (idx === 0) return Number(el);
      return el.split(" ").map(Number);
    });

  let ans = "";

  for (let i = 0; i < testCases.length; i += 1) {
    const [N, M, K] = testCases[i];
    const graph = Array.from({ length: N }, () =>
      Array.from({ length: M }, () => 0)
    );

    for (let j = i + 1; j < i + 1 + K; j += 1) {
      const [x, y] = testCases[j];
      graph[x][y] = 1;
    }

    let count = 0;

    const dx = [1, 0, -1, 0];
    const dy = [0, 1, 0, -1];

    const dfs = (row, col) => {
      graph[row][col] = 0;
      for (let idx = 0; idx < 4; idx += 1) {
        const newX = dx[idx] + row;
        const newY = dy[idx] + col;

        if (newX >= 0 && newY >= 0 && newX < N && newY < M) {
          if (graph[newX][newY]) {
            dfs(newX, newY);
          }
        }
      }
    };

    for (let r = 0; r < N; r += 1) {
      for (let c = 0; c < M; c += 1) {
        if (graph[r][c]) {
          count += 1;
          dfs(r, c);
        }
      }
    }

    ans += `${count}\n`;

    i += K;
  }

  console.log(ans);
};

solution(`1
5 3 6
0 2
1 2
2 2
3 2
4 2
4 0`);
