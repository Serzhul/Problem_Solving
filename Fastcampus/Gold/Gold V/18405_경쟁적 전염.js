const solution = (input) => {
  const data = input.toString().trim().split("\n");

  const [N, K] = data[0].split(" ").map(Number);
  const [S, X, Y] = data[N + 1].split(" ").map(Number);

  const board = Array.from({ length: N + 1 }, () =>
    Array.from({ length: N + 1 }, () => 0)
  );

  const visited = Array.from({ length: N + 1 }, () =>
    Array.from({ length: N + 1 }, () => false)
  );

  for (let i = 1; i <= N; i += 1) {
    board[i] = [0, ...data[i].split(" ").map(Number)];
  }

  const queue = [];

  for (let i = 1; i <= N; i += 1) {
    for (let j = 1; j <= N; j += 1) {
      if (board[i][j] !== 0) {
        queue.push([board[i][j], 0, i, j]);
      }
    }
  }

  queue.sort((a, b) => a[0] - b[0]);

  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];

  while (queue.length) {
    const [v, t, x, y] = queue.shift();

    if (t === S) break;

    for (let i = 0; i < 4; i += 1) {
      const nX = x + dx[i];
      const nY = y + dy[i];

      if (
        nX >= 1 &&
        nY >= 1 &&
        nX <= N &&
        nY <= N &&
        board[nX][nY] === 0 &&
        !visited[nX][nY]
      ) {
        visited[nX][nY] = true;
        board[nX][nY] = v;
        queue.push([v, t + 1, nX, nY]);
      }
    }
  }

  console.log(board[X][Y]);
};

solution(`3 3
1 0 2
0 0 0
3 0 0
1 2 2`);
