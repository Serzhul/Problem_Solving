const N = 6;
const road = [
  [1, 2, 1],
  [1, 3, 2],
  [2, 3, 2],
  [3, 4, 3],
  [3, 5, 2],
  [3, 5, 3],
  [5, 6, 1],
];
const K = 4;

function solution(N, road, K) {
  const distance = Array.from({ length: N + 1 }, () =>
    Array.from({ length: N + 1 }, () => Infinity)
  );

  road.forEach((node) => {
    const [from, to, cost] = node;

    distance[from][to] = Math.min(distance[from][to], cost);
    distance[to][from] = Math.min(distance[to][from], cost);
  });

  for (let i = 1; i <= N; i += 1) {
    distance[i][i] = 0;
  }

  for (let k = 1; k <= N; k += 1) {
    for (let a = 1; a <= N; a += 1) {
      for (let b = 1; b <= N; b += 1) {
        const cost = distance[a][k] + distance[k][b];

        if (cost < distance[a][b]) {
          distance[a][b] = cost;
        }
      }
    }
  }

  let count = 0;

  for (let i = 1; i <= N; i += 1) {
    if (distance[1][i] <= K) count += 1;
  }

  return count;
}

console.log(solution(N, road, K));
