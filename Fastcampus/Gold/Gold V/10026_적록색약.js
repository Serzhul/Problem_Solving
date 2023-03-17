const solution = (input) => {
  const [N, ...picture] = input
    .toString()
    .trim()
    .split("\n")
    .map((el, idx) => {
      if (idx === 0) return Number(el);
      return el.split("");
    });

  let visited = Array.from({ length: N }, () =>
    Array.from({ length: N }, () => false)
  );
  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];

  const district = [];

  const dfs = (row, col, start) => {
    if (row < 0 || col < 0 || row >= N || col >= N || visited[row][col]) {
      return;
    }

    visited[row][col] = true;
    if (picture[row][col] === "R") {
      picture[row][col] = "G";
    }

    for (let i = 0; i < 4; i += 1) {
      const nRow = row + dx[i];
      const nCol = col + dy[i];

      if (
        nRow >= 0 &&
        nCol >= 0 &&
        nRow < N &&
        nCol < N &&
        !visited[nRow][nCol] &&
        picture[nRow][nCol] === start
      ) {
        dfs(nRow, nCol, start);
      }
    }
  };

  let count = 0;

  for (let i = 0; i < N; i += 1) {
    for (let j = 0; j < N; j += 1) {
      if (!visited[i][j]) {
        dfs(i, j, picture[i][j]);
        count += 1;
      }
    }
  }

  district.push(count);

  visited = Array.from({ length: N }, () =>
    Array.from({ length: N }, () => false)
  );

  count = 0;

  for (let i = 0; i < N; i += 1) {
    for (let j = 0; j < N; j += 1) {
      if (!visited[i][j]) {
        count += 1;
        dfs(i, j, picture[i][j]);
      }
    }
  }

  district.push(count);

  console.log(`${district.join(" ")}`);
};

solution(`5
RRRBB
GGBBB
BBBRR
BBRRR
RRRRR`);
