const solution = (input) => {
  const [[N, M], ...nodes] = input
    .toString()
    .trim()
    .split("\n")
    .map((el, idx) => {
      if (idx === 0) return el.split(" ").map(Number);
      return el.split(" ").map(Number);
    });

  const graph = Array.from({ length: N + 1 }, () => []);

  for (let i = 0; i < N - 1; i += 1) {
    const [from, to, dist] = nodes[i];

    graph[from].push([to, dist]);
    graph[to].push([from, dist]);
  }

  let checked = Array.from({ length: N + 1 }, () => false);
  let distance = Array.from({ length: N + 1 }, () => -1);

  const dfs = (node, count) => {
    if (checked[node]) return;

    checked[node] = true;
    distance[node] = count;

    for (let i = 0; i < graph[node].length; i += 1) {
      const [v, e] = graph[node][i];
      dfs(v, count + e);
    }
  };

  for (let i = N - 1; i < N + M - 1; i += 1) {
    const [from, to] = nodes[i];

    checked = Array.from({ length: N + 1 }, () => false);
    distance = Array.from({ length: N + 1 }, () => -1);

    dfs(from, 0);

    console.log(distance[to]);
  }
};

solution(`4 2
2 1 2
4 3 2
1 4 3
1 2
3 2`);
