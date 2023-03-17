const solution = (input) => {
  const [[N, M], ...maps] = input
    .toString()
    .trim()
    .split("\n")
    .map((el) => el.split(" ").map(Number));

  const candidates = [];

  const getComb = (arr, pick, prefix = []) => {
    if (pick === 0) {
      candidates.push([...prefix]);
      return;
    }

    return arr.flatMap((v, i) =>
      getComb(arr.slice(i + 1), pick - 1, [...prefix, v])
    );
  };

  const emptySpaces = [];
  const viruses = [];

  for (let i = 0; i < N; i += 1) {
    for (let j = 0; j < M; j += 1) {
      if (maps[i][j] === 0) emptySpaces.push([i, j]);
      if (maps[i][j] === 2) viruses.push([i, j]);
    }
  }

  getComb(emptySpaces, 3);

  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];

  let count = 0;

  const dfs = (row, col, visited) => {
    if (row < 0 || col < 0 || row >= N || col >= M) return;

    if (maps[row][col] !== 2) count += 1;

    visited[row][col] = true;

    for (let i = 0; i < 4; i += 1) {
      const nRow = row + dx[i];
      const nCol = col + dy[i];

      if (
        nRow >= 0 &&
        nCol >= 0 &&
        nRow < N &&
        nCol < M &&
        !visited[nRow][nCol] &&
        maps[nRow][nCol] === 0
      ) {
        dfs(nRow, nCol, visited);
      }
    }
  };

  let min = Infinity;

  for (let i = 0; i < candidates.length; i += 1) {
    const visited = Array.from({ length: N }, () =>
      Array.from({ length: M }, () => false)
    );
    const [[x1, y1], [x2, y2], [x3, y3]] = candidates[i];

    maps[x1][y1] = 1;
    maps[x2][y2] = 1;
    maps[x3][y3] = 1;

    for (let j = 0; j < viruses.length; j += 1) {
      const [x, y] = viruses[j];

      dfs(x, y, visited);
    }

    min = Math.min(count, min);

    maps[x1][y1] = 0;
    maps[x2][y2] = 0;
    maps[x3][y3] = 0;
    count = 0;
  }

  console.log(emptySpaces.length - 3 - min);
};

solution(`4 6
0 0 0 0 0 0
1 0 0 0 0 2
1 1 1 0 0 2
0 0 0 0 0 2`);
