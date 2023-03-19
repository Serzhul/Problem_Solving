const solution = (input) => {
  const [[N, M], ...graph] = input
    .toString()
    .trim()
    .split("\n")
    .map((el) => el.split(" ").map(Number));

  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];

  function bfs() {
    const visited = Array.from({ length: N }, () =>
      Array.from({ length: M }, () => false)
    );

    visited[0][0] = true;

    const queue = [];
    queue.push([0, 0]);

    while (queue.length) {
      const [x, y] = queue.shift();
      for (let i = 0; i < 4; i += 1) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (nx >= 0 && ny >= 0 && nx < N && ny < M) {
          // 바깥쪽에서 접근하니까, 치즈들에 한번씩이라도 접했으면 내부는 확인하지 않음
          if (!visited[nx][ny]) {
            if (graph[nx][ny] >= 1) graph[nx][ny] += 1;
            else {
              queue.push([nx, ny]);
              visited[nx][ny] = true;
            }
          }
        }
      }
    }
  }

  function melt() {
    let finish = true;
    for (let i = 0; i < N; i += 1) {
      for (let j = 0; j < M; j += 1) {
        if (graph[i][j] >= 3) {
          graph[i][j] = 0;
          finish = false;
        } else if (graph[i][j] === 2) graph[i][j] = 1;
      }
    }

    return finish;
  }

  let result = 0;

  while (true) {
    bfs();
    if (melt()) {
      console.log(result);
      break;
    } else result += 1;
  }
};

solution(`8 9
0 0 0 0 0 0 0 0 0
0 0 0 1 1 0 0 0 0
0 0 0 1 1 0 1 1 0
0 0 1 1 1 1 1 1 0
0 0 1 1 1 1 1 0 0
0 0 1 1 0 1 1 0 0
0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0`);
