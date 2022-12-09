// Floyd-Warshall Algorithm
// 방향 그래프가 주어질 때, 시작점에서 다른 모든 정점까지의 최단 경로를 구하여 보자.
// 첫째줄에 V(1<= V <= 2000), E(1<=E<=30000), 시작점 K가 주어진다.
// E개 줄에 걸쳐 각 간선을 나타내는 (U,V,W)가 주어진다.(가중치가 W인 U->V로 가는 경로를 의미한다.)

const [V, E] = [5, 11];
const input = [
  [1, 2, 2],
  [1, 3, 3],
  [1, 4, 1],
  [1, 5, 10],
  [2, 4, 2],
  [3, 4, 1],
  [3, 5, 1],
  [4, 5, 3],
  [3, 1, 8],
  [5, 1, 7],
  [5, 2, 4],
];

const graph = Array.from({ length: V + 1 }, () =>
  Array.from({ length: V + 1 }, () => Infinity)
);

input.forEach((el) => {
  const [from, to, val] = el;
  graph[from][to] = val;
});

for (let i = 1; i <= V; i += 1) {
  graph[i][i] = 0;
}

console.log(graph);

for (let k = 1; k <= V; k += 1) {
  for (let x = 1; x <= V; x += 1) {
    for (let y = 1; y <= V; y += 1) {
      if (graph[x][y] > graph[x][k] + graph[k][y]) {
        graph[x][y] = graph[x][k] + graph[k][y];
      }
    }
  }
}
console.log(graph);
