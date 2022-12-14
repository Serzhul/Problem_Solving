// 사건의 순서
// N개의 사건과 K개의 사건 전후 관계 개수, S개의 서로 다른 두 사건 A,B가 주어질 때, A가 B보다 먼저 일어났다면 -1, A가 B보다 늦게 일어났다면 1, 알 수 없다면 0을 출력

// 경로가 있다는 것은 from 값이 to 값에 앞선 사건이다라는 것을 의미

const [V, K, S] = [5, 5, 3];

const input = [
  [1, 2],
  [1, 3],
  [2, 3],
  [3, 4],
  [2, 4],
];

const query = [
  [1, 5],
  [2, 4],
  [3, 1],
];

const graph = Array.from({ length: V + 1 }, () =>
  Array.from({ length: V + 1 }, () => Infinity)
);

input.forEach((el) => {
  const [from, to] = el;

  graph[from][to] = 1;
});

for (let i = 0; i < V; i += 1) {
  graph[i][i] = 0;
}

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

query.forEach((el) => {
  const [A, B] = el;

  if (graph[A][B] !== Infinity && graph[A][B] > 0) {
    console.log(-1);
  } else if (graph[B][A] !== Infinity && graph[B][A] > 0) {
    console.log(1);
  } else {
    console.log(0);
  }
});

// 1번은 2,3,4보다 항상 앞서 있다.
// 2번은 3,4, 보다
