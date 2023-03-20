const solution = (input) => {
  const [[N, L, R], ...people] = input
    .toString()
    .trim()
    .split("\n")
    .map((el) => el.split(" ").map(Number));

  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];

  let totalCount = 0;

  function bfs(row, col, index, union) {
    const united = [[row, col]];
    const queue = [];
    queue.push([row, col]);
    union[row][col] = index; // 현재 연합의 번호 할당
    let sum = people[row][col]; // 현재 연합의 전체 인구 수
    let cnt = 1; // 현재 연합의 국가 수

    while (queue.length) {
      const [x, y] = queue.shift();

      for (let i = 0; i < 4; i += 1) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (nx >= 0 && ny >= 0 && nx < N && ny < N && union[nx][ny] === -1) {
          const diff = Math.abs(people[nx][ny] - people[x][y]);

          if (L <= diff && diff <= R) {
            queue.push([nx, ny]);
            union[nx][ny] = index;
            sum += people[nx][ny];
            cnt += 1;
            united.push([nx, ny]);
          }
        }
      }
    }

    for (let j = 0; j < united.length; j += 1) {
      const [a, b] = united[j];
      people[a][b] = Math.floor(sum / cnt);
    }
  }

  while (true) {
    // 각 나라마다 어떤 연합(숫자)에 속했는지 기록
    const union = Array.from({ length: N }, () =>
      Array.from({ length: N }, () => -1)
    );

    let idx = 0;

    for (let i = 0; i < N; i += 1) {
      for (let j = 0; j < N; j += 1) {
        if (union[i][j] === -1) {
          bfs(i, j, idx, union);
          idx += 1; // 해당 국가에 대한
        }
      }
    }

    if (idx === N * N) break; // 모든 인구 이동이 끝난 경우
    totalCount += 1; // 인구 이동 횟수 출력
  }

  console.log(totalCount);
};

solution(`2 20 50
50 30
30 40`);
