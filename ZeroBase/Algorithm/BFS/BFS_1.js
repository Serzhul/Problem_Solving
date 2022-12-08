// N, M 정점의 쌍 u,v가 주어질 때 글프를 만들어 BFS 탐색 순서를 나타내라.

function bfs(graph, visit, start) {
  const queue = [];

  queue.push(start);

  while (queue.length) {
    const cur = queue.shift();

    if (visit[cur]) continue;

    visit[cur] = 1;
    console.log(cur);

    graph[cur].forEach((next) => queue.push(next));
  }
}

const N = 12;
const M = 13;
const graph = Array.from({ length: M + 1 }, () => []);

const visit = Array.from({ length: M + 1 }, () => 0);

graph[1].push(2);
graph[1].push(3);
graph[1].push(4);
graph[3].push(5);
graph[3].push(6);
graph[5].push(7);
graph[5].push(8);
graph[6].push(9);
graph[9].push(10);
graph[9].push(11);
graph[10].push(12);
graph[10].push(13);

bfs(graph, visit, 1);
