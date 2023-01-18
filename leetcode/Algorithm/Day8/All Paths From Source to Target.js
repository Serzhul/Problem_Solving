/**
 * @param {number[][]} graph
 * @return {number[][]}
 */

// 각 인덱스가 노드의 번호이며, 각 원소는 해당 인덱스(노드)와 연결된 노드 번호들을 가리킴
const graph = [[1, 2], [3], [3], []];

// BFS
// const allPathsSourceTarget = (graph) => {
//   const arr = [];

//   const queue = [[0]];

//   while (queue.length) {
//     const cur = queue.shift();

//     const last = cur[cur.length - 1];

//     // 그래프의 마지막에 도달했는지 체크 여부
//     if (last === graph.length - 1) {
//       arr.push(cur);
//       continue;
//     }

//     for (let i = 0; i < graph[last].length; i += 1) {
//       const newArr = [...cur, graph[last][i]];
//       queue.push(newArr);
//     }
//   }

//   return arr;
// };

// DFS

const allPathsSourceTarget = (graph) => {
  const paths = [];

  function dfs(graph, paths, node, path = []) {
    path.push(node);

    if (node === graph.length - 1) {
      paths.push(path.slice());
    } else {
      graph[node].forEach((n) => dfs(graph, paths, n, path));
    }
    path.pop();
  }

  dfs(graph, paths, 0);

  return paths;
};

console.log(allPathsSourceTarget(graph));
