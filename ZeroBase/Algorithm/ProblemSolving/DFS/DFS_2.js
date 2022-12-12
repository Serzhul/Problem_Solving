// 섬의 개수
// N * M 지도가 주어질 때 섬의 개수 구하기

function findLand(N, M, i, j, arr, visit) {
  if (!(i >= 0 && i < N && j >= 0 && j < M)) return;

  if (arr[i][j] === 0 || visit[i][j] === 1) return;

  const dy = [1, 0, -1, 0];
  const dx = [0, 1, 0, -1];

  visit[i][j] = 1;

  for (let t = 0; t < 4; t += 1) {
    findLand(N, M, i + dy[t], j + dx[t], arr, visit);
  }
}

const [N, M] = [5, 4];

const arr = [
  [1, 1, 0, 0],
  [1, 1, 0, 0],
  [0, 0, 0, 1],
  [0, 1, 1, 1],
  [1, 0, 1, 0],
];

const visit = Array.from({ length: N }, () =>
  Array.from({ length: M }, () => 0)
);

let land = 0;

for (let i = 0; i < N; i += 1) {
  for (let j = 0; j < M; j += 1) {
    if (visit[i][j] !== 1 && arr[i][j] === 1) {
      findLand(N, M, i, j, arr, visit);
      land += 1;
    }
  }
}

console.log(land);
