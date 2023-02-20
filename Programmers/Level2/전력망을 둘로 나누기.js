const n = 9;
const wires = [
  [1, 3],
  [2, 3],
  [3, 4],
  [4, 5],
  [4, 6],
  [4, 7],
  [7, 8],
  [7, 9],
];

function dfs(graph, visited, node) {
  visited[node] = true;

  let count = 1;

  for (let i = 0; i < graph[node].length; i += 1) {
    const nextNode = graph[node][i];
    if (!visited[nextNode]) {
      count += dfs(graph, visited, nextNode);
    }
  }
  return count;
}

function getMinDiff(n, wires) {
  let minDiff = Infinity;

  for (let i = 0; i < wires.length; i += 1) {
    const graph = Array.from({ length: n + 1 }, () => []);

    for (let j = 0; j < wires.length; j += 1) {
      if (i === j) continue;
      const [from, to] = wires[j];
      graph[from].push(to);
      graph[to].push(from);
    }

    const visited = Array.from({ length: n + 1 }, () => false);
    const counts = [];

    for (let node = 1; node <= n; node += 1) {
      if (!visited[node]) {
        counts.push(dfs(graph, visited, node));
      }
    }

    const [count1, count2] = counts.sort((a, b) => b - a);

    minDiff = Math.min(minDiff, Math.abs(count1 - count2));
  }

  return minDiff;
}

function solution(n, wires) {
  return getMinDiff(n, wires);
}

console.log(solution(n, wires));
