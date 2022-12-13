// 섬의 개수
// N * M의 지도가 주어질 때 섬의 개수 구하기

const [N, M] = [5, 6];

const map = [
  [1, 1, 0, 0, 1, 1],
  [1, 1, 0, 0, 0, 0],
  [0, 0, 0, 1, 1, 0],
  [0, 1, 1, 1, 0, 1],
  [1, 0, 1, 0, 1, 1],
];

const dx = [-1, 0, 1, 0];
const dy = [0, -1, 0, 1];

const visit = Array.from({ length: N }, () =>
  Array.from({ length: M }, () => 0)
);

const queue = [];
let land = 0;

for (let i = 0; i < N; i += 1) {
  for (let j = 0; j < M; j += 1) {
    if (visit[i][j] === 0 && map[i][j] === 1) {
      land += 1;

      queue.push([i, j]);

      while (queue.length) {
        const [y, x] = queue.shift();

        if (visit[y][x]) continue;

        visit[y][x] = 1;

        for (let k = 0; k < 4; k += 1) {
          const ny = y + dy[k];
          const nx = x + dx[k];

          if (ny >= 0 && ny < N && nx >= 0 && nx < M && map[ny][nx] === 1) {
            queue.push([ny, nx]);
          }
        }
      }
    }
  }
}

console.log(land);
