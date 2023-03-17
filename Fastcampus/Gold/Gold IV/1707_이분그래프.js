const solution = (input) => {
  const [K, ...cases] = input
    .toString()
    .trim()
    .split("\n")
    .map((el) => el.split(" ").map(Number));

  for (let i = 0; i < cases.length; i += 1) {
    const [V, E] = cases[i];

    const graph = Array.from({ length: V + 1 }, () => []);
    const visited = Array(V + 1).fill(-1);

    for (let j = i + 1; j < i + 1 + E; j += 1) {
      const [from, to] = cases[j];

      graph[from].push(to);
      graph[to].push(from);
    }

    const bfs = (x, graph, visited) => {
      const queue = [];
      queue.push(x);
      visited[x] = 0;

      while (queue.length) {
        x = queue.shift();

        for (let j = 0; j < graph[x].length; j += 1) {
          const y = graph[x][j];

          if (visited[y] === -1) {
            visited[y] = (visited[x] + 1) % 2;
            queue.push(y);
          }
        }
      }
    };

    const isBipartite = (graph, visited) => {
      for (let x = 1; x < visited.length; x += 1) {
        for (let k = 0; k < graph[x].length; k += 1) {
          const y = graph[x][k];
          if (visited[x] === visited[y]) return false;
        }
      }
      return true;
    };

    for (let i = 1; i <= V; i += 1) {
      if (visited[i] === -1) bfs(i, graph, visited);
    }

    if (isBipartite(graph, visited)) console.log("YES");
    else console.log("NO");

    i += E;
  }
};

solution(`2
3 2
1 3
2 3
4 4
1 2
2 3
3 4
4 2`);
