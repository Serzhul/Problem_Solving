const solution = (input) => {
  const [N, ...nums] = input
    .toString()
    .trim()
    .split("\n")
    .map((el) => Number(el));

  const graph = Array.from({ length: N + 1 }, () => 0);

  nums.forEach((num, idx) => {
    graph[idx + 1] = num;
  });
  const visited = Array.from({ length: N + 1 }, () => false);
  const finished = new Array(N + 1).fill(false);
  const result = [];

  const dfs = (x, graph, visited, finished, result) => {
    visited[x] = true;
    let y = graph[x];
    if (!visited[y]) {
      dfs(y, graph, visited, finished, result);
    } else if (!finished[y]) {
      while (y !== x) {
        result.push(y);
        y = graph[y];
      }
      result.push(x);
    }
    finished[x] = true;
  };

  for (let x = 1; x <= N; x += 1) {
    if (!visited[x]) dfs(x, graph, visited, finished, result);
  }

  console.log(`${result.length}\n${result.sort((a, b) => a - b).join("\n")}`);
};

solution(`7
3
1
1
5
5
4
6`);
