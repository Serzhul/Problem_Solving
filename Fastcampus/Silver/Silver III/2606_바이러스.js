const solution = (input) => {
  const [n, m, ...computers] = input
    .toString()
    .trim()
    .split("\n")
    .map((el, idx) => {
      if (idx <= 1) return Number(el);
      return el.split(" ").map(Number);
    });

  const graph = Array.from({ length: n + 1 }, () => []);

  const visited = Array.from({ length: n + 1 }, () => false);

  computers.forEach((computer) => {
    const [from, to] = computer;
    graph[from].push(to);
    graph[to].push(from);
  });

  let count = 0;

  const dfs = (num) => {
    count += 1;
    visited[num] = true;
    for (let i = 0; i < graph[num].length; i += 1) {
      const curNum = graph[num][i];
      if (!visited[curNum]) {
        dfs(curNum);
      }
    }
  };

  dfs(1);

  console.log(count - 1);
};

solution(`7
6
1 2
2 3
1 5
5 2
5 6
4 7`);
