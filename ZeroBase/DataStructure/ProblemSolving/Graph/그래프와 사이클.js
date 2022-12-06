// N 개의 정수 쌍 u,v가 주어질 때 해당 간선들의 정보를 통해 그래프에 사이클이 존재하는지 확인하기

function bfs(graph, start, maxNode) {
  const queue = [];
  queue.push(start);

  const visit = Array.from({ length: maxNode + 1 }, () => 0);

  while (queue.length) {
    const cur = queue.shift();

    // 1번 방문 했음에도 또 하려고 하는 경우
    if (visit[cur] >= 1) {
      console.log("YES");
      return;
    }

    visit[cur] = 1;

    graph[cur].forEach((el) => queue.push(el));
  }

  console.log("NO");
}

// const arr = [
//   [1, 3],
//   [3, 2],
//   [3, 4],
//   [4, 5],
//   [5, 3],
// ];

const arr = [
  [1, 3],
  [3, 2],
  [3, 4],
  [3, 5],
];

let maxNode = 1;
arr.forEach((el) => {
  maxNode = Math.max(maxNode, Math.max(el[0], el[1]));
});

const graph = Array.from({ length: maxNode + 1 }, () => []);

arr.forEach((el) => graph[el[0]].push(el[1]));

console.log(graph);

bfs(graph, 1, maxNode);
