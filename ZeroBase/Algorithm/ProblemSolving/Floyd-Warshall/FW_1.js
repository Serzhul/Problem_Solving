// 모든 정점간의 최단 경로 구하기

const [V, E] = [5, 14];

const input = [
  [1, 2, 2],
  [1, 3, 3],
  [1, 4, 1],
  [1, 5, 10],
  [2, 4, 2],
  [3, 4, 1],
  [3, 5, 1],
  [4, 5, 3],
  [3, 5, 10],
  [3, 1, 8],
  [1, 4, 2],
  [5, 1, 7],
  [3, 4, 2],
  [5, 2, 4],
];

const graph = Array.from({ length: V + 1 }, () =>
  Array.from({ length: V + 1 }, () => Infinity)
);

input.forEach((el) => {
  const [from, to, val] = el;

  graph[from][to] = val;
});

for (let i = 0; i < V; i += 1) {
  graph[i][i] = 0;
}

console.log(graph);

// 경유지
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
