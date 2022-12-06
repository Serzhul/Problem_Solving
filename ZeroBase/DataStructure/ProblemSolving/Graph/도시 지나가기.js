// N개의 정수 쌍 u,v가 주어질 때 u->v로 가는 간선들의 정보를 통해 도시를 연결하는 그래프를 만들고, 각 도시별로 몇개의 도시를 지나가는지

function dfs(graph, cur) {
  let ret = 0;
  graph[cur].forEach((next) => {
    ret += dfs(graph, next);
  });
  return ret + 1;
}

const N = 4;
const arr = [
  [1, 3],
  [2, 3],
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

for (let vertex = 1; vertex <= maxNode; vertex += 1) {
  const cityCount = dfs(graph, vertex, 0);
  console.log(`${vertex} : ${cityCount}`);
}
