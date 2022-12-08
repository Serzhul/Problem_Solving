// N개의 정점의 쌍 u,v 와 정점의 수 M이 주어질 때 그래프를 만들어 DFS 탐색 순서를 나타내기

function dfs(graph, visit, cur) {
  if (visit[cur]) return;

  visit[cur] = 1;
  console.log(cur);
  graph[cur].forEach((next) => dfs(graph, visit, next));
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

dfs(graph, visit, 1);
